/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * The text displayed in the component
     */
    label?: string;
    /**
     * The text's size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Will all the letters be capital?
     */
    allCaps?: boolean;
    /**
     * Font color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Hex font color
     */
    fontColor?: string;
    /**
     * Color for the background
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
