// Arquivo: store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import empresaSlice from './empresaSlice';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
const rootReducer = combineReducers({
    auth: authReducer,
    empresa: empresaSlice
    // Adicione outros reducers conforme necessário
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // Adicione os nomes dos reducers que você deseja persistir aqui
    whitelist: ['auth', 'empresa']
    // Ou use blacklist para excluir reducers específicos da persistência
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<any>()
export type RootState = ReturnType<typeof store.getState>;
