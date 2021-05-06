import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom"
import '../CSS/Main.css'

function Main() {

    const history = useHistory()

    return (
        <div className='container'>
            <div className='all-container'>
                <h1>Trade App</h1>
                <div className='top-container'>
                    <div className='button'
                        onClick={() => {history.push('/binders')}}>
                        <p>Binders</p>
                    </div>
                    <div className='button'
                        onClick={() => {history.push('/trade')}}>
                        <p>Trade</p>
                    </div>
                </div>
                <div className='bottom-container'>
                    <h2>Have</h2>
                    <h2>Find</h2>
                    <h2>Trade</h2>
                </div>
            </div>
        </div>
    )
}

export default Main;
