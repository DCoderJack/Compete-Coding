import React from 'react'
import LoadingSpinner from './LoadingSpinner.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
        <img src={LoadingSpinner} alt="loadingspinner" />
    </div>
  )
}

export default Spinner