import { useEffect, useState } from "react"

function useCurrencyInfo({currency}) {
    let [data,setdata] = useState({})
    useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json()).then((res)=>setdata(res[currency]))   
        console.log(data);
    },[currency]);
    return data;
}

export default useCurrencyInfo;
