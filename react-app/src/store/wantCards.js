const SET_WANT ='wantCards/SET_WANT'
const ADD_WANT = 'wantCards/ADD_WANT'
const DEL_WANT = 'wantCards/DEL_WANT'
const REM_WANT = 'wantCards/REM_WANT'

const setWant = (want) => ({
    type: SET_WANT,
    payload: want
})

const addWant = (want) => ({
    type: ADD_WANT,
    payload: want
})

const delWant = (want) => ({
    type: DEL_WANT,
    payload: want
})

const remWant = (want) => ({
    type: REM_WANT,
    payload: want
})

export const clearWant = () => async(dispatch) => {
    console.log('clearWant')
    dispatch(remWant())
}

export const setWantCards = (cards) => async (dispatch) => {
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
    dispatch(setWant(responseData.data))
}

export const addWantCard = (cardId) => async(dispatch) => {
    const externalFetch = await fetch(`https://api.scryfall.com/cards/named?exact=${cardId}`)
    const externalFetchData = await externalFetch.json()
    if (externalFetchData.object === 'card') {
        await fetch('/api/wantCards/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cardId
            })
        })
        dispatch(addWant(externalFetchData))
    }
}

export const deleteOneWantCard = (id) => async(dispatch) => {
    const response = await fetch(`/api/wantCards/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            id
        })

    })
    await response.json()
    dispatch(delWant(id))
}

const initialState = []

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_WANT:
            if(action.payload){
                return action.payload
            }
            return state
        case ADD_WANT:
            if(state){
                return [...state, action.payload]
            }
            return action.payload
        case DEL_WANT:
            return [...state.filter(card => card.name.toLowerCase() !== action.payload)]
        case REM_WANT:
            return []
        default:
            return state
    }
}
