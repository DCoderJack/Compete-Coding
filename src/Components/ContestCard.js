import React, { useEffect, useState } from 'react'

const ContestCard = (props) => {

    let {duration, end_time, in_24_hours, name, site, start_time, status, url, codingPlatform} = props;

    let contestDuration = Math.floor(duration/3600);

    const [statusColor, setstatusColor] = useState('success')
    const [siteColor, setsiteColor] = useState('primary')
    const [siteName ,setsiteName] = useState(codingPlatform)

    const color = ()=>{
        if(status === 'CODING'){
            setstatusColor('warning');
        }

        if(codingPlatform === 'all'){
            setsiteName(site)
        }

        if(site === 'HackerRank' || codingPlatform === 'hacker_rank'){
            setsiteColor('success');
            setsiteName('HackerRank')
        }

        if(site === 'LeetCode' || codingPlatform === 'leet_code'){
            setsiteColor('primary');
            setsiteName('LeetCode')
        }

        if(site === 'CodeChef' || codingPlatform === 'code_chef'){
            setsiteColor('danger');
            setsiteName('CodeChef')
        }

        if(site === 'HackerEarth' || codingPlatform === 'hacker_earth'){
            setsiteColor('secondary');
            setsiteName('HackerEarth')
        }

        if(site === 'AtCoder' || codingPlatform === 'at_coder'){
            setsiteColor('warning');
            setsiteName('AtCoder')
        }

        if(site === 'CodeForces' || codingPlatform === 'codeforces'){
            setsiteColor('success');
            setsiteName('CodeForces')
        }

        if(site === 'Kick Start' || codingPlatform === 'kite_start'){
            setsiteColor('primary');
            setsiteName('Kick Start')
        }
    }

    useEffect(() => {
      color();
    }, [])
    

  return (
    <>  
        <div className="container w-70 my-5">
            <div className="card text-center">
                <div className="card-header bg-dark">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className= {`nav-link active bg-${siteColor} text-light fs-5`} href = {url}target="_blank" rel="noreferrer">{siteName}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><strong className='text-center'>In 24 Hrs-</strong>{in_24_hours}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled text-light"><strong>Start : </strong>{new Date(start_time).toGMTString()}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled text-light"><strong>End : </strong>{new Date(end_time).toGMTString()}</a>
                    </li>
                    </ul>
                </div>
                <div className="card-body " style={{backgroundColor : '#e2d1d1'}}>
                    <a className="nav-link" href={url} target = "_blank" rel='noreferrer' style={{textDecoration : 'underline', color : 'blue'}} ><h5 className="card-title">{name}</h5></a>
                    <p className="card-text text-danger"><strong>{contestDuration}</strong> Hours</p>
                    <a href="#" className= {`btn btn-${statusColor}`}>{status}</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContestCard