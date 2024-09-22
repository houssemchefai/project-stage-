import { Message } from "../types/Message";
import { Settings } from "../types/Settings";
/**
 * Handles logic for whether a bot message should be read out.
 *
 * @param settings options provide to the bot
 * @param voiceToggledOn boolean indicating if voice is toggled on
 * @param message message to read out
 */
export declare const processAudio: (settings: Settings, voiceToggledOn: boolean, message: Message) => void;
