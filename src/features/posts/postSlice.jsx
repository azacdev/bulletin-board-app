import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
  {
    id: 1, 
    title: 'Learning Redex Toolkit',
    content: "I've heard good things",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsup: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      cofee: 0
    }  
  },
  {
    id: 2, 
    title: 'Slices', 
    content: "The more i say slice, the more i want pizza",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsup: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      cofee: 0
    }
  }
]

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsup: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              cofee: 0
            }
          }
        }
      }
    },
    reactionAdded (state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    }
    }
})

export const selectAllPost = (state) => state.posts

export const { postAdded, reactionAdded } = postSlice.actions

export default postSlice.reducer