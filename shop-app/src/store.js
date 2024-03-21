import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import signupReducer from './Slice/signupReducers'



const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['signup'],
};

const rootReducer = combineReducers({
    signup: signupReducer,
});



const persistedReducer = persistReducer(persistConfig,rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const persistor = persistStore(store);