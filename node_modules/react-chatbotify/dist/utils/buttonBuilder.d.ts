import { Dispatch, RefObject, SetStateAction } from "react";
import { ButtonConfig } from "../types/internal/ButtonConfig";
import { Settings } from "../types/Settings";
import { Flow } from "../types/Flow";
/**
 * Retrieves the button configurations for header, chat input and footer then builds the buttons.
 * @param settings options provided to the bot to determine buttons shown
 * @param buttonComponentMap a mapping between default buttons and their components
 */
export declare const getButtonConfig: (settings: Settings, buttonComponentMap: {
    [x: string]: () => JSX.Element;
}) => ButtonConfig;
export declare const createAudioButton: (audioToggledOn: boolean, setAudioToggledOn: Dispatch<SetStateAction<boolean>>) => import("react/jsx-runtime").JSX.Element;
export declare const createNotificationButton: (notificationToggledOn: boolean, setNotificationToggledOn: Dispatch<SetStateAction<boolean>>) => import("react/jsx-runtime").JSX.Element;
export declare const createCloseChatButton: () => import("react/jsx-runtime").JSX.Element;
export declare const createVoiceButton: (inputRef: RefObject<HTMLTextAreaElement | HTMLInputElement>, textAreaDisabled: boolean, voiceToggledOn: boolean, handleToggleVoice: () => void, getCurrPath: () => keyof Flow | null, handleActionInput: (path: keyof Flow, userInput: string, sendUserInput?: boolean) => Promise<void>, injectMessage: (content: string | JSX.Element, sender?: string) => Promise<void>, setInputLength: Dispatch<SetStateAction<number>>) => import("react/jsx-runtime").JSX.Element;
export declare const createSendButton: (handleSubmit: () => void) => import("react/jsx-runtime").JSX.Element;
export declare const createFileAttachmentButton: (inputRef: RefObject<HTMLTextAreaElement | HTMLInputElement>, flow: Flow, blockAllowsAttachment: boolean, injectMessage: (content: string | JSX.Element, sender?: string) => Promise<void>, streamMessage: (content: string | JSX.Element, sender?: string) => Promise<void>, openChat: (isOpen: boolean) => void, getCurrPath: () => keyof Flow | null, getPrevPath: () => keyof Flow | null, goToPath: (pathToGo: keyof Flow) => void, handleActionInput: (path: keyof Flow, userInput: string, sendUserInput?: boolean) => Promise<void>) => import("react/jsx-runtime").JSX.Element;
export declare const createEmojiButton: (inputRef: RefObject<HTMLTextAreaElement | HTMLInputElement>, textAreaDisabled: boolean) => import("react/jsx-runtime").JSX.Element;
