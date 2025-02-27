import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = (token) =>{
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};


const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
        try{
            const response = await axios.post('/users/signup', user);
            setAuthHeader(response.data.token);
            return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.code);
        }
});


const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try{
        const response = await axios.post(`/users/login`, user);
        setAuthHeader(response.data.token);
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.code);
    }
});


const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try{
        const response = await axios.post(`/users/logout`);
        clearAuthHeader();
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.code);
    }
});


const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.token;

        if (!token ){
            return thunkAPI.rejectWithValue("Unable to fetch user");
        }
        setAuthHeader(token);

        const response = await axios.get(`/users/current`);
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.code);
    }
});


//-----------------------------------------------

export { register, login, logout, refresh, };