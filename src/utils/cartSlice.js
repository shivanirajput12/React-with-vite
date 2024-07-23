import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {

            //REDUX TOOLKIT, return not mandatory, it uses imer (liberary) behined the scenes
            //WE HAVE TO MUTATE THE STATE
            state.items.push(action.payload)

            // VANILA(Older Redux)Redux = DON'T MUTATE STATE , Returning was mandatory

            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState
            //mutating the state over here

        },
        removeItem: (state) => {
            state.items.pop();
        },

        // originalState = {items: ["burger"]}
        clearcart: (state) => {

            state.items.length = 0 //his makes like this state = []
                // RTK- either mutate the existing state or return a new state
                // state = ["hii"]//it will not work (nothing will happen usig this)

            //return { items: [] }; //this new [] will be replaced inside originalState = {items: []}

        }

    }

});
export const { addItem, removeItem, clearcart } = cartSlice.actions;
export default cartSlice.reducer;