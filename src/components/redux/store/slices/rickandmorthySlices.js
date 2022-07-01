import { createSlice } from '@reduxjs/toolkit';

export const rickandmorthySlice = createSlice({
   name: 'rickandmorthy',
    initialState: {
        items:[],
        isLoading:false,
        page:0,
        whiteList:JSON.parse( localStorage.getItem('whiteList') ) || [],
        itemSelect:null,
        character:{},

    },
    reducers: {
        startLoading: ( state ) => {
            state.isLoading = true;
        },
        
        
        setItems: (state, action ) => {
            state.items = action.payload.items;
            state.isLoading = false;
         },
        setItemsWhiteList:(state, action) => {
            const isInWhiteList = state.whiteList.some(
                (item) => item.name === action.payload.name
              );
              if (!isInWhiteList) {
                const newWhiteList = state.whiteList;
                newWhiteList.push(action.payload);
                state.whiteList = newWhiteList;
                localStorage.setItem('whiteList', JSON.stringify(state.whiteList) )
              }
        },
        remoteWhiteList:(state, action) => {
            const newWhiteList = state.whiteList.filter( item => item.name !== action.payload);
            state.whiteList = newWhiteList;
            localStorage.setItem('whiteList', JSON.stringify(state.whiteList) )

        },
        itemSelected: ( state, action )=> {
            state.itemSelect = action.payload
        },
        getOneCharacter:(state, action) => {
            state.isLoading = false;
            state.character = action.payload.data
            
        }
    }
});
export const { startLoading, setItems, setItemsWhiteList, itemSelected, remoteWhiteList, getOneCharacter } = rickandmorthySlice.actions;