import { AxiosError, AxiosPromise } from 'axios';
import { useCallback, useEffect, useState } from 'react';

interface IUseQueryReturn<D> {
  data: D | undefined;
  isLoading: boolean;
  error: AxiosError | null;
}

const useMutation = <D>(): [
  (cb: () => AxiosPromise<D>) => void,
  IUseQueryReturn<D>
] => {
  const [data, setData] = useState<IUseQueryReturn<D>>({
    data: undefined,
    error: null,
    isLoading: false
  });

  const handleOnRequest = useCallback(async (cb: () => AxiosPromise<D>) => {
    setData((prevState) => ({
      ...prevState,
      isLoading: true
    }));
    try {
      const res = await cb();
      setData((prevState) => ({
        ...prevState,
        data: res.data
      }));
    } catch (e: unknown) {
      setData((prevState) => ({
        ...prevState,
        error: e as AxiosError
      }));
    } finally {
      setData((prevState) => ({
        ...prevState,
        isLoading: false
      }));
    }
  }, []);

  return [handleOnRequest, data];
};

export default useMutation;
