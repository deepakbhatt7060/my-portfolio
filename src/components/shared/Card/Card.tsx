import { Card as MuiCard, CardContent, Typography } from "@mui/material";
import { styled, SxProps, Theme } from "@mui/system";
import React from "react";

type CardProps = {
  title?: string;
  content?: React.ReactNode;
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
  className?: string;
  children?: React.ReactNode;
};

const StyledCardContent = styled(CardContent)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  gap: 30,
  padding: "inherit",
}));

const Card = ({
  title,
  content,
  style,
  sx,
  className,
  children,
}: CardProps) => {
  return (
    <MuiCard sx={{ ...style }} className={className}>
      <StyledCardContent
        sx={{ padding: children ? "inherit" : undefined, ...sx }}
      >
        {content && (
          <Typography
            variant="body2"
            sx={{
              height: "80%",
              display: "flex",
              alignItems: "center",
              mt: 1,
            }}
          >
            {content}
          </Typography>
        )}
        {title && (
          <Typography sx={{ fontSize: 16, height: "20%" }}>{title}</Typography>
        )}
        {children}
      </StyledCardContent>
    </MuiCard>
  );
};

export default Card;
