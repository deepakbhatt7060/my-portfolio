import { useEffect, useRef } from "react";
import Header from "@/components/pages/Header";
import Container from "@/components/shared/Container/Container";
import BodyContent from "@/components/pages/Body";
import BodyContent2 from "@/components/pages/Body2";
import LetsChat from "@/components/pages/LetsChat";
import { useNavigation } from "@/context/Provider";
import { styled } from "@mui/system";
import Projects from "@/components/pages/Projects";
import Box from "@mui/material/Box";
import BackDrop from "@/components/shared/Backdrop/Backdrop";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import useInvertedIntersection from "@/hooks/useInvertedIntersection";
import Head from "next/head";

const DobContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  color: "white",
  marginTop: 2,
});

const ScrollingBody = styled("div")({
  width: "200%",
  overflow: "hidden",
  display: "flex",
  transition: "transform 1s ease",
});

const ScrollingSection = styled("div")({
  width: "100%",
});

const Index = () => {
  const { scroll, isInteractive, setIsInteractive } = useNavigation();
  const scrollingBodyRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { triggerRef, intersecting } = useInvertedIntersection({
    rootMargin: "70px 0px 0px 0px",
    threshold: 0,
  });

  const handleChatClick = () => {
    const phoneNumber = "9335306764";
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  const handleOk = () => {
    setIsInteractive(false);
    localStorage.setItem("isInteractive", "false");
  };

  useEffect(() => {
    if (scrollingBodyRef.current) {
      scrollingBodyRef.current.style.transform = `translateX(${scroll}%)`;
    }
  }, [scroll]);

  return (
    <>
      <Head>
        <title>Deepak Bhatt | Front-End Developer</title>
        <meta
          name="description"
          content="Frontend Developer Portfolio using Next.js Page Router"
        />
      </Head>
      <div
        style={{
          position: "relative",
          height: "100vh",
          overflow: isInteractive ? "hidden" : "",
        }}
      >
        <Header intersecting={intersecting} ref={headerRef} />
        <div ref={triggerRef} style={{ height: 1 }} />
        <ScrollingBody ref={scrollingBodyRef}>
          <ScrollingSection>
            <BodyContent />
            <DobContainer>Since 1997</DobContainer>
            <BodyContent2 />
          </ScrollingSection>
          <ScrollingSection>
            <Projects />
          </ScrollingSection>
        </ScrollingBody>
        <LetsChat onClick={handleChatClick} />
      </div>
      <BackDrop
        open={isInteractive || false}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          WebkitMaskImage:
            "radial-gradient(circle at 220px 480px, transparent 110px, black 100px)",
          maskImage:
            "radial-gradient(circle at 220px 480px, transparent 110px, black 100px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          maxWidth={650}
          maxHeight={200}
          minWidth={300}
          sx={{
            display: "flex",
            position: "fixed",
            top: "300px",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            zIndex: 1000,
          }}
        >
          <Typography variant="h6">
            Looking to hire? Simply click the Hire Me button to get in touch
            instantly!
          </Typography>
          <Button variant="outlined" onClick={() => handleOk()}>
            Ok
          </Button>
        </Box>
      </BackDrop>
    </>
  );
};

export default Index;
