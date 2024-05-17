import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the blog interface
export interface Blog {
  title: string;
  content: string;
  author: {
    name: string;
  };
  id: string;
}

// Define the state interface
export interface AllBlogState {
  value: Blog[];
}

// Initial state
const initialState: AllBlogState = {
  value: [{
    title: '',
    content: '',
    author: {
      name: '',
    },
    id: '',
  }]
};

// Create the slice
export const allBlogSlice = createSlice({
  name: 'allblog',
  initialState,
  reducers: {
    addallBlog: (state, action: PayloadAction<Blog[]>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addallBlog } = allBlogSlice.actions;

export default allBlogSlice.reducer;
