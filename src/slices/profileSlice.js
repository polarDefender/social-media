import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    info: null, 
    lightBox: {class: 'hidden', postInfo: null},
    dName: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        makeProfile: (state, action) => {
            state.info = action.payload
        },
        openBox: (state, action) => {
            state.lightBox.class = action.payload.class
            state.lightBox.postInfo = action.payload.postData
        },
        display: (state, action)=>{
            state.dName = action.payload.name
        }
    }
})

export const {makeProfile, openBox, display} = profileSlice.actions
export const profile = (state) => state.profile
export const lb = (state) => state.profile.lightBox
export default profileSlice.reducer 