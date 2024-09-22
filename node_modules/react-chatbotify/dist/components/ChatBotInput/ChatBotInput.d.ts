import { RefObject, SetStateAction, Dispatch } from "react";
import "./ChatBotInput.css";
/**
 * Contains chat input field for user to enter messages.
 *
 * @param inputRef reference to the textarea
 * @param textAreaDisabled boolean indicating if textarea is disabled
 * @param textAreaSensitveMode boolean indicating is textarea is in sensitve mode
 * @param inputLength current length of input in text area
 * @param setInputLength sets the input length to reflect character count & limit
 * @param handleSubmit handles submission of user input
 * @param hasFlowStarted boolean indicating if flow has started
 * @param setHasFlowStarted sets whether the flow has started
 * @param buttons list of buttons to render in the chat input
 */
declare const ChatBotInput: ({ inputRef, textAreaDisabled, textAreaSensitiveMode, inputLength, setInputLength, handleSubmit, hasFlowStarted, setHasFlowStarted, buttons }: {
    inputRef: RefObject<HTMLTextAreaElement | HTMLInputElement>;
    textAreaDisabled: boolean;
    textAreaSensitiveMode: boolean;
    inputLength: number;
    setInputLength: Dispatch<SetStateAction<number>>;
    handleSubmit: () => void;
    hasFlowStarted: boolean;
    setHasFlowStarted: Dispatch<SetStateAction<boolean>>;
    buttons: JSX.Element[];
}) => import("react/jsx-runtime").JSX.Element;
export default ChatBotInput;
