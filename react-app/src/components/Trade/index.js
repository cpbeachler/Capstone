import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"



const Trade = () => {

    const user = useSelector(state=> state.session.user)


    useEffect(()=> {
        // async function fetchTradePairs(wantedCards){
        //     const response = await fetch(`api/users/${user.id}`, {
        //         method: 'GET',
        //         headers: {
        //                 "Content-Type": 'application/json'
        //         },
        //         body: JSON.stringify({
        //             wantedCards
        //         })
        //     })
        //     const responseData = await response.json()
        //     console.log(responseData)
        // }
        // async function fetchWantedCards(){
        //     const response = await fetch(`api/wantCards/${user.id}`)
        //     const responseData = await response.json()
        //     console.log(responseData.wantCards)
        //     let wantedCards = []
        //     responseData.wantCards.forEach(card=>{
        //         wantedCards.push(card.cardId)
        //     })
        //     return wantedCards
        // }
        // fetchTradePairs(fetchWantedCards())
        async function fetchTradePairs(){
            const response = await fetch(`api/users/${user.id}`)
        }
    },[])

    return (
        <div>
            <div>

            </div>
            <div>
                {/* for each match display a list of card wanted card had , and email */}
            </div>
        </div>
    )
}

export default Trade
