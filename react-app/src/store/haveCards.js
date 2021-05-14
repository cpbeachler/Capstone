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


export const setHaveCards = (cards) => async (dispatch) => {

    let call = {'identifiers': []}
    cards.map((card, id)=> call.identifiers[id] = {'name': card.cardId})
    const response = await fetch('https://api.scryfall.com/cards/collection', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            call
        )
    })
    const responseData = await response.json()
    dispatch(setHave(responseData.data))
}

export const addHaveCard = (cardId) => async(dispatch) => {
    const response = await fetch('/api/haveCards/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cardId
        })
    })
    const createdCard = await response.json()
    const externalFetch = await fetch(`https://api.scryfall.com/cards/named?exact=${createdCard.cardId}`)
    const externalFetchData = await externalFetch.json()
    dispatch(addHave(externalFetchData))
}

export const deleteHaveCard = (id) => async(dispatch) => {
    const response = await fetch(`api/haveCards/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            id
        })

    })
    const deletedCard = await response.json()
    dispatch(delHave(id))
}

const initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_HAVE:
            return action.payload
        case ADD_HAVE:
            if(state){
                return [...state, action.payload]
            }
            return action.payload
        case DEL_HAVE:
            return [...state.filter(card => card.name.toLowerCase() !== action.payload)]
        default:
            return state
    }
}
