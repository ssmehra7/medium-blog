import { createSlice } from '@reduxjs/toolkit'


export interface BlogState {
  value:{
    title:string,
    content:string
  }
}

const initialState: BlogState = {
  value:{
    title:"",
    content:""
  }
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addblog: (state, action) => {
        state.value= action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { addblog } = blogSlice.actions

export default blogSlice.reducer