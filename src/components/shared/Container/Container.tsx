import { Container as DBContainer } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

type DBContainerProps = {
  maxWidth?: "lg" | "md" | "sm" | "xl" | "xs";
  style?: React.CSSProperties;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  className?: string;
};
const Container = ({
  maxWidth = "lg",
  style,
  className,
  children,
  sx,
}: DBContainerProps) => {
  return (
    <DBContainer
      sx={{ ...sx }}
      maxWidth={maxWidth}
      className={className}
      style={{ ...style }}
    >
      {children}
    </DBContainer>
  );
};
export default Container;
