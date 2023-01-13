import React, { useEffect, useState } from 'react'
import ContestCard from './ContestCard'
import Spinner from './Spinner'

const Contests = (props) => {

    let {codingPlatform} = props;

    const [contests, setContests] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchContest = async() =>{
        // https://kontests.net/api/v1/leet_code
        const url = `https://kontests.net/api/v1/${codingPlatform}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setContests(parsedData)
        console.log(parsedData)
        setLoading(false)
    }

    useEffect(() => {
      fetchContest();
    }, [])

    return (
        <>  
            {loading && <Spinner />}
            {contests && contests.map((element)=>{
                return <div key={element.url}> <ContestCard name = {element.name} duration = {element.duration} end_time = {element.end_time} in_24_hours = {element.in_24_hours} site = {element.site} start_time = {element.start_time} status = {element.status} url = {element.url} codingPlatform = {codingPlatform}/> </div>
            })}
        </>
    )
}

export default Contests