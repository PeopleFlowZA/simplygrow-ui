import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
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
declare const Paragraph: FC<ParagraphProps & Partial<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>>>;
export default Paragraph;
//# sourceMappingURL=paragraph.d.ts.map