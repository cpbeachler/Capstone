import React, { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from 'react-router-dom'
import { setHaveCards, addHaveCard, deleteHaveCard } from "../../store/haveCards"
import '../CSS/Binder.css'


const Binder = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const currentHaveCards = useSelector(state=> state.haveCards)
    const state = useSelector(state=>state)
    const user = useSelector(state=> state.session.user)
    const haveCards = useSelector(state=> state.haveCards)
    const [cardId, setCardId] = useState('')

    const onSubmitHave = (e) => {
        e.preventDefault()
        const sanitizedInput = cardId.toLowerCase()
        const createdCard = dispatch(addHaveCard(sanitizedInput))
    }

    const deleteCard = (e) => {
        e.preventDefault()
        const cardId = e.target.id
        const sanitizedInput = cardId.toLowerCase()
        dispatch(deleteHaveCard(sanitizedInput))
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`api/haveCards/${user.id}`)
            const responseData = await response.json()
            dispatch(setHaveCards(responseData.haveCards))
        }
        fetchData()
    },[])

    return(
        <div>
            <div>
                <form className='haveForm' onSubmit={onSubmitHave}>
                    <label className='haveForm'> Add an owned Card </label>
                    <input
                    type='text'
                    cardId='cardId'
                    className='haveForm'
                    placeholder='Card Name'
                    onChange={(e) =>setCardId(e.target.value)}
                    value={cardId}
                    ></input>
                    <button type='submit'>Add Card</button>
                </form>
                <div>
                    {Object.keys(haveCards).length > 0 &&
                    haveCards.map((card)=>{
                    return (
                        <>
                            <img src={card.image_uris.small}></img>
                            <div onClick={deleteCard} id={card.name}>x</div>
                        </>
                    )})}
                </div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Binder;
