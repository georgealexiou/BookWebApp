import { AnyAction } from "redux";
import { notificationReducer, NotificationState } from "../notificationReducer";

describe("notificationReducer", () => {
  const initialState: NotificationState = {
    title: "Initial Title",
    subtitle: "Initial Subtitle",
    severity: "info",
  };

  it("should handle NOTIFY_INFO action", () => {
    const action: AnyAction = {
      type: "NOTIFY_INFO",
      payload: {
        title: "Info",
        subtitle: "This is an info notification",
      },
    };

    const newState = notificationReducer(initialState, action);

    expect(newState).toEqual({
      title: "Info",
      subtitle: "This is an info notification",
      severity: "info",
    });
  });

  it("should handle NOTIFY_ERROR action", () => {
    const action: AnyAction = {
      type: "NOTIFY_ERROR",
      payload: {
        title: "Error",
        subtitle: "This is an error notification",
      },
    };

    const newState = notificationReducer(initialState, action);

    expect(newState).toEqual({
      title: "Error",
      subtitle: "This is an error notification",
      severity: "error",
    });
  });

  it("should handle NOTIFY_RESET action", () => {
    const action: AnyAction = {
      type: "NOTIFY_RESET",
    };

    const newState = notificationReducer(initialState, action);

    expect(newState).toEqual({});
  });

  it("should return the initial state for an unknown action", () => {
    const action: AnyAction = {
      type: "UNKNOWN_ACTION",
    };

    const newState = notificationReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
