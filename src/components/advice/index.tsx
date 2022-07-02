import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

// style
import './style.scss'

// assets
import divider_desktop from '../../assets/pattern-divider-desktop.svg'
import divider_mobile from '../../assets/pattern-divider-mobile.svg'
import dice from '../../assets/icon-dice.svg'


function Advice() {

    const [randomAdvice, setRandomAdvice] = useState({ id: '', advice: '' })
    useEffect(() => {
        getRandomAdvice()
    }, [])

    const getRandomAdvice = () => {
        axios.get('https://api.adviceslip.com/advice').then(res => setRandomAdvice(res.data.slip))
    }

    return (
        <div className='advice'>
            <div className='advice__number'>advice #{randomAdvice.id}</div>
            <div className='advice__text'>{randomAdvice.advice}</div>
            <div className='advice__divider'><img src={divider_desktop} alt="divider desktop icon" className='advice__divider__img' /></div>
            <button className='advice__button' onClick={getRandomAdvice}><img src={dice} alt="dice icon" /></button>
        </div>
    )
}

export default Advice