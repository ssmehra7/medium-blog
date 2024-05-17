import { configureStore } from '@reduxjs/toolkit';
import blogreducer from './slice/blogSlice';
import userreducer from './slice/userSlice'
import allblogreducer from './slice/allblogSlice';
export const store = configureStore({
  reducer: {
    blog: blogreducer,
    user:userreducer,
    allblog:allblogreducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch