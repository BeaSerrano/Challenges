import { useEffect, useState } from 'react';

const useFetchApi = (url) => {
    const [dataApi, setDataApi] = useState(null)

    const getDataApi = async (urlApi) => {
        try {
            const response = await fetch(urlApi)
            if(!response.ok) throw new Error("No se han recibido datos 🔴");
            const data = await response.json()
            setDataApi(data)
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getDataApi(url)
    }, [])


    return({ dataApi })
}

export default useFetchApi