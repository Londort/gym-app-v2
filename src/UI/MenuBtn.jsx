import { IoMdAddCircleOutline } from 'react-icons/io';
import styles from './MenuBtn.module.css';
import { useState } from 'react';

const MenuBtn = (props) => {
  const { addWorkout } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (isOpen) {
      addWorkout();
      setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.btn} ${isOpen ? styles.open : ''}`}>
        <IoMdAddCircleOutline
          onClick={toggleOpen}
          className={styles.btn_icon}
        />
      </div>
    </div>
  );
};

export default MenuBtn;
