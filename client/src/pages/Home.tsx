import { useEffect } from "react";

import Navbar from "../components/Navbar";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

import { IWorkout } from "../types";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import url, { SET_WORKOUTS } from "../utils/constants";

const Home = () => {
  const { state, dispatch } = useWorkoutsContext();
  const workouts = state.workouts;

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(url);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: SET_WORKOUTS, payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="pages">
        <div className="home">
          <div className="workouts">
            {workouts &&
              workouts.map((workout: IWorkout) => (
                <>
                  <WorkoutDetails key={workout._id} workout={workout} />
                </>
              ))}
          </div>

          <WorkoutForm />
        </div>
      </div>
    </>
  );
};

export default Home;
