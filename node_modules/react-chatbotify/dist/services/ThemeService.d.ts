import { Settings } from "../types/Settings";
import { Styles } from "../types/Styles";
import { Theme } from "../types/Theme";
/**
 * Processes information for a given theme and retrieves its settings via CDN.
 *
 * @param theme theme to process and retrieve settings for
 */
export declare const processAndFetchThemeConfig: (theme: Theme) => Promise<{
    settings: Settings;
    styles: Styles;
}>;
