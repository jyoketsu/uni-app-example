import { AuthState } from "./AuthState";
import { CommonState } from "./CommonState";

export interface RootState {
  common: CommonState;
  auth: AuthState;
}
