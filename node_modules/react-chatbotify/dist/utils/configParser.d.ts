import { Settings } from "../types/Settings";
import { Styles } from "../types/Styles";
import { Theme } from "../types/Theme";
/**
 * Retrieves default values for chatbot settings.
 */
export declare const getDefaultSettings: () => Settings;
/**
 * Retrieves default values for chatbot styles.
 */
export declare const getDefaultStyles: () => Styles;
/**
 * Parses default settings and styles with user provided config to generate final settings and styles.
 *
 * @param providedSettings settings provided by the user to the bot
 * @param providedStyles styles provided by the user to the bot
 * @param theme theme provided by the user to the bot
 */
export declare const parseConfig: (providedSettings: Settings | undefined, providedStyles: Styles | undefined, themes: undefined | Theme | Array<Theme>) => Promise<{
    settings: Settings;
    styles: Styles;
}>;
