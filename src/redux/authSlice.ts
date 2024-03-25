// Arquivo: authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authToken: null,
        isAuthenticated: false,
        tenants: [],
        tenantSelect: null
    },
    reducers: {
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        clearAuthToken: (state) => {
            state.authToken = null;
        },
        setTenants: (state, action) => {
            state.tenants = action.payload;
        },
        setTenant: (state, action) => {
            state.tenantSelect = action.payload;
        },
    },
});

export const { setAuthToken, clearAuthToken, setTenants, setTenant } = authSlice.actions;
export const selectAuthToken = (state: { auth: { authToken: any; }; }) => state.auth.authToken;
export default authSlice.reducer;
