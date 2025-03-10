import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global';


const getContacts = createAsyncThunk("contacts/getContacts", async (_, thunkAPI) => {
        try{
            const response = await axios.get('/contacts');
            return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
});

const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try{
        const response = await axios.post(`/contacts`, contact);
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
});

const deleteContact = createAsyncThunk("contacts/deleteContacts", async (id, thunkAPI)=>{
    try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
    }catch (error){
        return thunkAPI.rejectWithValue(error.message);
    }

});


//-----------------------------------------------

export { getContacts, addContact, deleteContact, }