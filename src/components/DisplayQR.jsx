import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import Menu from '../UI/Menu';
import LocalStorage from '../handlers/LocalStorage';
import { IoArrowUndoCircleOutline } from 'react-icons/io5';
import styles from './DisplayQR.module.css';
import { useEffect, useState } from 'react';

const DisplayQR = () => {
  const [qrData, setQRData] = useState({});
  console.log(qrData);

  useEffect(() => {
    const workouts = LocalStorage.getWorkouts();
    const data = workouts;
    setQRData(data);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <QRCode value={JSON.stringify(qrData)} renderAs="svg" size={175} />
      </div>
      <Link to="/">
        <Menu icon={<IoArrowUndoCircleOutline />}></Menu>
      </Link>
    </div>
  );
};

export default DisplayQR;
