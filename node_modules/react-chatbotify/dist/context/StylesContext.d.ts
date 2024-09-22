import { Dispatch, SetStateAction } from "react";
import { Styles } from "../types/Styles";
/**
 * Creates the useStyles() hook to manage styles for the chatbot.
 */
type StylesContextType = {
    styles: Styles;
    setStyles: Dispatch<SetStateAction<Styles>>;
};
declare const StylesContext: import("react").Context<StylesContextType>;
declare const useStyles: () => StylesContextType;
export { StylesContext, useStyles };
