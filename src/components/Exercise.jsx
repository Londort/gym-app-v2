import styles from './Exercise.module.css';

import { FaDumbbell, FaRunning } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { GrYoga } from 'react-icons/gr';
import { useState } from 'react';

const Exercise = ({ data }) => {
  // console.log(data);
  const [isExerciseBodyActive, setIsExerciseBodyActive] = useState(false);

  const toggleExerciseBodyActive = () => {
    setIsExerciseBodyActive(!isExerciseBodyActive);
  };

  return (
    <article className={styles.container}>
      {/* Cardio */}
      {data.type === 'cardio' && (
        <div className={styles.wrapper}>
          <div className={styles.header} onClick={toggleExerciseBodyActive}>
            <div className={styles.header_icon}>
              <FaRunning />
            </div>
            <span className={styles.header_title}>{data.title}</span>
          </div>

          <div
            className={`${styles.body} ${
              isExerciseBodyActive ? styles.active : ''
            }`}
          >
            <ul>
              <li>Time: {data.time}min</li>
              <li>Level: {data.lvl || '0'}</li>
            </ul>
          </div>
        </div>
      )}

      {/* Power Lifting */}
      {data.type === 'weight' && (
        <div className={styles.wrapper}>
          <div className={styles.header} onClick={toggleExerciseBodyActive}>
            <div className={styles.header_icon}>
              <FaDumbbell />
            </div>
            <span className={styles.header_title}>{data.title}</span>
          </div>

          <div
            className={`${styles.body} ${
              isExerciseBodyActive ? styles.active : ''
            }`}
          >
            <ul>
              <li>Sets: {data.sets}</li>
              <li>Reps: {data.reps}</li>
              <li>Weight: {data.weight || '0'}kg</li>
            </ul>
          </div>
        </div>
      )}

      {/* Stretching or Yoga */}
      {data.type === 'stretch' && (
        <div className={styles.wrapper}>
          <div className={styles.header} onClick={toggleExerciseBodyActive}>
            <div className={styles.header_icon}>
              <GrYoga />
            </div>
            <span className={styles.header_title}>{data.title}</span>
          </div>

          <div
            className={`${styles.body} ${
              isExerciseBodyActive ? styles.active : ''
            }`}
          >
            <ul>
              <li>Time: {data.time}min</li>
            </ul>
          </div>
        </div>
      )}
    </article>
  );
};

export default Exercise;
