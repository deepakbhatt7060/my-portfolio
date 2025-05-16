import { Typography } from "@mui/material";
import { Download } from "@mui/icons-material";
import { styled } from "@mui/system";
import Container from "@/components/shared/Container/Container";
import HireButton from "@/components/shared/HireButton/HireButton";
import useAudio from "@/hooks/useAudio";

const BodyContentContainer = styled(Container)({
  height: 500,
  marginTop: 100,
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  backgroundImage: "url('/Image2.png')",
  backgroundSize: "500px 450px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  alignItems: "center",
  color: "aliceblue",
  border: "0.25px solid transparent",
  borderTop: "none",
  borderImage: "linear-gradient(90deg, transparent, #5FD4C4, transparent) 1",
});

const Round = styled("div")({
  borderRadius: "50%",
  border: "1px solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
});

const HeadContainer = styled("div")({
  letterSpacing: "1px",
  color: "aliceblue",
  padding: "20px 20px 20px 0px",
  display: "flex",
  flexDirection: "column",
});

const Name = styled("span")({
  color: "#FF3333",
});

const HireButtonStyled = styled(HireButton)({
  width: 200,
  height: 50,
  padding: "10px 10px 10px 25px",
  gap: 10,
  fontFamily: "gidole",
  backgroundColor: "rgba(255, 51, 51,1)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 18,
  borderRadius: 10,
  color: "white",
  cursor: "pointer",
  marginTop: 50,
  "&:hover": {
    boxShadow: "0px 0px 2px 2px rgba(255, 131, 131,1)",
  },
});

const BodyContent = () => {
  const { handleAudioPlay } = useAudio({});
  const handleClick = () => {
    const email = "deepakbhatt7060@gmail.com";
    const subject = "Inquiry About Hiring Deepak Bhatt";
    const body =
      "Hi Deepak Bhatt,\n\nI came across your portfolio and would like to discuss a potential opportunity. Looking forward to connecting with you.\n\nBest regards,\n";

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Deepak Bhatt(Resume).pdf";
    link.download = "Deepak's Resume.pdf";
    link.click();
  };

  return (
    <BodyContentContainer maxWidth="xl">
      <HeadContainer>
        <Typography variant="h2" style={{ fontFamily: "neuton" }}>
          Hi,
        </Typography>
        <Typography variant="h2" style={{ fontFamily: "neuton" }}>
          I&#39;m <Name>Deepak</Name>
        </Typography>
        <Typography
          variant="h5"
          style={{ marginTop: 10, fontFamily: "gidole", letterSpacing: "2px" }}
        >
          Software Development Engineer
        </Typography>
        <HireButtonStyled
          title="Hire Me"
          onClick={(e) => {
            handleClick();
            handleAudioPlay(e);
          }}
          id="hireButtonArrow"
        />
      </HeadContainer>
      <Round
        style={{
          backgroundColor: "#5FD4C4",
          border: "none",
          width: 40,
          height: 40,
          top: 100,
          left: 400,
        }}
      />
      <Round
        style={{
          borderColor: "#FF3333",
          width: 80,
          height: 80,
          top: 180,
          left: 420,
        }}
      />
      <Round
        style={{
          borderColor: "#5FD4C4",
          width: 80,
          height: 80,
          top: 140,
          left: 460,
        }}
      />
      <HeadContainer>
        <Typography
          variant="body1"
          style={{ fontFamily: "gidole", color: "#FF3333" }}
        >
          Expert on Frontend
        </Typography>
        <Typography
          variant="h5"
          style={{
            fontFamily: "aileron",
            letterSpacing: "2px",
          }}
        >
          Based in Delhi, India.
          <br />
          I&#39;m an innovative developer.
        </Typography>
        <Typography
          variant="h6"
          style={{ marginTop: 20, fontFamily: "aileron", color: "grey" }}
        >
          Feel free to reach out for groundbreaking projects
          <br /> and cutting-edge design solutions. Let&#39;s bring <br /> your
          ideas to life with creativity and innovation!
        </Typography>
        <Typography
          variant="h6"
          style={{
            marginTop: 100,
            fontFamily: "aileron",
            textDecoration: "underline",
            textUnderlineOffset: 10,
            textDecorationColor: "#FF3333",
            color: "#FF3333",
            cursor: "pointer",
          }}
          onClick={(e) => {
            handleDownload();
            handleAudioPlay(e);
          }}
        >
          Download CV <Download />
        </Typography>
      </HeadContainer>
    </BodyContentContainer>
  );
};

export default BodyContent;
