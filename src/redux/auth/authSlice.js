import { createSlice} from "@reduxjs/toolkit";
import { register, login, logout, refresh } from "./operations";
import { toast } from "react-toastify";

const initialState = {
    user: { name: null, email: null },
    token: "",
    isLoggedIn: false,
    isRefreshing: false,
    error : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers:  builder => {builder 
                                    .addCase(register.fulfilled, handleFulfilled_register )
                                    .addCase(register.rejected, handleRejected_register )
                                            
                                    .addCase(login.fulfilled, handleFulfilled_login )
                                    .addCase(login.rejected, handleRejected_login )

                                    .addCase(logout.fulfilled, handleFulfilled_logout )
                                    .addCase(logout.rejected, handleRejected_logout )
                                    
                                    .addCase(refresh.pending, handlePending_refresh )
                                    .addCase(refresh.fulfilled, handleFulfilled_refresh )
                                    .addCase(refresh.rejected, handleRejected_refresh )
                               }
});

//----------------------------------------------------------------
    function handleFulfilled_register (state, action){ 
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true; 
        state.error = null;
        toast.success("Successful registration!",{autoClose: 500});
    }
    function handleRejected_register (state, action){
        state.error = action.payload;
        if (action.payload === "ERR_BAD_REQUEST")  {
            toast.error("Registration failed! The email is already exist!",{autoClose: 2000});
        } else {
            toast.error("Registration failed! Server error!",{autoClose: 500});
        }
    }

    function handleFulfilled_login (state, action){ 
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true; 
        state.error = null;
        toast.success("Successful login!",{autoClose: 500});
    }
    function handleRejected_login (state, action){
        state.error = action.payload;
        if (action.payload === "ERR_BAD_REQUEST")  {
            toast.error("Login failed! The email or password is wrong!", {autoClose: 2000});
        } else {
            toast.error("Login failed! Server error!",{autoClose: 1000});
        }
    }

    function handleFulfilled_logout (state, action){ 
        
        state.user = { name: null, email: null };
        state.token = '';
        state.isLoggedIn = false;
        state.error = null;
        toast.success("Logout!",{autoClose: 500});
    }
    function handleRejected_logout (state, action){
        state.error = action.payload;
        toast.error("Logout failed! Server error!",{autoClose: 1000});
    }

    function handlePending_refresh (state, action){ 
        state.isRefreshing = true;
    }
    function handleFulfilled_refresh (state, action){ 
        state.user = action.payload;
        state.isLoggedIn = true; 
        state.isRefreshing = false;
        state.error = null;
    }
    function handleRejected_refresh (state, action){
        state.isRefreshing = false;
        state.error = action.payload;
    }
//----------------------------------------------------------------

export const authReducer = authSlice.reducer;