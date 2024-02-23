import { Link } from 'react-router-dom';
import styles from './ScanQR.module.css';
import Menu from '../UI/Menu';
import { IoArrowUndoCircleOutline } from 'react-icons/io5';

const ScanQR = () => {
  return (
    <div className={styles.container}>
      ScanQR
      <Link to="/">
        <Menu icon={<IoArrowUndoCircleOutline />}></Menu>
      </Link>
    </div>
  );
};

export default ScanQR;
