import { ref } from 'vue';
import { useDebounceParamsType } from './types';

const useDebounce = ({ callback, delay = 1000 }: useDebounceParamsType) => {
  const timerRef = ref();

  timerRef.value = setTimeout(() => {
    callback();
  }, delay);
};

export default useDebounce;
