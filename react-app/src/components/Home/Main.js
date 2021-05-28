import React from "react";
import {useHistory} from "react-router-dom"
import '../CSS/Main.css'

function Main() {

    const history = useHistory()

    return (
        <div className='container'>
            <div className='all-container'>
                <h1 className='header' id='name'>Tradr</h1>
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
                <p className='description'>Welcome to Tradr! A trading card online binder and trade organizer for Magic: The Gathering. After either creating an account or logging in
                    head on over to the binder page and add some cards! This will match you with other users based on location and your trade matches and display them
                    in the trade section.
                </p>
                <div className='bottom-container'>
                    <h2 className='header'>Have</h2>
                    <h2 className='header'>Find</h2>
                    <h2 className='header'>Trade</h2>
                </div>
            </div>
        </div>
    )
}

export default Main;
