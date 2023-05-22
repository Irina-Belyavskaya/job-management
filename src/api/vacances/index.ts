import { api } from "api";
import Cookies from "js-cookie";

const headers = {
  headers: {
    'Authorization': 'Bearer ' + Cookies.get('access_token'),
    'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
  }
}

export const getVacancies = async () => {
  const { data } = await api.get(
    '/vacancies/',
    headers
  )
  return data;
}

export const getVacanceById = async (id: number) => {
  const { data } = await api.get(
    `/vacancies/${id}/`,
    headers
  )
  return data;
}

export const getCatalogues = async () => {
  const { data } = await api.get(
    '/catalogues/',
    headers
  )
  return data;
}

