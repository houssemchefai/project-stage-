import { Dispatch, SetStateAction } from "react";
import "./NotificationButton.css";
/**
 * Handles toggling of the audio feature.
 *
 * @param notificationToggledOn boolean indicating whether notification is turned on
 * @param setNotificationToggledOn sets the state of the notification feature
 */
declare const NotificationButton: ({ notificationToggledOn, setNotificationToggledOn }: {
    notificationToggledOn: boolean;
    setNotificationToggledOn: Dispatch<SetStateAction<boolean>>;
}) => import("react/jsx-runtime").JSX.Element;
export default NotificationButton;
