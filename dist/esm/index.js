import { jsx, jsxs } from 'react/jsx-runtime';

var styles$2 = {"containerStyles":"test_containerStyles_gn9rg","childrenStyles":"test_childrenStyles_gn9rg","flexContainer":"test_flexContainer_gn9rg","flexDirectionColumn":"test_flexDirectionColumn_gn9rg","justifySpaceBetween":"test_justifySpaceBetween_gn9rg","justifyFlexEnd":"test_justifyFlexEnd_gn9rg","justifyCenter":"test_justifyCenter_gn9rg","alignSpaceBetween":"test_alignSpaceBetween_gn9rg","alignFlexEnd":"test_alignFlexEnd_gn9rg","alignCenter":"test_alignCenter_gn9rg","xsGap":"test_xsGap_gn9rg","smGap":"test_smGap_gn9rg","mdGap":"test_mdGap_gn9rg","lgGap":"test_lgGap_gn9rg","xlGap":"test_xlGap_gn9rg"};

var styles$1 = {"headingOne":"test_headingOne_mqfnw","headingTwo":"test_headingTwo_mqfnw","headingThree":"test_headingThree_mqfnw","textAlign":"test_textAlign_mqfnw"};

const Heading = ({ order = 1, textAlign, children }) => {
    const textAlignStyles = textAlign === 'center' ? styles$1.textAlign : undefined;
    let headingElement = (jsx("h1", { className: `${styles$1.headingOne} ${textAlignStyles}`, children: children }));
    switch (order) {
        case 2:
            headingElement = jsx("h2", { className: `${styles$1.headingTwo} ${textAlignStyles}`, children: children });
            break;
        case 3:
            headingElement = jsx("h3", { className: `${styles$1.headingThree} ${textAlignStyles}`, children: children });
            break;
    }
    return headingElement;
};

var styles = {"header":"test_header_18bmb"};

const Header = ({ children }) => {
    return (jsx("header", { className: styles.header, children: jsx(Heading, { order: 2, children: children }) }));
};

/**
 * gap | default `xs`
 *  - `xs` = `6px`
 *  - `sm` = `8px`
 *  - `md` = `12px`
 *  - `lg` = `18px`
 *  - `xl` = `24px`
 */
const FlexContainer = ({ children, align, className, flexDirection, gap, headerText, justify, styledContainer, }) => {
    const styledContainerStyles = styledContainer ? styles$2.containerStyles : undefined;
    const flexDirectionStyles = flexDirection === 'column' ? styles$2.flexDirectionColumn : undefined;
    let justifyStyles;
    let alignStyles;
    let gapStyles;
    switch (gap) {
        case 'xs':
            gapStyles = styles$2.xsGap;
            break;
        case 'sm':
            gapStyles = styles$2.smGap;
            break;
        case 'md':
            gapStyles = styles$2.mdGap;
            break;
        case 'lg':
            gapStyles = styles$2.lgGap;
            break;
        case 'xl':
            gapStyles = styles$2.xlGap;
            break;
    }
    switch (justify) {
        case 'space-between':
            justifyStyles = styles$2.justifySpaceBetween;
            break;
        case 'flex-end':
            justifyStyles = styles$2.justifyFlexEnd;
            break;
        case 'center':
            justifyStyles = styles$2.justifyCenter;
            break;
    }
    switch (align) {
        case 'space-between':
            alignStyles = styles$2.alignSpaceBetween;
            break;
        case 'flex-end':
            alignStyles = styles$2.alignFlexEnd;
            break;
        case 'center':
            alignStyles = styles$2.alignCenter;
            break;
    }
    return (jsxs("div", { className: `${styles$2.flexContainer} ${flexDirectionStyles} ${justifyStyles} ${alignStyles} ${gapStyles} ${styledContainerStyles} ${className}`, children: [!!headerText && jsx(Header, { children: headerText }), styledContainer && jsx("div", { className: styles$2.childrenStyles, children: children }), !styledContainer && children] }));
};

export { FlexContainer };
//# sourceMappingURL=index.js.map
