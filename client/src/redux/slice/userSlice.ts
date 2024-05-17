import { createSlice } from '@reduxjs/toolkit'


export interface UserState {
  value:{
    id:string,
    email:string,
    name:string,
    password:string,
  }
}

const initialState: UserState = {
  value:{
    id:"",
    email:"",
    name:"",
    password:"",
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    adduser: (state, action) => {
        state.value= action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { adduser } = userSlice.actions

export default userSlice.reducer