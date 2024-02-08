import { IoMdAddCircleOutline } from 'react-icons/io';
import styles from './Workout.module.css';

const Workout = (props) => {
  const { workout } = props;
  // console.log(workout);
  return (
    <div className={styles.container}>
      <p>Workout {workout.name}</p>
      <div className={styles.btn}>
        <div className={styles.btn_icon}>
          <IoMdAddCircleOutline className={styles.icon}></IoMdAddCircleOutline>
        </div>
      </div>
    </div>
  );
};

export default Workout;
