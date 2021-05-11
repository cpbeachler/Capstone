import React, { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from 'react-router-dom'
import { setHaveCards } from "../../store/haveCards"
import '../CSS/Binder.css'


const Binder = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const currentHaveCards = useSelector(state=> state.haveCards)
    const user = useSelector(state=> state.user)
    const [cardId, setCardId] = useState('')
    const [cardComponents, setCardComponents] = useState([])

    const onSubmitHave = () => {

    }

    useEffect(() => {
        async function fetchData(id) {
            const response = await fetch(`api/haveCards${id}`)
            const responseData = await response.json()
            await dispatch(setHaveCards(responseData))
        }
        fetchData()
        setCardComponents()
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
                <div></div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Binder;
