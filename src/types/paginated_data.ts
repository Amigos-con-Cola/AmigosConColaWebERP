export interface PaginatedData<T> {
  data: T[];
  nextPage: number;
  totalItems: number;
  totalPages: number;
}

export function emptyPaginatedData<T>(): PaginatedData<T> {
  return {
    data: [],
    nextPage: 0,
    totalItems: 0,
    totalPages: 0,
  };
}
