import { RootState } from "../store";

export const selectRequests = (state: RootState) => state.requests.items;
