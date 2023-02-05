import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get('/contacts')
            return response;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const addContacts = createAsyncThunk(
    'contacts/add',
    async (contact, thunkApi) => {
        try {
            const response = await axios.post('/contacts', {name: contact.name, number: contact.number})
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const deleteContacts = createAsyncThunk(
    'contacts/delete',
    async (id, thunkApi) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (e) {
           return thunkApi.rejectWithValue(e.message); 
        }
    }
)