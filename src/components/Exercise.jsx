import { useState } from 'react';
import styles from './Exercise.module.css';

import { FaDumbbell, FaRunning } from 'react-icons/fa';
import { GrYoga } from 'react-icons/gr';
import { RiMenuUnfoldLine } from 'react-icons/ri';
import { MdEditNote, MdOutlineDeleteForever } from 'react-icons/md';

const Exercise = ({ data, deleteExercise }) => {
  console.log(data);

  const [isExerciseBodyActive, setIsExerciseBodyActive] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleExerciseBodyActive = () => {
    setIsExerciseBodyActive(!isExerciseBodyActive);
  };

  const toggleSubmenuOpen = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
    // console.log(isSubmenuOpen);
  };

  const consoleLog = (e) => console.log(e.target);

  const noPropagation = (e) => {
    e.stopPropagation();
    console.log(e.target);
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

          {/* exercise body part */}
          <div
            className={`${styles.body} ${
              isExerciseBodyActive ? styles.active : ''
            }`}
          >
            {/* submenu block */}
            <div
              className={`${styles.submenu} ${
                isSubmenuOpen ? styles.active : ''
              }`}
              onClick={toggleSubmenuOpen}
            >
              <div className={styles.submenu_icon}>
                <RiMenuUnfoldLine />
              </div>

              <div
                className={styles.submenu_edit}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('edit is clicked');
                }}
              >
                <MdEditNote />
              </div>

              <div
                className={styles.submenu_del}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteExercise(data.id);
                }}
              >
                <MdOutlineDeleteForever />
              </div>
            </div>

            {/* body detailes list */}
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
            <div
              onClick={toggleSubmenuOpen}
              className={`${styles.submenu} ${
                isSubmenuOpen ? styles.active : ''
              }`}
            >
              <div className={styles.submenu_icon}>
                <RiMenuUnfoldLine />
              </div>
              <div className={styles.submenu_edit}>
                <MdEditNote />
              </div>
              <div
                className={styles.submenu_del}
                onClick={() => deleteExercise(data.id)}
              >
                <MdOutlineDeleteForever />
              </div>
            </div>

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
            <div
              onClick={toggleSubmenuOpen}
              className={`${styles.submenu} ${
                isSubmenuOpen ? styles.active : ''
              }`}
            >
              <div className={styles.submenu_icon}>
                <RiMenuUnfoldLine />
              </div>
              <div className={styles.submenu_edit}>
                <MdEditNote />
              </div>
              <div
                className={styles.submenu_del}
                onClick={() => deleteExercise(data.id)}
              >
                <MdOutlineDeleteForever />
              </div>
            </div>

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
