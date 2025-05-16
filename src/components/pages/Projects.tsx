import Image from "next/image";
import Card from "@/components/shared/Card/Card";
import { Typography, Box } from "@mui/material";
import Common from "./CommonPage/Common";
import { useNavigation } from "@/context/Provider";
import { capitalize } from "@/utils/utils";
import Link from "next/link";
import useAudio from "@/hooks/useAudio";

const Projects = () => {
  const { activeProject, setActiveProject } = useNavigation();
  const { handleAudioPlay } = useAudio({});
  const projects = [
    {
      image: "/astutrise.png",
      key: "ASTUTRISE",
      link: "http://astutrise.in",
      skills:
        "Next.js, React.js, HTML5,CSS3, JavaScript, AWS EC2 Instance, Nginx",
      content:
        "Astutrise.in is a startup company focuses on automating everything i.e every idea into digital transformation. Offering wide range of services like Website Designing, Website Development, Website Migration, SEO etc.",
    },
    {
      image: "/freezebooking.png",
      key: "FREEZEBOOKING",
      link: "https://www.freezebooking.in/",
      skills: "React.js, HTML5, CSS3, JavaScript, MUI, Redux, Redux Saga",
      content:
        "Freeze Booking is a bus booking platform poised to redefine the travel experience. Boasting one of the most extensive networks of bus providers, envisioning a future where transportation is seamless and travel is a joyous adventure.",
    },
    {
      image: null,
      key: "FREEZEBOOKING ADMIN PORTAL",
      link: null,
      skills: "React.js, HTML5, CSS3, JavaScript, MUI, Redux, Redux Saga",
      content:
        "The Freezebooking Admin Portal was designed as a specialized tool for administrators to efficiently manage the platform’s offerings and operations. It enables admins to upload new promotional offers along with images, adjust fare prices for specific routes within defined time periods, and monitor ticket booking statistics. Additionally, the portal facilitates the management of bus listings based on operators’ commission percentages, ensuring streamlined control over pricing and inventory to optimize business performance.",
    },
    {
      image: null,
      key: "HDRS Nxt",
      link: null,
      skills: "Next.js, TypeScript, HTML5, CSS3, JavaScript, Hv UIkit",
      content:
        "HDRS Next is a web application designed to reduce the manual effort of managing the Hitachi Disaster Recovery Services (HDRS) platform. It provides a user-friendly interface for managing and monitoring the HDRS environment, including features for creating and managing disaster recovery plans, monitoring system health, and generating reports. The application is built using Next.js and TypeScript, ensuring a modern and efficient development experience.",
    },
  ];
  const titles = [
    "ASTUTRISE",
    "FREEZEBOOKING",
    "FREEZEBOOKING ADMIN PORTAL",
    "HDRS Nxt",
  ];

  return (
    <Common titles={titles} active={activeProject} setActive={setActiveProject}>
      {projects
        .filter((item) => item.key === activeProject)
        .map((item, index) => (
          <Card
            key={`Project-${index}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              padding: 2,
              gap: 2,
              marginBottom: 2,
              minHeight: 500,
            }}
          >
            {item.image ? (
              <Image
                src={item.image}
                alt="Logo"
                width={500}
                height={130}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: 130,

                  color: "white",
                }}
              >
                No Image Available
              </Box>
            )}

            <Typography
              variant="subtitle1"
              sx={{ color: "rgba(255, 51, 51, 1)", width: "100%" }}
            >
              {capitalize(item.key)}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "aliceblue", width: "100%", textAlign: "justify" }}
            >
              {item.content}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "grey", width: "100%", textAlign: "justify" }}
            >
              <b>Skills : </b>
              {item.skills}
            </Typography>
            {item.link && (
              <Typography
                variant="body1"
                sx={{ color: "lightblue", width: "100%", textAlign: "justify" }}
                onClick={(e) => {
                  handleAudioPlay(e);
                }}
              >
                <Link href={item.link} target="_blank">
                  Visit Website
                </Link>
              </Typography>
            )}
          </Card>
        ))}
    </Common>
  );
};

export default Projects;
