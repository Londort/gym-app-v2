import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './ExerciseForm.module.css';
import RoundBtn from '../UI/RoundBtn';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { GrYoga } from 'react-icons/gr';
import { FaDumbbell, FaRunning, FaRegCheckCircle } from 'react-icons/fa';

const ExerciseForm = (props) => {
  const { toggleExerciseForm, type, setSelectedType, addExercise } = props;

  const [exercise, setExercise] = useState({});

  const closeForm = () => {
    toggleExerciseForm();
  };

  const handleExerciseChange = (e) => {
    setExercise(() => ({
      ...exercise,
      [e.target.name]: e.target.value,
    }));
    // setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  const handleExerciseSubmit = () => {
    exercise.id = uuidv4();
    exercise.type = type;
    addExercise(exercise);
    closeForm();
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.btn}
        onClick={() => {
          closeForm();
          setSelectedType(null);
        }}
      >
        <div className={styles.btn_icon}>
          <IoMdAddCircleOutline className={styles.icon}></IoMdAddCircleOutline>
        </div>
      </div>

      <form className={styles.form}>
        <div className={styles.exerciseType}>
          {type === 'cardio' ? (
            <RoundBtn icon={<FaRunning />} />
          ) : type === 'weight' ? (
            <RoundBtn icon={<FaDumbbell />} />
          ) : type === 'stretch' ? (
            <RoundBtn icon={<GrYoga />} />
          ) : (
            ''
          )}
        </div>
        <label htmlFor="title">
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleExerciseChange}
          ></input>
        </label>
        {type === 'cardio' && (
          <div className={styles.form_extra}>
            <div>
              <label htmlFor="time">
                <input
                  name="time"
                  type="number"
                  placeholder="time"
                  onChange={handleExerciseChange}
                ></input>
              </label>
              <span>min.</span>
            </div>

            <div>
              <label htmlFor="lvl">
                <input
                  name="lvl"
                  type="number"
                  placeholder="level"
                  onChange={handleExerciseChange}
                ></input>
              </label>
              <span>lvl.</span>
            </div>
          </div>
        )}

        {type === 'weight' && (
          <div className={styles.form_extra}>
            <div>
              <label htmlFor="sets">
                <input
                  name="sets"
                  type="number"
                  onChange={handleExerciseChange}
                ></input>
              </label>
              <span>sets</span>
            </div>
            <div>
              <label htmlFor="reps">
                <input
                  name="reps"
                  type="number"
                  onChange={handleExerciseChange}
                ></input>
              </label>
              <span>reps</span>
            </div>
            <div>
              <label htmlFor="weight">
                <input
                  name="weight"
                  type="number"
                  onChange={handleExerciseChange}
                ></input>
              </label>
              <span>weight</span>
            </div>
          </div>
        )}

        {type === 'stretch' && (
          <div className={styles.form_extra}>
            <div>
              <label htmlFor="time">
                <input
                  name="time"
                  type="number"
                  onChange={handleExerciseChange}
                ></input>
              </label>
              <span>min.</span>
            </div>
          </div>
        )}
      </form>

      {/* submit btn */}
      <div className={styles.form_footer}>
        <RoundBtn icon={<FaRegCheckCircle onClick={handleExerciseSubmit} />} />
      </div>
    </div>
  );
};

export default ExerciseForm;
