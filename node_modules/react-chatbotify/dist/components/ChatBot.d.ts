import { Settings } from "../types/Settings";
import { Styles } from "../types/Styles";
import { Flow } from "../types/Flow";
import { Theme } from "../types/Theme";
/**
 * Initializes providers for chatbot.
 *
 * @param flow conversation flow for the bot
 * @param settings settings to setup the bot
 * @param styles styles to setup the bot
 * @param themes themes to apply to the bot
 */
declare const ChatBot: ({ flow, settings, styles, themes, }: {
    flow?: Flow | undefined;
    settings?: Settings | undefined;
    styles?: Styles | undefined;
    themes?: undefined | Theme | Array<Theme>;
}) => import("react/jsx-runtime").JSX.Element;
export default ChatBot;
