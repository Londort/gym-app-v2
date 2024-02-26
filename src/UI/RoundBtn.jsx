import styles from './RoundBtn.module.css';

const RoundBtn = (props) => {
  const { icon, tooltip } = props;
  // console.log(props);
  return (
    <div className={styles.btn}>
      {icon}
      {tooltip && <span className={styles.tooltip}>{tooltip}</span>}
    </div>
  );
};

export default RoundBtn;
