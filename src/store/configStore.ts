import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { settingsReducer } from './reducers'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['settings'],
}

const r = combineReducers({
  settings: settingsReducer,
})
const persistedReducer = persistReducer(persistConfig, r)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER],
      },
    }),
})

const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch

export default { store, persistor }
