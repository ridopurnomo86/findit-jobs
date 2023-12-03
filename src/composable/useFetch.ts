import { ref, watchEffect } from 'vue';
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
  const isLoading = ref<boolean>(false);
  const error = ref(null);
  const { signal, abort } = new AbortController();

  const request = async () => {
    isLoading.value = true;

    try {
      const res = await instance(path, {
        method,
        signal,
        params: {
          ...query,
          api_key: import.meta.env.VITE_BASE_API_KEY,
          q: 'Software Engineer, Frontend, Backend',
          engine: 'google_jobs',
          google_domain: 'google.com',
        },
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        cancelToken: CancelToken.source().token,
      });

      if (res) {
        isLoading.value = false;
        data.value = res.data;
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        isLoading.value = false;
        (error.value as any) = err;
      }
    }
  };

  watchEffect(async () => {
    await request();
    if (data.value) abort();
  }, {});

  return { data, isLoading };
};

export default useFetch;
