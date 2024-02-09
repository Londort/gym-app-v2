import styles from './ExercisePopup.module.css';

import { FaDumbbell, FaRunning } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { GrYoga } from 'react-icons/gr';
import Exercise from './Exercise';
import { useState } from 'react';
import ExerciseForm from './ExerciseForm';

const ExercisePopup = (props) => {
  const {
    toggleExercisePopup,
    isExerciseFormOpen,
    exerciseType,
    toggleExerciseForm,
  } = props;
  console.log(props);

  // const [selectedType, setSelectedType] = useState(null);

  const closePopup = () => {
    toggleExercisePopup();
  };

  return (
    <>
      {!isExerciseFormOpen && (
        <div className={styles.container}>
          <div className={styles.btn}>
            <div className={styles.btn_icon}>
              <IoMdAddCircleOutline
                className={styles.icon}
                onClick={closePopup}
              ></IoMdAddCircleOutline>
            </div>
          </div>
          <ul className={styles.typeList}>
            <li
              className={styles.item}
              onClick={() => {
                // setSelectedType('cardio');
                exerciseType('cardio');
                closePopup();
                toggleExerciseForm();
              }}
            >
              <FaRunning />
              <span>Cardio</span>
            </li>

            <li
              className={styles.item}
              onClick={() => {
                // setSelectedType('weight');
                exerciseType('weight');
                closePopup();
                toggleExerciseForm();
              }}
            >
              <FaDumbbell />
              <span>Weight</span>
            </li>
            <li
              className={styles.item}
              onClick={() => {
                // setSelectedType('stretch');
                exerciseType('stretch');
                closePopup();
                toggleExerciseForm();
              }}
            >
              <GrYoga />
              <span>Stretching</span>
            </li>
          </ul>
        </div>
      )}

      {/* {selectedType && (
        <ExerciseForm
          type={selectedType}
          toggleExerciseForm={toggleExerciseForm}
        />
      )} */}
    </>
  );
};

export default ExercisePopup;
