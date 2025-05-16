import { useRef, useState } from "react";
import { Typography, Box } from "@mui/material";

import Container from "@/components/shared/Container/Container";

const skills = [
  { content: "HTML 5" },
  { content: "CSS" },
  { content: "JavaScript" },
  { content: "ReactJs" },
  { content: "Next.js" },
  { content: "TypeScript" },
  { content: "Redux" },
  { content: "Redux Saga" },
  { content: "Context API" },
  { content: "Webpack" },
  { content: "Material-UI" },
  { content: "Linux" },
  { content: "GitHub" },
  { content: "Docker" },
  { content: "Kubernetes" },
  { content: "Data Structures" },
];

const BodyContent2 = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioPlayed, setAudioPlayed] = useState<boolean>(false);

  const handleAudioPlay = () => {
    if (audioRef.current && !audioPlayed) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setAudioPlayed(true);
    }
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "0.25px solid transparent",
        borderImage:
          "linear-gradient(0deg, transparent,rgba(255, 51, 51,1) , transparent) 1",
        px: 2,
        mt: 4,
        gap: 4,
      }}
    >
      <Typography variant="h4" sx={{ color: "aliceblue" }}>
        My Skills
      </Typography>
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          gap: 40,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            onMouseEnter={handleAudioPlay}
            onMouseLeave={() => {
              setAudioPlayed(false);
            }}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              minWidth: 200,
              padding: "7px",
              cursor: "pointer",
              border: "0.25px solid transparent",
              borderTop: "none",
              borderImage:
                "linear-gradient(90deg, transparent,rgba(255, 51, 51,1) , transparent) 1",
              gap: 3,
              alignItems: "center",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            <Typography
              variant="h5"
              style={{
                fontFamily: "aileron",
              }}
            >
              {skill.content}
            </Typography>
          </Box>
        ))}
      </Container>
      <audio preload="auto" ref={audioRef}>
        <source src="/menuSound.mp3" type="audio/mp3" />
      </audio>
    </Container>
  );
};

export default BodyContent2;
