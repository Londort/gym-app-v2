import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  IoArrowUndoCircleOutline,
  IoEllipsisHorizontalCircle,
  IoAddCircleOutline,
  IoBanOutline,
} from 'react-icons/io5';
import ExercisePopup from './ExercisePopup';
import Exercise from './Exercise';
import Menu from '../UI/Menu';

import styles from './Workout.module.css';
import ExerciseForm from './ExerciseForm';
import DeleteWorkoutPopup from './DeleteWorkoutPopup';
import EditExercise from './EditExercise';
import RoundBtn from '../UI/RoundBtn';

const Workout = (props) => {
  const { workout, updateWorkout, deleteWorkout } = props;
  console.log(workout.exercises.length);

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isExercisePopup, setIsExercisePopup] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [isExerciseFormOpen, setIsExerciseFormOpen] = useState(false);
  const [deleteWorkoutPopup, setDeleteWorkoutPopup] = useState(false);
  const [isEditExerciseActive, setIsEditExerciseActive] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleExercisePopup = () => {
    setIsExercisePopup(!isExercisePopup);
  };

  const toggleExerciseForm = () => {
    setIsExerciseFormOpen(!isExerciseFormOpen);
  };

  // Edit-exercise logics

  const toggleEditExercise = (exercise) => {
    setCurrentExercise(exercise);
    setIsEditExerciseActive(!isEditExerciseActive);
  };

  const updateExercise = (exercise) => {
    const updateExercises = workout.exercises.map((item) => {
      if (item.id === exercise.id) {
        return exercise;
      }
      return item;
    });
    workout.exercises = updateExercises;
    updateWorkout(updateExercises);
  };

  // .. ends here

  const exerciseType = (type) => {
    const updateType = type;
    setSelectedType(updateType);
  };

  const toggleDeleteWorkout = () => {
    setDeleteWorkoutPopup(!deleteWorkoutPopup);
  };

  const addExercise = (exercise) => {
    workout.exercises.push(exercise);
    updateWorkout(exercise);
    toggleMenu();
  };

  const deleteExercise = (id) => {
    const updateExercises = workout.exercises.filter(
      (exercise) => exercise.id !== id
    );
    workout.exercises = updateExercises;
    updateWorkout(updateExercises);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.workout_name}>workout {workout.name}</div>
        <Menu icon={<IoEllipsisHorizontalCircle />}>
          <Link to="/">
            <RoundBtn icon={<IoArrowUndoCircleOutline />} tooltip="back" />
          </Link>

          <RoundBtn
            icon={
              <IoAddCircleOutline
                onClick={() => {
                  toggleExercisePopup();
                }}
              />
            }
            tooltip="add new"
          />

          <RoundBtn
            icon={
              <IoBanOutline
                onClick={() => {
                  toggleDeleteWorkout();
                  toggleMenu();
                }}
              />
            }
            tooltip="delete workout"
          />
        </Menu>

        {workout.exercises.length === 0 ? (
          <div className={styles.empty}>
            No exercises yet
            <br />
            start from
            <RoundBtn icon={<IoEllipsisHorizontalCircle />} />
            button
          </div>
        ) : (
          <div className={styles.body}>
            {workout.exercises.map((exercise) => (
              <Exercise
                key={exercise.id}
                data={exercise}
                deleteExercise={deleteExercise}
                EditExercise={toggleEditExercise}
              />
            ))}
          </div>
        )}
      </div>

      {isExercisePopup && (
        <ExercisePopup
          toggleExercisePopup={toggleExercisePopup}
          isExercisePopup={isExercisePopup}
          toggleExerciseForm={toggleExerciseForm}
          isExerciseFormOpen={isExerciseFormOpen}
          exerciseType={exerciseType}
          // setSelectedType={setSelectedType}
        />
      )}
      {isExerciseFormOpen && (
        <ExerciseForm
          type={selectedType}
          toggleExerciseForm={toggleExerciseForm}
          setSelectedType={setSelectedType}
          addExercise={addExercise}
        />
      )}

      {/* Edit exercise */}
      {isEditExerciseActive && (
        <EditExercise
          toggleEditExercise={toggleEditExercise}
          currentExercise={currentExercise}
          setCurrentExercise={setCurrentExercise}
          editExercise={updateExercise}
        />
      )}

      {/* delete workout popup section */}
      {deleteWorkoutPopup && (
        <DeleteWorkoutPopup
          toggleDeleteWorkout={toggleDeleteWorkout}
          deleteWorkout={deleteWorkout}
          id={workout.id}
        />
      )}
    </>
  );
};

export default Workout;
