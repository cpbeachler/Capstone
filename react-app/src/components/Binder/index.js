import React, { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { setHaveCards, addHaveCard, deleteOneHaveCard } from "../../store/haveCards"
import { setWantCards, addWantCard, deleteOneWantCard } from "../../store/wantCards"
// import { showModal, setCurrentModal } from '../../store/modal';
import '../CSS/Binder.css'


const Binder = () => {
    const dispatch = useDispatch()
    // const currentHaveCards = useSelector(state=> state.haveCards)
    const user = useSelector(state=> state.session.user)
    const haveCards = useSelector(state=> state.haveCards)
    const wantCards = useSelector(state=> state.wantCards)
    const [haveCardId, setHaveCardId] = useState('')
    const [wantCardId, setWantCardId] = useState('')

    const onSubmitHave = (e) => {
        e.preventDefault()
        const sanitizedInput = haveCardId.toLowerCase()
        dispatch(addHaveCard(sanitizedInput))
        setHaveCardId('')
    }

    const onSubmitWant = (e) => {
        e.preventDefault()
        const sanitizedInput = wantCardId.toLowerCase()
        dispatch(addWantCard(sanitizedInput))
        setWantCardId('')
    }

    const deleteHaveCard = (e) => {
        e.preventDefault()
        if(user.id === 1){
            window.alert("For deleting cards, please create a new user!")
        } else {
            const cardId = e.target.id
            const sanitizedInput = cardId.toLowerCase()
            dispatch(deleteOneHaveCard(sanitizedInput))
        }
    }

    const deleteWantCard = (e) => {
        e.preventDefault()
        if(user.id === 1){
            window.alert("For deleting cards, please create a new user!")
        } else {
            const cardId = e.target.id
            const sanitizedInput = cardId.toLowerCase()
            dispatch(deleteOneWantCard(sanitizedInput))
        }
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
                <h1 className='title'>Have Binder</h1>
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
                <p className='text'>Add cards to your have binder to find others to trade with! Accepts exact card names.
                Clicking a card will remove it from your binder.
                </p>
                <div className='haveBinder' id="full">
                    {Object.keys(haveCards).length > 0 &&
                    haveCards.map((card)=>{
                        let cardColor = 'Silver'
                        if(card.colors.length){
                            cardColor =
                                card.colors[0] === 'B' ? 'Black':
                                card.colors[0] === 'W' ? 'White':
                                card.colors[0] === 'U' ? 'Blue':
                                card.colors[0] === 'R' ? 'Red':
                                card.colors[0] === 'G' ? 'Green':
                                'Silver'
                        }
                        if (card.card_faces){
                            return (
                            <>
                                <img key={card.name} alt={card.name} className={`card, ${cardColor}`} src={card.card_faces[0].image_uris.small}
                                onClick={deleteHaveCard}
                                id={card.card_faces[0].name}
                                ></img>
                            </>
                            )
                        }
                    return (
                        <>
                            <img alt={card.name} className={`card, ${cardColor}`} src={card.image_uris.small}
                            onClick={deleteHaveCard} id={card.name} ></img>
                        </>
                    )})}
                </div>
            </div>
            <div className='want'>
                <h1 className='title'>Want Binder</h1>
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
                <p className='text'>Add cards to your have binder to find others to trade with! Accepts exact card names.
                Clicking a card will remove it from your binder.
                </p>
                <div className='wantBinder' id="full">
                    {Object.keys(wantCards).length > 0 &&
                    wantCards.map((card)=>{
                        let cardColor = 'Silver'
                        if(card.colors.length){
                            cardColor =
                                card.colors[0] === 'B' ? 'Black':
                                card.colors[0] === 'W' ? 'White':
                                card.colors[0] === 'U' ? 'Blue':
                                card.colors[0] === 'R' ? 'Red':
                                card.colors[0] === 'G' ? 'Green':
                                'Silver'
                        }
                        if (card.card_faces){
                            return (
                                <>
                                <img key={card.name} alt={card.name} className={`card, ${cardColor}`} src={card.card_faces[0].image_uris.small}
                                onClick={deleteWantCard}
                                id={card.card_faces[0].name}></img>
                            </>
                            )
                        }

                    return (
                        <>
                            <img key={card.name} alt={card.name} className={`card, ${cardColor}`} src={card.image_uris.small}
                            onClick={deleteWantCard}
                            id={card.name}></img>
                        </>
                    )})}
                </div>

            </div>
            <p></p>
        </div>
    )
}

export default Binder;
