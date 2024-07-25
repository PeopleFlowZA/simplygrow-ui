import { FC, ReactNode } from 'react';
interface HeadingProps {
    /**
     * `order` represents which of the following HTML tags to be used:
     *  - 1 = `<h1>`
     *  - 2 = `<h2>`
     *  - etc.
     */
    order?: 1 | 2 | 3;
    textAlign?: 'center';
    children: ReactNode;
}
declare const Heading: FC<HeadingProps>;
export default Heading;
//# sourceMappingURL=heading.d.ts.map