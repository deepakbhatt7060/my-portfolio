import BackDrop from "@/components/shared/Backdrop/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import Container from "@/components/shared/Container/Container";
import { useNavigation } from "@/context/Provider";
import React, { useEffect, useState } from "react";
import { isMobile as deviceDetectIsMobile } from "react-device-detect";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useNavigation();
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(deviceDetectIsMobile);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {!isMobile ? (
        <>
          <BackDrop sx={{ color: "#fff" }} open={loading}>
            <CircularProgress color="inherit" />
          </BackDrop>
          {children}
        </>
      ) : (
        <Container
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6">
            Mobile version coming soon! Please visit us on a desktop for now.
          </Typography>
        </Container>
      )}
    </>
  );
};

export default MainLayout;
