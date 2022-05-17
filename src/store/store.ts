import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
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

import {allReducers} from './allReducers'

const appReducer = combineReducers({
	...allReducers,
})

const persistConfig = {
	key: 'root',
	storage,
	black: []
}

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (gDM) => gDM({
		serializableCheck: {
			ignoredActions: [FLUSH, PERSIST, REHYDRATE, PAUSE, PURGE, REGISTER],
		}
	})
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
