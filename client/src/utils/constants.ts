export const SET_WORKOUTS = "SET_WORKOUTS";
export const CREATE_WORKOUT = "CREATE_WORKOUT";
export const DELETE_WORKOUT = "DELETE_WORKOUT";

let url;

if (import.meta.env.DEV) {
  url = "http://localhost:4000/api/workouts";
} else if (import.meta.env.PROD) {
  url = import.meta.env.PROD_URL;
}

export default url as string;
