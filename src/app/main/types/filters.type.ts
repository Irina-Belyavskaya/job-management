export type FilterProps = {
  catalogues: any, 
  handleFilter: (filters: any) => void
}

export type Filters = {
  catalogue: string, 
  from: string | undefined,
  to: string | undefined
}