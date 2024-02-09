// import { useEffect, useState } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoArrowUndoCircleOutline } from 'react-icons/io5';
import { MdOutlinePlaylistAddCircle } from 'react-icons/md';
import { PiDotsThreeCircleVertical } from 'react-icons/pi';
import ExercisePopup from './ExercisePopup';
import Exercise from './Exercise';

import styles from './Workout.module.css';
import ExerciseForm from './ExerciseForm';

const Workout = (props) => {
  const { workout, updateWorkout } = props;

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isExercisePopup, setIsExercisePopup] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  console.log(selectedType);
  const [isExerciseFormOpen, setIsExerciseFormOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleExercisePopup = () => {
    setIsExercisePopup(!isExercisePopup);
  };

  const toggleExerciseForm = () => {
    setIsExerciseFormOpen(!isExerciseFormOpen);
  };

  const exerciseType = (type) => {
    const updateType = type;
    setSelectedType(updateType);
    // console.log(selectedType);
  };

  const addExercise = () => {
    const exercise = {
      title: '',
      sets: '',
      reps: '',
      weight: '',
    };
    workout.exercises.push(exercise);
    updateWorkout(exercise);
    toggleMenu();
  };

  return (
    <>
      <div className={styles.container}>
        <p>Workout {workout.name}</p>

        <div className={`${styles.btn} ${isMenuActive ? styles.open : ''}`}>
          <div className={styles.btn_icon}>
            <PiDotsThreeCircleVertical
              className={styles.icon}
              onClick={toggleMenu}
            ></PiDotsThreeCircleVertical>
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

              <div className={`${styles.add_group} ${styles.icon_wrap}`}>
                <MdOutlinePlaylistAddCircle className={styles.submenu_icon} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.btn_wrapper}></div>
        {workout.exercises.map((exercise) => (
          <Exercise data={exercise} />
        ))}
      </div>

      {isExercisePopup && (
        <ExercisePopup
          toggleExercisePopup={toggleExercisePopup}
          isExercisePopup={isExercisePopup}
          toggleExerciseForm={toggleExerciseForm}
          isExerciseFormOpen={isExerciseFormOpen}
          exerciseType={exerciseType}
        />
      )}
      {isExerciseFormOpen && (
        <ExerciseForm
          type={selectedType}
          toggleExerciseForm={toggleExerciseForm}
          setSelectedType={setSelectedType}
        />
      )}
    </>
  );
};

export default Workout;
