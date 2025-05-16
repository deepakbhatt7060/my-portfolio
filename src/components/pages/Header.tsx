import { forwardRef } from "react";

import Container from "@/components/shared/Container/Container";
import { useNavigation } from "@/context/Provider";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Popover,
  List,
  ListItem,
  Box,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import { Work, EmojiEvents, Phone, Home } from "@mui/icons-material";
import styled from "@emotion/styled";
import type { NavigationContextType } from "@/context/Provider";
import useAudio from "@/hooks/useAudio";

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1100;
`;

const StyledContainer = styled(Container)`
  padding: 30px 0 40px 0;
  position: fixed;
  display: flex;
  align-items: center;
  background: transparent;
  z-index: 1200;
  color: aliceblue;
  font-size: 22px;
  border: 0.25px solid transparent;
  border-image: linear-gradient(90deg, transparent, #5fd4c4, transparent) 1;
`;

const TabList = styled.span`
  cursor: pointer;
  padding-top: 7px;
  &:hover {
    transform: translateY(-2px);
  }
`;

const HomeWrapper = styled.span`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
    background-color: grey;
  }
`;

const ActiveSection = styled.div`
  width: 220px;
`;

const AvatarSection = styled.div`
  width: 220px;
  display: flex;
  justify-content: flex-end;
`;

const AvatarIcon = styled.span`
  cursor: pointer;
`;

type HeaderProps = {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
  ref?: React.Ref<HTMLDivElement>;
  intersecting?: boolean;
};

const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, style, title, intersecting }, ref) => {
    const { navigation, toggleNavigation } = useNavigation();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
      null
    );
    const router = useRouter();
    const open = Boolean(anchorEl);
    const { handleAudioPlay } = useAudio({ navigation: true });

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    return (
      <>
        <StyledHeaderWrapper
          ref={ref}
          style={{ display: intersecting ? "none" : "flex" }}
        >
          <StyledContainer maxWidth="xl">
            <ActiveSection>
              {!title ? (
                Object.keys(navigation).filter((item) => {
                  return (
                    navigation[
                      item as keyof NavigationContextType["navigation"]
                    ] === true
                  );
                })
              ) : (
                <HomeWrapper
                  onClick={(e) => {
                    handleAudioPlay(e);
                    router.push("/");
                  }}
                >
                  <Home fontSize="large" style={{ cursor: "pointer" }} />
                </HomeWrapper>
              )}
            </ActiveSection>

            <Container
              maxWidth="lg"
              style={{
                ...style,
                display: "flex",
                justifyContent: title ? "center" : "flex-end",
              }}
              className={className}
            >
              {title
                ? title
                : Object.keys(navigation)
                    .filter((item) => {
                      return (
                        navigation[
                          item as keyof NavigationContextType["navigation"]
                        ] === false
                      );
                    })
                    .map((item) => {
                      return (
                        <TabList
                          key={item}
                          onClick={(e) => {
                            handleAudioPlay(e);
                            toggleNavigation(
                              item as keyof NavigationContextType["navigation"]
                            );
                          }}
                        >
                          {item}
                        </TabList>
                      );
                    })}
            </Container>

            <AvatarSection>
              <AvatarIcon onClick={handleClick}>
                <Avatar alt="Deepak Bhatt" />
              </AvatarIcon>
            </AvatarSection>
          </StyledContainer>
        </StyledHeaderWrapper>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box
            sx={{ width: "200px", maxWidth: 200, bgcolor: "background.paper" }}
          >
            <nav aria-label="options list">
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/achievements")}>
                    <ListItemIcon>
                      <EmojiEvents />
                    </ListItemIcon>
                    <ListItemText primary="Achievements & Certifications" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/experience")}>
                    <ListItemIcon>
                      <Work />
                    </ListItemIcon>
                    <ListItemText primary="Working Experience" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/contact")}>
                    <ListItemIcon>
                      <Phone />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Popover>
      </>
    );
  }
);
Header.displayName = "Header";
export default Header;
