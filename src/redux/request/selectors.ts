import { RootState } from "../store";
export const selectPath = (state: RootState) => state.request.path;
export const selectId = (state: RootState) => state.request.id;