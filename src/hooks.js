import { useState, useEffect } from 'react';

export const useFetch = (url, results) =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${url}?results=${results}`);
            const json = await response.json();
      
            setData(arr => [...arr, ...json.results]);
        }

        fetchData();

    }, [url, results]);

    return data;
}