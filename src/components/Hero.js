import React from 'react'

const Hero = () => {
  return (
    <div className='main'>
        <div className='details'>
            <div className='mainHead'>
                YOUR FEET DESERVE THE BEST
            </div>

            <div className='desc'>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </div>

            <div className='btnSection'>
                <button className='shop'>Shop Now</button>
                <button className='category'>Category</button>
            </div>

            <div className='online'>
                <div>Also Available On</div>
                <div className='other'>
                    <img src="images/flipkart.png"/>
                    <img src="images/amazon.png"/>
                </div>
            </div>
        </div>
        <div className='image'>
            <img src='images/hero-image.png'/>
        </div>
    </div>
  )
}

export default Hero