import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (number) => ({
  type: BUY_CAKE,
  payload: number || 1,
});
