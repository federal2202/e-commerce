import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow_icon.png'
import hero_image from '../assets/hero_image.png'
import { useHero } from '../../utils/hook/useHero'

export default function Hero() {
    const { status, data, error } = useHero()

  return (
    <div className='hero'>
           { status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
        <div className="hero-left">
            <h2>{data.title}</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-button">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
        </>
      )}
    </div>
  )
}
