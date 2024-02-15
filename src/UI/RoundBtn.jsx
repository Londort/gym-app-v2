import styles from './RoundBtn.module.css';

const RoundBtn = ({ icon }) => {
  return <div className={styles.btn}>{icon}</div>;
};

export default RoundBtn;
