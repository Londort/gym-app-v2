// import { useEffect, useState } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoMdAddCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';
import { IoArrowUndoCircleOutline } from 'react-icons/io5';
import { PiDotsThreeCircleVertical } from 'react-icons/pi';
import ExercisePopup from './ExercisePopup';
import Exercise from './Exercise';

import styles from './Workout.module.css';
import ExerciseForm from './ExerciseForm';
import DeleteWorkoutPopup from './DeleteWorkoutPopup';

const Workout = (props) => {
  const { workout, updateWorkout, deleteWorkout } = props;

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isExercisePopup, setIsExercisePopup] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [isExerciseFormOpen, setIsExerciseFormOpen] = useState(false);
  const [deleteWorkoutPopup, setDeleteWorkoutPopup] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleExercisePopup = () => {
    setIsExercisePopup(!isExercisePopup);
    setIsMenuActive(!isMenuActive);
  };

  const toggleExerciseForm = () => {
    setIsExerciseFormOpen(!isExerciseFormOpen);
  };

  const exerciseType = (type) => {
    const updateType = type;
    setSelectedType(updateType);
  };

  const toggleDeleteWorkout = () => {
    setDeleteWorkoutPopup(!deleteWorkoutPopup);
  };

  const addExercise = (exercise) => {
    // const exercise = {
    //   title: '',
    //   sets: '',
    //   reps: '',
    //   weight: '',
    // };
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
        {/* Menu button */}
        <div className={`${styles.btn} ${isMenuActive ? styles.open : ''}`}>
          <aside className={styles.workoutName}>
            <span>Workout {workout.name}</span>
          </aside>
          <div className={styles.btn_icon}>
            <PiDotsThreeCircleVertical
              className={styles.icon}
              onClick={toggleMenu}
            ></PiDotsThreeCircleVertical>

            {/* submenu block */}
            <div className={styles.submenu}>
              <Link
                to="/"
                className={`${styles.backward_btn} ${styles.icon_wrap}`}
              >
                <IoArrowUndoCircleOutline className={styles.submenu_icon} />
              </Link>

              <div className={`${styles.add_exercise} ${styles.icon_wrap}`}>
                <IoMdAddCircleOutline
                  className={styles.submenu_icon}
                  onClick={() => {
                    toggleExercisePopup();
                    toggleMenu();
                  }}
                />
              </div>

              <div
                className={`${styles.del_workout} ${styles.icon_wrap}`}
                onClick={() => {
                  toggleDeleteWorkout();
                  toggleMenu();
                }}
              >
                <IoMdCloseCircleOutline className={styles.submenu_icon} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btn_wrapper}></div>

        {/* Exercises List */}
        <div className={styles.body}>
          {workout.exercises.map((exercise) => (
            <Exercise
              key={exercise.id}
              data={exercise}
              deleteExercise={deleteExercise}
            />
          ))}
        </div>
        {/* Workout name on the side*/}
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
