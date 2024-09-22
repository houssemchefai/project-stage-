import { Dispatch, SetStateAction } from "react";
import { Settings } from "../types/Settings";
/**
 * Creates the useSettings() hook to manage settings for the chatbot.
 */
type SettingsContextType = {
    settings: Settings;
    setSettings: Dispatch<SetStateAction<Settings>>;
};
declare const SettingsContext: import("react").Context<SettingsContextType>;
declare const useSettings: () => SettingsContextType;
export { SettingsContext, useSettings };
