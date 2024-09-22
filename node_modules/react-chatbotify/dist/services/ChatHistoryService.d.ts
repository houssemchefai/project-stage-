import { Dispatch, SetStateAction } from "react";
import { Message } from "../types/Message";
import { Settings } from "../types/Settings";
import { Styles } from "../types/Styles";
/**
 * Updates the messages array with a new message appended at the end and saves chat history if enabled.
 *
 * @param messages messages containing current conversation with the bot
 */
declare const saveChatHistory: (messages: Message[]) => Promise<void>;
/**
 * Sets the currently used history storage key.
 *
 * @param settings options provided to the bot
 */
declare const setHistoryStorageValues: (settings: Settings) => void;
/**
 * Loads chat history into the chat window for user view.
 *
 * @param settings options provided to the bot
 * @param chatHistory chat history to show
 * @param setMessages setter for updating messages
 * @param setTextAreaDisabled setter for enabling/disabling user text area
 */
declare const loadChatHistory: (settings: Settings, styles: Styles, chatHistory: string, setMessages: Dispatch<SetStateAction<Message[]>>, setTextAreaDisabled: Dispatch<SetStateAction<boolean>>) => void;
export { saveChatHistory, loadChatHistory, setHistoryStorageValues };
