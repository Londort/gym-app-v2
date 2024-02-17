import styles from './ExerciseForm.module.css';
import RoundBtn from '../UI/RoundBtn';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { GrYoga } from 'react-icons/gr';
import { FaDumbbell, FaRunning, FaRegCheckCircle } from 'react-icons/fa';

const EditExercise = (props) => {
  const {
    toggleEditExercise,
    currentExercise,
    setCurrentExercise,
    editExercise,
  } = props;

  const closeForm = () => {
    toggleEditExercise();
    setCurrentExercise({});
  };

  function handleExerciseChange(e) {
    setCurrentExercise(() => ({
      ...currentExercise,
      [e.target.name]: e.target.value,
    }));
  }

  function handleExerciseSubmit() {
    editExercise(currentExercise);
    toggleEditExercise();
  }

  return (
    <div className={styles.container}>
      <div // <--- close button
        className={styles.btn}
        onClick={() => {
          closeForm();
        }}
      >
        <div className={styles.btn_icon}>
          <IoMdAddCircleOutline className={styles.icon}></IoMdAddCircleOutline>
        </div>
      </div>

      <form // <--- form
        className={styles.form}
      >
        <div className={styles.exerciseType}>
          {currentExercise.type === 'cardio' ? (
            <RoundBtn icon={<FaRunning />} />
          ) : currentExercise.type === 'weight' ? (
            <RoundBtn icon={<FaDumbbell />} />
          ) : currentExercise.type === 'stretch' ? (
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
            value={currentExercise.title}
            onChange={handleExerciseChange}
          ></input>
        </label>

        {/* Cardio */}
        {currentExercise.type === 'cardio' && (
          <div className={styles.form_extra}>
            <div>
              <label htmlFor="time">
                <input
                  name="time"
                  type="number"
                  placeholder="time"
                  value={currentExercise.time}
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
                  value={currentExercise.lvl}
                  onChange={handleExerciseChange}
                ></input>
              </label>
              <span>lvl.</span>
            </div>
          </div>
        )}

        {/* Weight */}
        {currentExercise.type === 'weight' && (
          <div className={styles.form_extra}>
            <div>
              <label htmlFor="sets">
                <input
                  name="sets"
                  type="number"
                  placeholder="0"
                  value={currentExercise.sets}
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
                  placeholder="0"
                  value={currentExercise.reps}
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
                  placeholder="0"
                  value={currentExercise.weight}
                  onChange={handleExerciseChange}
                ></input>
              </label>
              <span>weight</span>
            </div>
          </div>
        )}

        {/* Stretching */}
        {currentExercise.type === 'stretch' && (
          <div className={styles.form_extra}>
            <div>
              <label htmlFor="time">
                <input
                  name="time"
                  type="number"
                  placeholder="0"
                  value={currentExercise.time}
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

export default EditExercise;
