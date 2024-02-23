import styles from './RoundBtn.module.css';

const RoundBtn = (props) => {
  const { icon } = props;
  console.log(props);
  return <div className={styles.btn}>{icon}</div>;
};

export default RoundBtn;
