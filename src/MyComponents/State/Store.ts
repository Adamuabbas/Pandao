import {configureStore}  from "@reduxjs/toolkit"
import toggleReducer from "@/MyComponents/State/toggle";


export const store = configureStore({
    reducer: {
        toggle: toggleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;