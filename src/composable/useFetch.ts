import { ref } from 'vue';
import instance from '../helpers/axios';
import axios from 'axios';

type useFetchParamsType = {
  path: string;
  method?: 'GET' | 'POST';
  query?: {
    [key: string]: string;
  };
};

const { CancelToken } = axios;

const useFetch = ({ path, method = 'GET', query }: useFetchParamsType) => {
  const data = ref<any>(null);
  const isLoading = ref<boolean>(true);
  const error = ref(null);
  const { signal } = new AbortController();

  const request = async () => {
    try {
      const res = await instance(path, {
        method,
        signal,
        params: {
          ...query,
          api_key: import.meta.env.VITE_BASE_API_KEY,
          q: 'Engineer',
          engine: 'google_jobs',
          google_domain: 'google.com',
          hl: 'en',
        },
        cancelToken: CancelToken.source().token,
      });

      isLoading.value = false;
      data.value = res.data;

      return res;
    } catch (err: unknown) {
      if (err instanceof Error) {
        isLoading.value = false;
        (error.value as any) = err;
      }
    }

    isLoading.value = false;
  };

  return { data, isLoading, error, request };
};

export default useFetch;
