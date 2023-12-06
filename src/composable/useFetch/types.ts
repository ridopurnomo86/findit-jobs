export type useFetchParamsType = {
  path: string;
  method?: 'GET' | 'POST';
  query?: {
    [key: string]: string;
  };
};
