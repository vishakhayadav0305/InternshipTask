import React from 'react'
import Button from 'react-bootstrap/Button';

const UpperSection = () => {
  return (
    <>
    <div className='mt-5'style={{backgroundColor:"black"}}>
    <div className=' d-flex justify-content-center'style={{backgroundColor:"black"}}>
      <h1 className='text-light font-weight-bold'>Grow Your Business</h1>
    </div>
    <div className='d-flex justify-content-center'style={{backgroundColor:"black"}}>
      <h1 className='text-light font-weight-bold'>With Email Automation</h1>
    </div>
    <div className='d-flex justify-content-center mt-5'style={{backgroundColor:"black"}}>
      <img src="./images/sec_img.png" alt="sec img" style={{width:"23 rem", height:"16rem"}} />
    </div>
    <div className='d-flex justify-content-center mt-5 mb-5' style={{backgroundColor:"black"}}>
    <Button variant="primary">Get Started</Button>{' '}
    </div>
    </div>
    </>
  )
}

export default UpperSection
