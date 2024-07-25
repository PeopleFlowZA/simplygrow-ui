import { FC, ReactNode } from 'react';
interface FlexContainerProps {
    flexDirection?: 'column';
    justify?: 'space-between' | 'flex-end' | 'center';
    align?: 'center' | 'flex-end' | 'space-between';
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    headerText?: string;
    styledContainer?: boolean;
    className?: string;
    children: ReactNode;
}
/**
 * gap | default `xs`
 *  - `xs` = `6px`
 *  - `sm` = `8px`
 *  - `md` = `12px`
 *  - `lg` = `18px`
 *  - `xl` = `24px`
 */
declare const FlexContainer: FC<FlexContainerProps>;
export default FlexContainer;
//# sourceMappingURL=flex-container.d.ts.map