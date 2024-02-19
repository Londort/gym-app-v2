import { Link } from 'react-router-dom';
import RoundBtn from '../UI/RoundBtn';
import styles from './DeleteWorkoutPopup.module.css';

import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from 'react-icons/io';

const DeleteWorkoutPopup = (props) => {
  const { toggleDeleteWorkout, deleteWorkout, id } = props;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.header}>Delete the whole Workout?</p>
        <div className={styles.body}>
          <Link
            to="/"
            className={styles.yes}
            onClick={() => {
              deleteWorkout(id);
            }}
          >
            <RoundBtn icon={<IoIosCheckmarkCircleOutline />} />
          </Link>
          <div className={styles.no} onClick={toggleDeleteWorkout}>
            <RoundBtn icon={<IoIosCloseCircleOutline />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteWorkoutPopup;
