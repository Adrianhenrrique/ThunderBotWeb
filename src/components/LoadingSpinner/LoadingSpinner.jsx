import { useState, useEffect } from 'react'
import Style from './LoadingSpinner.module.css'

function Home() {

  return (
    <div class={Style.loadingSpinner}>
        <div class={Style.loadingSpinner__1}></div>   
        <div class={Style.loadingSpinner__2}></div>    
        <div class={Style.loadingSpinner__3}></div>    
        <div class={Style.loadingSpinner__4}></div>    
    </div>
    )
}

export default Home