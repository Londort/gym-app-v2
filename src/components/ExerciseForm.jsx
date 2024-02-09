import styles from './ExerciseForm.module.css';
import { IoMdAddCircleOutline } from 'react-icons/io';

const ExerciseForm = (props) => {
  const { toggleExerciseForm, selectedType, setSelectedType } = props;
  // console.log(props);

  const closeForm = () => {
    toggleExerciseForm();
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

      <form>
        <label htmlFor="title">
          <input name="title" type="text"></input>
        </label>
        <label>
          <input></input>
        </label>
        <label>
          <input></input>
        </label>
        <label>
          <input></input>
        </label>
      </form>
    </div>
  );
};

export default ExerciseForm;
