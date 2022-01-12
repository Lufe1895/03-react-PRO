import './mylabel.css';

export interface MyLabelProps {
    /**
     * The text displayed in the component
     */
    label?:string;
    /**
     * The text's size
     */
    size?:'normal'|'h1'|'h2'|'h3';
    /**
     * Will all the letters be capital?
     */
    allCaps?:boolean;
    /**
     * Font color
     */
    color?:'primary'|'secondary'|'tertiary';
    /**
     * Hex font color
     */
    fontColor?:string;
    /**
     * Color for the background
     */
    backgroundColor?:string;
}

export const MyLabel = ({ 
    allCaps = false,
    color = 'primary',
    label = 'No label', 
    size = 'normal',
    fontColor = '#000000',
    backgroundColor = 'transparent'
 }:MyLabelProps) => {
    return (
        <span 
            className={ `label ${ size } text-${ color }` } 
            style={{ 
                color: fontColor, 
                backgroundColor,
            }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}