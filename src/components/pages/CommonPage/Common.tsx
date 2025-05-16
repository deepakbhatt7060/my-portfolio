import { Typography } from "@mui/material";

import Container from "@/components/shared/Container/Container";
import useAudio from "@/hooks/useAudio";

export type CommonProps = {
  titles: string[];
  active?: string;
  setActive?: (title: string) => void;
  children?: React.ReactNode;
  minWidth?: number;
};

const Common = ({
  titles,
  active,
  setActive,
  children,
  minWidth,
}: CommonProps) => {
  const { handleAudioPlay } = useAudio({});
  return (
    <Container
      maxWidth="xl"
      style={{
        marginTop: "170px",
        display: "flex",
        gap: 40,
        flexDirection: "row",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      <Container
        style={{
          width: "400px",
          minWidth: minWidth ? minWidth : "",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {titles.map((title, index) => (
          <Typography
            key={index}
            variant="subtitle2"
            sx={{
              color: !active
                ? "aliceblue"
                : active === title
                ? "aliceblue"
                : "grey",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textAlign: "center",
              marginBottom: 2,
              cursor: "pointer",
            }}
            onClick={
              setActive
                ? (e) => {
                    setActive(title);
                    handleAudioPlay(e);
                  }
                : () => {}
            }
          >
            <hr
              style={{
                width: 40,
                borderImage:
                  "linear-gradient(15deg, transparent,rgba(255, 51, 51,1) , transparent) 1",
              }}
            />
            {title}
          </Typography>
        ))}
      </Container>
      <Container style={{ width: 600 }}>{children}</Container>
    </Container>
  );
};
export default Common;
