import { ref } from 'vue';
import instance from 'helpers/axios';
import axios from 'axios';
import { useFetchParamsType } from './types';

const { CancelToken } = axios;

const useFetch = ({ path, method = 'GET', query }: useFetchParamsType) => {
  const data = ref<any>(null);
  const isLoading = ref<boolean>(true);
  const error = ref(null);
  const { signal } = new AbortController();

  const request = async ({ optionalQuery }: { optionalQuery?: any }) => {
    isLoading.value = true;

    try {
      const res = await instance(path, {
        method,
        signal,
        params: {
          ...query,
          ...optionalQuery,
          api_key: import.meta.env.VITE_BASE_API_KEY,
          google_domain: 'google.com',
          hl: 'en',
        },
        cancelToken: CancelToken.source().token,
      });

      data.value = res.data;

      return res;
    } catch (err: unknown) {
      if (err instanceof Error) {
        (error.value as any) = err;
      }
    } finally {
      isLoading.value = false;
    }
  };

  return { data, isLoading, error, request };
};

export default useFetch;
