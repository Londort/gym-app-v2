import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import LocalStorage from './handlers/LocalStorage';
import WorkoutList from './components/WorkoutList';
import Workout from './components/Workout';

import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => setWorkouts(LocalStorage.getWorkouts()), []);

  const addWorkout = () => {
    const workout = {
      id: uuidv4(),
      name: workouts.length + 1,
      exercises: [],
    };
    const updateWorkouts = [...workouts, workout];
    LocalStorage.updateWorkouts(updateWorkouts);
    setWorkouts(updateWorkouts);
  };

  const deleteWorkout = (id) => {
    const updateWorkouts = workouts.filter((workout) => workout.id !== id);
    LocalStorage.updateWorkouts(updateWorkouts);
    setWorkouts(updateWorkouts);
    // window.location.href = '/';
  };

  const updateWorkout = (workout) => {
    const newWorkouts = workouts.map((item) => {
      if (workout.id === item.id) {
        return workout;
      }
      return item;
    });
    LocalStorage.updateWorkouts(newWorkouts);
    setWorkouts(newWorkouts);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <WorkoutList workouts={workouts} addWorkout={addWorkout} />
            }
          />
          {workouts.map((workout) => (
            <Route
              key={workout.id}
              path={`/workout${workout.name}`}
              element={
                <Workout
                  workout={workout}
                  updateWorkout={updateWorkout}
                  deleteWorkout={deleteWorkout}
                />
              }
            />
          ))}

          {/* <Route path="/workout/:name" element={<Workout />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
