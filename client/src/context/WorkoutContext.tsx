import { createContext, useReducer } from "react";

import { Action, State, workoutReducer } from "./workoutReducer";

interface IContext {
  state: State;
  dispatch: React.Dispatch<Action>;
}

interface IWorkoutProvider {
  children: React.ReactNode;
}

const initialState: State = {
  workouts: [],
};

export const WorkoutContext = createContext<IContext | null>(null);

export const WorkoutProvider = ({ children }: IWorkoutProvider) => {
  const [state, dispatch] = useReducer(workoutReducer, initialState);
  
  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
