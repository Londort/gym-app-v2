// import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaDumbbell } from 'react-icons/fa';
import { MdQrCodeScanner } from 'react-icons/md';
import { RiQrCodeLine, RiQrScan2Line } from 'react-icons/ri';
import { HiOutlineInformationCircle } from 'react-icons/hi2';
import {
  IoEllipsisHorizontalCircle,
  IoInformationCircleOutline,
  IoAddCircleOutline,
} from 'react-icons/io5';

import styles from './WorkoutList.module.css';
import RoundBtn from '../UI/RoundBtn';
import Menu from '../UI/Menu';

const WorkoutList = (props) => {
  const { workouts, addWorkout } = props;
  // const [isBtnActive, setIsBtnActive] = useState(false);

  return (
    <section className={styles.container}>
      <Menu icon={<IoEllipsisHorizontalCircle />}>
        <RoundBtn icon={<IoAddCircleOutline onClick={addWorkout} />} />
        <RoundBtn icon={<HiOutlineInformationCircle />} />
        <RoundBtn icon={<RiQrCodeLine />} />
        <RoundBtn icon={<RiQrScan2Line />} />
      </Menu>
      <div className={styles.btn_wrapper}></div>

      {!workouts.length && (
        <div className={styles.empty}>
          No workouts yet
          <br />
          start from
          <RoundBtn icon={<IoEllipsisHorizontalCircle />} />
          button
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
