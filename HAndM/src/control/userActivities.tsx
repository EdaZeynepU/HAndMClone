import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
    title:string,
    url:string,
    cost:number,
}

interface ProductState {
    favItems: Product[];
    cartItems: Product[];
}

const initialState: ProductState = {
    favItems:[],
    cartItems:[{
        title:"test",
        url:"#",
        cost : 10,
    }],
}

const userActivities = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToFavs:(state,action: PayloadAction<{title:string,url:string,cost:number}>) =>{
            state.favItems.push({
                title: action.payload.title,
                url:action.payload.url,
                cost:action.payload.cost,
            })
        }
    }
});

export default userActivities.reducer;
// export const 