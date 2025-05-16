import BackDrop from "@/components/shared/Backdrop/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import Container from "@/components/shared/Container/Container";
import { useNavigation } from "@/context/Provider";
import React from "react";
import { isMobile } from "react-device-detect";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useNavigation();
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
          <div>
            <Typography variant="h6">
              Mobile version coming soon! Please visit us on a desktop for now.
            </Typography>
          </div>
        </Container>
      )}
    </>
  );
};
export default MainLayout;
