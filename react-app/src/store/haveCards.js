const SET_HAVE ='haveCards/SET_HAVE'
const ADD_HAVE = 'haveCards/ADD_HAVE'
const DEL_HAVE = 'haveCards/DEL_HAVE'

const setHave = (have) => ({
    type: SET_HAVE,
    payload: have
})

const addHave = (have) => ({
    type: ADD_HAVE,
    payload: have
})

const delHave = (have) => ({
    type: DEL_HAVE,
    payload: have
})


export const setHaveCards = (id) => async (dispatch) => {
    const response = await fetch(`/api/haveCards`)
    const cards = await response.json()
    //plug in external api call
    dispatch(setHave(cards))
}

export const addHaveCard = (userId, cardId) => async(dispatch) => {
    const response = await fetch('/api/haveCards', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            cardId
        })
    })
    const createdCard = await response.json()
    await dispatch(addHave(createdCard))
}

export const deleteHaveCard = (id) => async(dispatch) => {
    const response = await fetch('api/haveCards', {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json'
        },
    })
    const deletedCard = await response.json()
    await dispatch(delHave(id))
}

const initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_HAVE:
            return action.payload
        case ADD_HAVE:
            if(state.haveCards){
                return {...state, haveCards:[...state.haveCards, action.payload]}
            }
            return {haveCards: [action.payload]}
        case DEL_HAVE:
            return {...state, haveCards: [...state.haveCards.filter(card => card.id !== action.payload)]}

    }
}
