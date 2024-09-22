import { Dispatch, SetStateAction } from "react";
import "./AudioButton.css";
/**
 * Handles toggling of the audio feature.
 *
 * @param audioToggledOn boolean indicating whether audio is turned on
 * @param setAudioToggledOn sets the state of the audio feature
 */
declare const AudioButton: ({ audioToggledOn, setAudioToggledOn }: {
    audioToggledOn: boolean;
    setAudioToggledOn: Dispatch<SetStateAction<boolean>>;
}) => import("react/jsx-runtime").JSX.Element;
export default AudioButton;
