import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/nameTrainer.slice"

const store =  configureStore({
    reducer: {
        nameTrainer
    }
})

export default store