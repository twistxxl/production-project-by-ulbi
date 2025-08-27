import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getConter/getCounter";

export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value
)