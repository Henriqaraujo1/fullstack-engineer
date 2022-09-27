import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state,action) => {
            const {cardId, front, back} = action.payload;
            state.cards[cardId] = {
                id: cardId,
                front: front,
                back: back
            }
        }
    }
}

//Create and export the cardSlice
export const cardsSlice = createSlice(options)

//export selectos
export const selectCards = (state) => state.cards.cards;
//action  + reducers
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;