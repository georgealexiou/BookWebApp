import { AlertColor } from "@mui/material";
import { AnyAction, Reducer } from "redux";

export type NotificationState = {
  title?: string;
  subtitle?: string;
  severity?: AlertColor;
};

export const notificationReducer: Reducer<NotificationState, AnyAction> = (
  state = {},
  action
) => {
  switch (action.type) {
    case "NOTIFY_INFO":
      return {
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        severity: "info",
      };
    case "NOTIFY_ERROR":
      return {
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        severity: "error",
      };
    case "NOTIFY_RESET":
      return {};
    default:
      return state;
  }
};
