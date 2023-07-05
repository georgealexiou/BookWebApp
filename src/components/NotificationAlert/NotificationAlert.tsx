import { Alert, AlertTitle } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

export const NotificationAlert = () => {
  const { title, subtitle, severity } = useSelector(
    (state: RootState) => state.notification
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!title) return;
    setTimeout(() => {
      dispatch({ type: "NOTIFY_RESET" });
    }, 1500);
  });

  return (
    <>
      {title && (
        <Alert
          severity={severity}
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            margin: "10px",
            zIndex: 9999,
          }}
        >
          <AlertTitle>Loading</AlertTitle>
          {subtitle}
        </Alert>
      )}
    </>
  );
};
