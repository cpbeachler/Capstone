import React, { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from 'react-router-dom'
import { setHaveCards, addHaveCard, deleteOneHaveCard } from "../../store/haveCards"
import { setWantCards, addWantCard, deleteOneWantCard } from "../../store/wantCards"
import { showModal, setCurrentModal } from '../../store/modal';
import '../CSS/Binder.css'


const Binder = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const currentHaveCards = useSelector(state=> state.haveCards)
    const user = useSelector(state=> state.session.user)
    const haveCards = useSelector(state=> state.haveCards)
    const wantCards = useSelector(state=> state.wantCards)
    const [haveCardId, setHaveCardId] = useState('')
    const [wantCardId, setWantCardId] = useState('')

    const onSubmitHave = (e) => {
        e.preventDefault()
        const sanitizedInput = haveCardId.toLowerCase()
        const createdCard = dispatch(addHaveCard(sanitizedInput))
    }

    const onSubmitWant = (e) => {
        e.preventDefault()
        const sanitizedInput = wantCardId.toLowerCase()
        const createdCard = dispatch(addWantCard(sanitizedInput))
    }

    const deleteHaveCard = (e) => {
        e.preventDefault()
        const cardId = e.target.id
        const sanitizedInput = cardId.toLowerCase()
        dispatch(deleteOneHaveCard(sanitizedInput))
    }

    const deleteWantCard = (e) => {
        e.preventDefault()
        const cardId = e.target.id
        const sanitizedInput = cardId.toLowerCase()
        dispatch(deleteOneWantCard(sanitizedInput))
    }

    const modalCard = (e) =>{
        e.preventDefault()

    }


    useEffect(() => {
        async function fetchHaveData() {
            const response = await fetch(`api/haveCards/${user.id}`)
            const responseData = await response.json()
            dispatch(setHaveCards(responseData.haveCards))
        }
        async function fetchWantData() {
            const response = await fetch(`api/wantCards/${user.id}`)
            const responseData = await response.json()
            dispatch(setWantCards(responseData.wantCards))
        }
        fetchHaveData()
        fetchWantData()
    },[])

    return(
        <div className='binder-container'>
            <div className='have'>
                <form className='haveForm' onSubmit={onSubmitHave}>
                    <label className='haveForm'> Add an owned Card: </label>
                    <input
                    type='text'
                    cardId='cardId'
                    className='haveForm'
                    placeholder='Card Name'
                    onChange={(e) =>setHaveCardId(e.target.value)}
                    value={haveCardId}
                    ></input>
                    <button type='submit' className="submitButton">Add Card</button>
                </form>
                <div className='haveBinder' id="full">
                    {Object.keys(haveCards).length > 0 &&
                    haveCards.map((card)=>{
                    return (
                        <>
                            <img className='card' src={card.image_uris.small}
                            onClick={deleteHaveCard} id={card.name}></img>
                        </>
                    )})}
                </div>
            </div>
            <div className='want'>
                <form className='wantForm' onSubmit={onSubmitWant}>
                    <label className='wantForm'> Add a wanted Card: </label>
                    <input
                    type='text'
                    cardId='cardId'
                    className='wantForm'
                    placeholder='Card Name'
                    onChange={(e) =>setWantCardId(e.target.value)}
                    value={wantCardId}
                    ></input>
                    <button type='submit' className="submitButton">Add Card</button>
                </form>
                <div className='wantBinder' id="full" id="full">
                    {Object.keys(wantCards).length > 0 &&
                    wantCards.map((card)=>{
                    return (
                        <>
                            <img className='card' src={card.image_uris.small}
                            onClick={deleteWantCard}
                            id={card.name}></img>
                        </>
                    )})}
                </div>

            </div>
        </div>
    )
}

export default Binder;
