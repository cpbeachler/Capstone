import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import '../CSS/Trade.css'
const Trade = () => {
    const user = useSelector(state=> state.session.user)
    const [matches, setMatches] = useState([])
    const [matchComponents, setMatchComponents] = useState([])
    useEffect(()=> {
        async function fetchMatches(){
            const response = await fetch(`api/users/${user.id}`)
            const responseData = await response.json()
            setMatches(responseData.matches)
        }
        fetchMatches()
// implement way for prices and images to be displayed, potential card modal implementation
    },[])
    useEffect(() => {
        function createComponents(){
            setMatchComponents(matches.map((match)=>{
                return(
                    <div className='match'>
                        <div className='matchInfo' id='trader'>
                            <p>Tradr:</p>
                            {match.trader}
                            </div>
                        <div className='matchInfo' id='contact'>
                            <p>Contact Info: </p>
                            {match.contact}</div>
                        <div className='matchInfo' id='haveCard'>
                            <p>Owned Card:</p>
                            {match.haveCard.toUpperCase()}</div>
                        <div className='matchInfo' id='wantCard'>
                            <p>Wanted Card: </p>
                            {match.wantCard.toUpperCase()}</div>
                    </div>
                )
            }))
        }

        createComponents()
    },[matches])

    return (
        <div className='container'>
            <h1 className='header'>Matched Trades</h1>
            <div className='matches'>
                {matchComponents}
            </div>
        </div>
    )
}

export default Trade
