import { RootState } from "../store";

export const selectFeatures = (state:RootState) => state.route.features;
