import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Shehbaz456').then(res=>res.json()).then(data=> {
    //         console.log(data);
    //         setData(data)
    //     } )
    // },[])
  return (
    <>
    <div className='bg-gray-600 text-white text-3xl p-4  text-center ' >
    Github followers : {data.followers} <br />
    Public Repos : {data.public_repos} <br />
    Name : {data.name} <br />
    Bio : {data.bio} <br />
    <img src={data.avatar_url} alt="Git picture" width={300} />
  </div>

    </>
   
  )
}

export default Github

export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/Shehbaz456')
  return response.json();
}


