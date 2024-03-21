import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    destination: '',
  },
  reducers: {
    updateDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload
    },
  },
})

export const { updateDestination } = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer
