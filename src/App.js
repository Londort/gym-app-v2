import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WorkoutList from './components/WorkoutList';
import Workout from './components/Workout';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WorkoutList />} />
          <Route path="/workout/:id" element={<Workout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
