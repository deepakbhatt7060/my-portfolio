import React from "react";
import Backdrop from "@mui/material/Backdrop";

interface BackDropProps {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  sx: React.CSSProperties;
}

const BackDrop: React.FC<BackDropProps> = ({ open, onClose, sx, children }) => {
  return (
    <Backdrop
      sx={(theme) => ({
        ...sx,
        zIndex: theme.zIndex.drawer + 1,
      })}
      open={open}
      onClick={onClose}
    >
      {children}
    </Backdrop>
  );
};

export default BackDrop;
