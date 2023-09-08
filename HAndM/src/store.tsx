import { configureStore } from "@reduxjs/toolkit";
import userActivities from "./control/userActivities";
import { useDispatch,TypedUseSelectorHook,useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        cart: userActivities
    },
})

export const useAppDispatch:() => typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
