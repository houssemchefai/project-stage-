import { RefObject, Dispatch, SetStateAction } from "react";
import { Flow } from "../../../types/Flow";
import "./VoiceButton.css";
/**
 * Toggles voice to text input to the chat bot.
 *
 * @param inputRef reference to the textarea
 * @param textAreaDisabled boolean indicating if textarea is disabled
 * @param voiceToggledOn boolean indicating if voice is toggled on
 * @param handleToggleVoice handles toggling of voice
 * @param getCurrPath retrieves current path for the user
 * @param handleActionInput handles action input from user
 * @param injectMessage utility function for injecting a message into the messages array
 * @param setInputLength sets the input length to reflect character count & limit
 */
declare const VoiceButton: ({ inputRef, textAreaDisabled, voiceToggledOn, handleToggleVoice, getCurrPath, handleActionInput, injectMessage, setInputLength, }: {
    inputRef: RefObject<HTMLTextAreaElement | HTMLInputElement>;
    textAreaDisabled: boolean;
    voiceToggledOn: boolean;
    handleToggleVoice: () => void;
    getCurrPath: () => keyof Flow | null;
    handleActionInput: (path: keyof Flow, userInput: string, sendUserInput?: boolean) => Promise<void>;
    injectMessage: (content: string | JSX.Element, sender?: string) => Promise<void>;
    setInputLength: Dispatch<SetStateAction<number>>;
}) => import("react/jsx-runtime").JSX.Element;
export default VoiceButton;
