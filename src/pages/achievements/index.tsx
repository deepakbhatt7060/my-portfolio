import Image from "next/image";
import { Typography } from "@mui/material";

import Card from "@/components/shared/Card/Card";
import Header from "@/components/pages/Header";
import { useNavigation } from "@/context/Provider";
import useInvertedIntersection from "@/hooks/useInvertedIntersection";
import Common from "@/components/pages/CommonPage/Common";
import DownloadButton from "@/components/shared/Download/DownloadButton";

const Achievements = () => {
  const { activeAchievements, setActiveAchievements } = useNavigation();
  const { triggerRef, intersecting } = useInvertedIntersection({
    rootMargin: "70px 0px 0px 0px",
    threshold: 0,
  });
  const achievements = [
    {
      image: "/spotaward.png",
      skills: "SPOT Award",
      downloadName: "Deepak's SPOT-award.png",
      downloadHref: "./spotaward.png",
      content:
        "Received the SPOT Award in August 2024 for outstanding contributions in developing proof-of-concept (POC) solutions that successfully established connections between a single container and multiple storage arrays, as well as for efficiently executing CCI commands.",
    },
  ];
  const certifications = [
    {
      image: null,
      skills: "Docker, Security, Agile, Software Engineering",
      downloadName: "certificates.pdf",
      downloadHref: "./completion certificates.pdf",
      content:
        "Successfully earned certificates of completion in Docker, Security, Agile Methodology, and Software Engineering, demonstrating a commitment to enhancing technical expertise and professional skills.",
    },
  ];

  const titles = ["ACHIEVEMENTS", "CERTIFICATIONS"];
  return (
    <>
      <Header
        intersecting={intersecting}
        title="Achievements & Certifications"
      />
      <div ref={triggerRef} style={{ height: 1 }} />
      <Common
        titles={titles}
        active={activeAchievements}
        setActive={setActiveAchievements}
      >
        {activeAchievements === "ACHIEVEMENTS" &&
          achievements.map((achievement, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 2,
                gap: 2,
                marginBottom: 2,
              }}
            >
              <Image
                src={achievement.image}
                alt="Logo"
                width={500}
                height={130}
                style={{
                  height: "100%",
                  width: "auto",
                  cursor: "pointer",
                  transition: "transform 0.6s ease-in-out",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ color: "rgba(255, 51, 51, 1)", width: "100%" }}
              >
                {achievement.skills}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "aliceblue", width: "100%" }}
              >
                {achievement.content}
              </Typography>
              <DownloadButton
                downloadName={achievement.downloadName}
                downloadHref={achievement.downloadHref}
              />
            </Card>
          ))}
        {activeAchievements === "CERTIFICATIONS" &&
          certifications.map((certification, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 2,
                gap: 2,
                marginBottom: 2,
              }}
            >
              {certification.image && (
                <Image
                  src={certification.image}
                  alt="Logo"
                  width={350}
                  height={130}
                  style={{
                    height: "100%",
                    width: "auto",
                    cursor: "pointer",
                    transition: "transform 0.6s ease-in-out",
                  }}
                />
              )}
              <Typography
                variant="subtitle1"
                sx={{ color: "rgba(255, 51, 51, 1)", width: "100%" }}
              >
                {certification.skills}
              </Typography>
              <Typography variant="body1" sx={{ color: "aliceblue" }}>
                {certification.content}
              </Typography>
              <DownloadButton
                downloadName={certification.downloadName}
                downloadHref={certification.downloadHref}
              />
            </Card>
          ))}
      </Common>
    </>
  );
};

export default Achievements;
