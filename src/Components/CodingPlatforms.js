import React from 'react'
import { Link } from 'react-router-dom'

const CodingPlatforms = () => {
  return (
    <>
      <div className="px-0 py-0 mx-2 mt-1" style={{position: 'fixed', right : '0', zIndex : '1'}}>
          <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Filter Coding Platforms</button>
          <div className='w-50'>
          <div className="offcanvas offcanvas-start w-21" style={{backgroundColor : '#e2d1d1'}}data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header mt-5">
              <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Platforms Hosting Coding Competion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p className='text-success fs-4'>Happy Coding!</p>
              <div className='d-flex justify-content-evenly align-items-center'>
                <div>
                    <Link className="btn btn-outline-success btn-normal m-3" aria-current="page" to="/leetcode" >LeetCode</Link>
                    <Link className="btn btn-outline-primary btn-normal m-3" to="/hackerrank" role="button">HackerRank</Link>
                    <Link className="btn btn-outline-danger btn-normal m-3" to="/codechef" role="button">CodeChef</Link>
                    <Link className="btn btn-outline-secondary btn-normal m-3" to="/hackerearth" role="button">HarkerEarth</Link>
                    <Link className="btn btn-outline-dark btn-normal m-3" to="/atcoder" role="button">AtCoder</Link>
                    <Link className="btn btn-outline-success btn-succesnormal m-3" to="/codeforces" role="button">CodeForces</Link>
                    <Link className="btn btn-outline-primary btn-normal m-3" to="/kickstart" role="button">Kick Start</Link>
                    <Link className="btn btn-outline-warning btn-normal m-3" to="#" role="button">More</Link>
                    <Link className="btn btn-outline-secondary btn-normal m-3" to="#" role="button">More</Link>
                </div>
            </div>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default CodingPlatforms