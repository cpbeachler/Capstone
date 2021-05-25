import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
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

    },[])
    useEffect(() => {
        function createComponents(){
            setMatchComponents(matches.map((match)=>{
                return(
                    <div className='match'>
                        <div className='matchInfo' id='trader'>{match.trader}</div>
                        <div className='matchInfo' id='contact'>{match.contact}</div>
                        <div className='matchInfo' id='haveCard'>{match.haveCard.toUpperCase()}</div>
                        <div className='matchInfo' id='wantCard'>{match.wantCard.toUpperCase()}</div>
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
