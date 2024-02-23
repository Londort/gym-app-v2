import { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import RoundBtn from './RoundBtn';

const Menu = (props) => {
  const { children, icon } = props;
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleClickOutsideBtn = (e) => {
      const btn = document.querySelector(`.${styles.menu}`);
      if (!btn.contains(e.target)) {
        setMenuActive(false);
      }
    };

    if (menuActive) {
      document.addEventListener('click', handleClickOutsideBtn);
    } else {
      document.removeEventListener('click', handleClickOutsideBtn);
    }

    return () => {
      document.removeEventListener('click', handleClickOutsideBtn);
    };
  }, [menuActive]);

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <>
      <div
        className={`${styles.menu} ${menuActive ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <div className={styles.menu_icon}>
          <RoundBtn className={styles.icon} icon={icon} />
        </div>
        <div className={styles.submenu}>{children}</div>
      </div>
      <div className={styles.menu_wrapper}></div>
    </>
  );
};

export default Menu;
