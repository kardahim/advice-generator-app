import React from 'react'
import './style.scss'

// assetx
import divider_desktop from '../../assets/pattern-divider-desktop.svg'
import divider_mobile from '../../assets/pattern-divider-mobile.svg'
import dice from '../../assets/icon-dice.svg'

function index() {
    return (
        <div className='advice'>
            <div className='advice__number'>advice #117</div>
            <div className='advice__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat
            </div>
            <div className='advice__divider'><img src={divider_desktop} alt="divider desktop icon" className='advice__divider__img' /></div>
            <button className='advice__button'><img src={dice} alt="dice icon" /></button>
        </div>
    )
}

export default index