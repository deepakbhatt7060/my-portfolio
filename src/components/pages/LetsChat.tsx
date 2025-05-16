import React, { useRef } from "react";
import { WhatsApp } from "@mui/icons-material";
import { Typography, Box, styled } from "@mui/material";

type LetsChatProps = {
  onClick: () => void;
};

const ChatButton = styled(Box)(() => ({
  borderRadius: "50%",
  backgroundColor: "white",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  border: "1px solid green",
  padding: 20,
  width: 60,
  height: 60,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

const WhatsAppIconStyled = styled(WhatsApp)(() => ({
  color: "green",
  fontSize: 30,
  transition: "transform 0.2s linear",
}));

const FloatingChatWrapper = styled(Box)(() => ({
  position: "fixed",
  bottom: 50,
  right: 20,
  gap: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 1000,
}));

const LetsChat = ({ onClick }: LetsChatProps) => {
  const watsappRef = useRef<SVGSVGElement | null>(null);

  const handleScale = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (watsappRef.current) {
      if (e.type === "mouseenter") {
        watsappRef.current.style.transform = "scale(1.2)";
      } else {
        watsappRef.current.style.transform = "scale(1)";
      }
      watsappRef.current.style.transition = "transform 0.2s linear";
    }
  };
  return (
    <FloatingChatWrapper
      onClick={onClick}
      onMouseEnter={handleScale}
      onMouseLeave={handleScale}
    >
      <ChatButton>
        <WhatsAppIconStyled ref={watsappRef} />
      </ChatButton>
      <Typography
        variant="body1"
        sx={{
          color: "aliceblue",
          fontFamily: "gidole",
          fontWeight: 600,
        }}
      >
        Let&#39;s Chat
      </Typography>
    </FloatingChatWrapper>
  );
};

export default LetsChat;
