import { AxiosError, AxiosPromise } from 'axios';
import { useCallback, useEffect, useState } from 'react';

interface IUseQueryReturn<D> {
  data: D | undefined;
  isLoading: boolean;
  error: AxiosError | null;
}

const useQuery = <D>(
  cb: (...rest: any) => AxiosPromise<D>,
  ...rest: any
): IUseQueryReturn<D> => {
  const [data, setData] = useState<IUseQueryReturn<D>>({
    data: undefined,
    error: null,
    isLoading: true
  });

  console.log(rest);

  const handleOnRequest = useCallback(async () => {
    try {
      const res = await cb(...rest);
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
  }, [...rest]);

  useEffect(() => {
    setData({
      data: undefined,
      error: null,
      isLoading: true
    });
    handleOnRequest();
  }, [handleOnRequest]);

  return data;
};

export default useQuery;
