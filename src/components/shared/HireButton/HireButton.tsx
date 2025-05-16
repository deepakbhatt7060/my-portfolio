import { ArrowRight } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigation } from "@/context/Provider";

type HireButtonProps = {
  style?: React.CSSProperties;
  title: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  id: string;
};

const ButtonIconWrapper = styled("span")(() => ({
  width: 30,
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgb(255,93,93,1)",
  borderRadius: 10,
}));

const HireButton = ({
  style,
  title,
  onClick,
  className,
  id,
}: HireButtonProps) => {
  const { isInteractive } = useNavigation();
  return (
    <Box
      sx={{
        ...style,
        position: isInteractive ? "fixed" : "",
        top: isInteractive ? "400px" : "",
        left: isInteractive ? "120px" : "",
      }}
      onClick={(e) => onClick(e)}
      className={className}
      component="div"
    >
      <Typography variant="h6">{title}</Typography>
      <ButtonIconWrapper id={id}>
        <ArrowRight />
      </ButtonIconWrapper>
    </Box>
  );
};

export default HireButton;
