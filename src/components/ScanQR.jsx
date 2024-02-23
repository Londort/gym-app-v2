import { Link } from 'react-router-dom';
import { QrScanner } from 'react-qrcode-scanner';
import LocalStorage from '../handlers/LocalStorage';
import styles from './ScanQR.module.css';
import Menu from '../UI/Menu';
import { IoArrowUndoCircleOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

const ScanQR = () => {
  const [scannedData, setScannedData] = useState('');
  useEffect(() => {
    if (scannedData) {
      const json = JSON.parse(scannedData);
      LocalStorage.updateWorkouts(json);
      // console.log(json);
      window.location.href = '/';
    }
  }, [scannedData]);

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  function handleError(err) {
    alert(err);
  }

  return (
    <div className={styles.container}>
      {/* ScanQR */}
      <Link to="/">
        <Menu icon={<IoArrowUndoCircleOutline />}></Menu>
      </Link>
      <QrScanner
        className={styles.scan}
        delay={300}
        onError={handleError}
        onScan={handleScan}
        aspectRatio="1:1"
        flipHorizontally="true"
        showViewFinder="false"
      />
      {/* <p>{scannedData}</p> */}
    </div>
  );
};

export default ScanQR;
