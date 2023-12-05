'use client';
import { useState, useEffect } from 'react';

// Type for the fetch function, now generic
type FetchFunctionType<T> = () => Promise<T>;

interface UseFetchProjectsReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetchData<T>(fetchFunction: FetchFunctionType<T>): UseFetchProjectsReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction();
        setData(result);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, loading, error };
}

export default useFetchData;
