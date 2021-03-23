import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [err, setError] = useState(null)

    useEffect(()=>{
        fetch(url)
    .then(res=> res.json())
    .then(data => {
        setData(data)
        setIsPending(false)
        setError(false)
    })
    .catch(err => {
        setError(err.message)
        setIsPending(false)})
},[]);

return {data, err, isPending}

}

export default useFetch