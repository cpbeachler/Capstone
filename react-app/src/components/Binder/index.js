import React, { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from 'react-router-dom'
import { setHaveCards } from "../../store/haveCards"
import '../CSS/Binder.css'


const Binder = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const currentHaveCards = useSelector(state=> state.haveCards)
    const state = useSelector(state=>state)
    const user = useSelector(state=> state.session.user)
    const haveCards = useSelector(state=> state.haveCards)
    const [cardId, setCardId] = useState('')
    const [cardComponents, setCardComponents] = useState([])

    const onSubmitHave = () => {

    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`api/haveCards/${user.id}`)
            const responseData = await response.json()
            await dispatch(setHaveCards(responseData.haveCards))
            console.log(state)
        }

        fetchData()

        // async function createHaveCardComponents() {
        //     setCardComponents(haveCards.map((card)=>{
        //         return <div className='card'></div>
        //     }))
        // }
    },[])

    useEffect(()=>{
        console.log(haveCards)
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
                <div>{}</div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Binder;
