import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { Grid } from "@mantine/core";
import { IconChevronLeft, IconChevronRight, IconStar, IconStarFilled } from "@tabler/icons-react";

import VacancyInfo from "./vacancy-info.component";

import useStyles from "styles/vacancies.styles";

import { VacanciesProps } from "types/vacancies-props.type";

export default function Vacances({ vacancies }: VacanciesProps) {
  const { classes } = useStyles();

  const [favorites, setFavorites] = useState<any[]>([]);
  const [isStart, setIsStart] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentItems, setCurrentItems] = useState<any[]>([]);

  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleSave = (vacance: any) => {
    setIsStart(false);
    const repeat = favorites.find(favorite_vacance => favorite_vacance.id === vacance.id);

    if (repeat) {
      const newFavorites = favorites.filter(favorite_vacance => favorite_vacance.id !== repeat.id);
      setFavorites([...newFavorites]);
    } else {
      setFavorites([...favorites, vacance]);
    }
  };

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") || ""));
  }, [])

  useEffect(() => {
    if (!isStart)
      localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, isStart])

  useEffect(() => {
    if (vacancies) {
      setTotalPages(Math.ceil(vacancies.length / itemsPerPage));
      setCurrentItems(vacancies.slice(startIndex, endIndex));
    }

    if (vacancies === null && favorites) {
      setTotalPages(Math.ceil(favorites.length / itemsPerPage));
      setCurrentItems(favorites.slice(startIndex, endIndex));
    }
  }, [endIndex, startIndex, itemsPerPage, vacancies, favorites])

  const handlePageChange = (selectedPage: any) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      {
        vacancies && currentItems?.map((vacancy: any) =>
          <Grid.Col
            data-elem={`vacancy-${vacancy.id}`}
            key={vacancy.id}
            className={classes.wrap_vacancy}
          >
            <VacancyInfo vacancy={vacancy} />
            {
              favorites.find(favorite_vacancy => favorite_vacancy.id === vacancy.id)
                ?
                <IconStarFilled
                  data-elem={`vacancy-${vacancy.id}-shortlist-button`}
                  className={classes.iconStarFilled}
                  onClick={() => { handleSave(vacancy) }}
                />
                :
                <IconStar
                  data-elem={`vacancy-${vacancy.id}-shortlist-button`}
                  className={classes.iconStar}
                  onClick={() => { handleSave(vacancy) }}
                />
            }
          </Grid.Col>
        )
      }
      {
        vacancies == null && currentItems?.map((vacancy: any) =>
          <Grid.Col
            key={vacancy.id}
            className={classes.wrap_vacancy}
          >
            <VacancyInfo vacancy={vacancy} />
            <IconStarFilled
              className={classes.iconStarFilled}
              onClick={() => { handleSave(vacancy) }}
            />
          </Grid.Col>
        )
      }
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        previousLabel={<IconChevronLeft />}
        nextLabel={<IconChevronRight />}
        breakLabel={"..."}
        containerClassName={classes.paginationContainer}
        activeLinkClassName={classes.activePageLink}
        pageLinkClassName={classes.paginationPageLink}
        pageClassName={classes.paginationPage}
        previousLinkClassName={classes.paginationPageLink}
        nextLinkClassName={classes.paginationPageLink}
        disabledClassName={classes.disabledPage}
      />
    </>
  )
}