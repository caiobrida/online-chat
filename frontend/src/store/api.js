import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/apiCallBegan");
export const apiCallFailure = createAction("api/apiCallFailure");
export const apiCallSuccess = createAction("api/apiCallSuccess");
