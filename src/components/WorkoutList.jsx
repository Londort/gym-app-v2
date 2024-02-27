import { Link } from 'react-router-dom';

import { FaDumbbell } from 'react-icons/fa';
import { RiQrCodeLine, RiQrScan2Line } from 'react-icons/ri';
import { HiOutlineInformationCircle } from 'react-icons/hi2';
import {
  IoEllipsisHorizontalCircle,
  IoAddCircleOutline,
} from 'react-icons/io5';

import styles from './WorkoutList.module.css';
import RoundBtn from '../UI/RoundBtn';
import Menu from '../UI/Menu';

const WorkoutList = (props) => {
  const { workouts, addWorkout } = props;

  return (
    <section className={styles.container}>
      <Menu icon={<IoEllipsisHorizontalCircle />}>
        <RoundBtn
          icon={<IoAddCircleOutline onClick={addWorkout} />}
          tooltip="add workout"
        />
        <Link to="displayQR">
          <RoundBtn icon={<RiQrCodeLine />} tooltip="display QR" />
        </Link>
        <Link to="scanQR">
          <RoundBtn icon={<RiQrScan2Line />} tooltip="scan QR" />
        </Link>
        <RoundBtn icon={<HiOutlineInformationCircle />} tooltip="info" />
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
          <FaDumbbell />
          <span>Workout {workout.name}</span>
        </Link>
      ))}
    </section>
  );
};

export default WorkoutList;
