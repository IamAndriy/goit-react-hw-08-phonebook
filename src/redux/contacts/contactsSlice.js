import { createSlice} from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./operations";
import { toast } from "react-toastify";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: { items: [], isLoading: false, error: null },
    extraReducers:  builder => {builder 
                                    .addCase(getContacts.pending,  handlePending)
                                    .addCase(getContacts.fulfilled, handleFulfilledGet)
                                    .addCase(getContacts.rejected, handleRejected)
                                            
                                    .addCase(addContact.pending, handlePending)
                                    .addCase(addContact.fulfilled, handleFulfilledAdd)
                                    .addCase(addContact.rejected, handleRejected)

                                    .addCase(deleteContact.pending, handlePending)
                                    .addCase(deleteContact.fulfilled, handleFulfilledDelete)
                                    .addCase(deleteContact.rejected, handleRejected)
                                }
});


//----------------------------------------------------------------
function handlePending (state ){ 
    state.isLoading = true;
}
function handleRejected (state, action){ 
    state.isLoading = false; 
    state.error = action.payload;
}
function handleFulfilledGet (state, action){ 
    state.isLoading = false; 
    state.error = null;
    state.items = [...action.payload];
}
function handleFulfilledAdd (state, action){

    state.isLoading = false; 
    state.error = null;
    state.items= [...state.items, action.payload];

    toast(`The contact <${action.payload.name} , ${action.payload.number}> was added to the book`, { closeButton: false, 
                                                                                                     ariaLabel: 'The contact was added to the book', 
                                                                                                     className: 'success',
                                                                                                     autoClose: 2000,
                                                                                                   });
}
function handleFulfilledDelete (state, action){ 
    
    state.isLoading = false; 
    state.error = null;
    state.items = state.items.filter(item => item.id !== action.payload.id);

    toast(`The contact < ${action.payload.name} , ${action.payload.number} > was deleted from the book`, {closeButton: false, 
                                                                                                          ariaLabel: 'The contact was deleted from the book', 
                                                                                                          className: 'delSuccess',
                                                                                                          autoClose: 1000}
    );
}
//----------------------------------------------------------------

export const contactsReducer = contactsSlice.reducer;