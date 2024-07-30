import { FC, ReactNode } from 'react';
import styles from './grid-container.module.scss';

interface GridContainerProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: ReactNode;
}

/**
 * gap | default `md`
 *  - `xs` = `6px`
 *  - `sm` = `8px`
 *  - `md` = `12px`
 *  - `lg` = `18px`
 *  - `xl` = `24px`
 */
const GridContainer: FC<GridContainerProps> = ({
  children,
  gap = 'md',
  columns = 2,
  className,
}) => {
  let gridContainerColumnStyles;
  let gapStyles;

  switch (columns) {
    case 2:
      gridContainerColumnStyles = styles.gridContainerTwoColumns;
      break;
    case 3:
      gridContainerColumnStyles = styles.gridContainerThreeColumns;
      break;
    case 4:
      gridContainerColumnStyles = styles.gridContainerFourColumns;
      break;
  }

  switch (gap) {
    case 'xs':
      gapStyles = styles.xsGap;
      break;
    case 'sm':
      gapStyles = styles.smGap;
      break;
    case 'md':
      gapStyles = styles.mdGap;
      break;
    case 'lg':
      gapStyles = styles.lgGap;
      break;
    case 'xl':
      gapStyles = styles.xlGap;
      break;
  }

  return (
    <div
      className={`${styles.gridContainer} ${gridContainerColumnStyles} ${gapStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default GridContainer;
