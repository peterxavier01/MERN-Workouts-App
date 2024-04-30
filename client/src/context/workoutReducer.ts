import { IWorkout } from "../types";
import {
  CREATE_WORKOUT,
  DELETE_WORKOUT,
  SET_WORKOUTS,
} from "../utils/constants";

export interface State {
  workouts: IWorkout[];
}

export type Action =
  | { type: "SET_WORKOUTS"; payload: IWorkout[] }
  | { type: "CREATE_WORKOUT"; payload: IWorkout }
  | { type: "DELETE_WORKOUT"; payload: IWorkout };

export const workoutReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_WORKOUTS:
      return {
        workouts: action.payload,
      };
    case CREATE_WORKOUT:
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case DELETE_WORKOUT:
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
