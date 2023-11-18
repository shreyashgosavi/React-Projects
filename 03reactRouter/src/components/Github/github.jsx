import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub(){
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/shreyashgosavi')
    //     .than(response => response.json())
    //     .than(data => {
    //         console.log(data)
    //         setData(data)
    //     })

    // },[])

    return(
    <>
        <div className='text-white bg-gray-500 p-4 text-center m-2 text-3xl'>  
             Github Followers : {data.followers}
        <img src='{data.avatar_url}' alt='git picture' width={300}/>
        </div>
     </>

    )
}

export default GitHub

export const githubInfoloader = async ()=> {
    const response = await fetch('https://api.github.com/users/shreyashgosavi')
    return response.json()
}