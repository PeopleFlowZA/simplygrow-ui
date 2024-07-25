import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './paragraph.module.scss';

interface ParagraphProps {
  variant?: 'subtle';
  weight?: 'light' | 'medium' | 'heavy';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  alignText?: 'center';
  children: ReactNode;
}

/**
 * `weight` | `'medium'` | Represent `font-weight`
 *  - `'light'` = `400`
 *  - `'medium'` = `500`
 *  - `'heavy'` = `700`
 *
 * `size` | `'md'` | Represents `font-size`
 *  - `'xs'` = `12px`
 *  - `'sm'` = `14px`
 *  - `'md'` = `16px`
 *  - `'lg'` = `18px`
 *  - `'xl'` = `20px`
 */
const Paragraph: FC<
  ParagraphProps &
    Partial<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>>
> = ({ variant, weight = 'medium', size = 'md', alignText, children, onClick }) => {
  const textAlign = alignText === 'center' ? styles.centerAlign : undefined;
  const variantStyles = variant === 'subtle' ? styles.subtle : styles.defaultStyles;
  const actionStyles = onClick ? styles.action : undefined;
  let weightStyles;
  let sizeStyles;

  switch (weight) {
    case 'light':
      weightStyles = styles.weightLight;
      break;
    case 'medium':
      weightStyles = styles.weightMedium;
      break;
    case 'heavy':
      weightStyles = styles.weightHeavy;
      break;
  }

  switch (size) {
    case 'xs':
      sizeStyles = styles.xsSize;
      break;
    case 'sm':
      sizeStyles = styles.smSize;
      break;
    case 'md':
      sizeStyles = styles.mdSize;
      break;
    case 'lg':
      sizeStyles = styles.lgSize;
      break;
    case 'xl':
      sizeStyles = styles.xlSize;
      break;
  }

  return (
    <p
      className={`${styles.paragraph} ${textAlign} ${variantStyles} ${weightStyles} ${sizeStyles} ${actionStyles}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Paragraph;
