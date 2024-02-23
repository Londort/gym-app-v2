import { Link } from 'react-router-dom';
import Menu from '../UI/Menu';
import { IoArrowUndoCircleOutline } from 'react-icons/io5';
import styles from './DisplayQR.module.css';
import RoundBtn from '../UI/RoundBtn';

const DisplayQR = () => {
  return (
    <div className={styles.container}>
      DisplayQR
      <Link to="/">
        <Menu icon={<IoArrowUndoCircleOutline />}></Menu>
      </Link>
    </div>
  );
};

export default DisplayQR;
