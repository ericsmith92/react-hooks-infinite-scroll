import { useState, useEffect } from 'react';

export const useFetch = (url, page) =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${url}?results=8`);
            const json = await response.json();
      
            setData(arr => [...arr, ...json.results]);
        }

        fetchData();

    }, [url, page]);

    return data;
}