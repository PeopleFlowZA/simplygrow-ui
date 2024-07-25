import { FC, ReactNode } from 'react';
import Heading from '../../heading';
import styles from './header.module.scss';

interface HeaderProps {
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <Heading order={2}>{children}</Heading>
    </header>
  );
};

export default Header;
