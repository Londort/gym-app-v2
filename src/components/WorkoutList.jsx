import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaDumbbell } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';

import styles from './WorkoutList.module.css';

const WorkoutList = (props) => {
  const { workouts, addWorkout } = props;
  const [isBtnActive, setIsBtnActive] = useState(false);

  useEffect(() => {
    const handleClickOutsideBtn = (e) => {
      const btn = document.querySelector(`.${styles.btn}`);
      if (!btn.contains(e.target)) {
        setIsBtnActive(false);
      }
    };

    if (isBtnActive) {
      document.addEventListener('click', handleClickOutsideBtn);
    } else {
      document.removeEventListener('click', handleClickOutsideBtn);
    }

    return () => {
      document.removeEventListener('click', handleClickOutsideBtn);
    };
  }, [isBtnActive]);

  const toggleOpen = () => {
    if (isBtnActive) {
      addWorkout();
      setIsBtnActive(false);
    } else {
      setIsBtnActive(!isBtnActive);
    }
  };

  return (
    <section className={styles.container}>
      <div className={`${styles.btn} ${isBtnActive ? styles.open : ''}`}>
        <div className={styles.btn_icon}>
          <IoMdAddCircleOutline
            onClick={toggleOpen}
            className={styles.icon}
          ></IoMdAddCircleOutline>
        </div>
      </div>
      <div className={styles.btn_wrapper}></div>

      {!workouts.length && (
        <div className={styles.empty}>
          <div>
            No workouts yet <br />
            start from <br />
            <IoMdAddCircleOutline className={styles.btn_icon} /> <br />
            button
          </div>
        </div>
      )}
      {workouts.map((workout) => (
        <Link
          key={workout.id}
          to={`/workout${workout.name}`}
          className={styles.item}
        >
          <div>
            <FaDumbbell />
            <span>Workout {workout.name}</span>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default WorkoutList;
