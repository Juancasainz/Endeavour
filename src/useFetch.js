import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [err, setError] = useState(null)

    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal})
    .then(res=> res.json())
    .then(data => {
        setData(data)
        setIsPending(false)
        setError(false)
    })
    .catch(err => {
        if(err.name === 'AbortError'){
            console.log('fecth aborted')
        } else {
            setError(err.message)
            setIsPending(false)
        }
        })
        return () => abortCont.abort()
},[]);

return {data, err, isPending}

}

export default useFetch