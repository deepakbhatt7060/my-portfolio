import Header from "@/components/pages/Header";
import Common from "@/components/pages/CommonPage/Common";
import { Typography, Card, Box } from "@mui/material";
import { useNavigation } from "@/context/Provider";
import useInvertedIntersection from "@/hooks/useInvertedIntersection";

const Experience = () => {
  const { activeExperience, setActiveExperience } = useNavigation();
  const { triggerRef, intersecting } = useInvertedIntersection({
    rootMargin: "40px 0px 0px 0px",
    threshold: 0,
  });
  const experience = [
    {
      position: "Software Development Engineer - Associate",
      company: "Hitachi Vantara",
      timeline: "February 2024 - Present",
      downloadHref: "./internshipCeritificate.pdf",
      content:
        "Full Stack Developer with a strong focus on frontend technologies, specializing in responsive and interactive interfaces using HTML, CSS, JavaScript, React.js, and Next.js. While frontend is my core interest, I’ve also contributed to backend and DevOps tasks such as implementing logging with Golang’s Zap, creating Dockerized frontend builds, and migrating Django servers to Nginx and Gunicorn. I bring a frontend-first approach to solving full-stack challenges.",
      responsibilities: [
        "Designed and developed responsive UI components using React.js and Next.js.",
        "Ensured cross-browser compatibility and optimized performance using best practices in HTML, CSS, and JavaScript.",
        "Integrated internationalization and accessibility features to enhance user experience across global audiences.",
        "Developed a structured and reusable logging framework using Zap in Golang for efficient log management and debugging.",
        "Created Docker images for frontend applications to enable containerized deployment environments.",
        "Participated in backend server migration from Django’s default server to a more production-ready setup using Nginx and Gunicorn, improving application scalability and performance.",
      ],
      skills:
        "Next.js, React.js, JavaScript, MUI, Hv-UI Kit, HTML, CSS, Nginx, Linux Shell Scripting, Docker,Kubernetes",
    },
    {
      position: "Frontend Developer",
      company: "FreezeBooking",
      timeline: "September 2023 - February 2024",
      downloadHref: "./internshipCeritificate.pdf",
      content:
        "Worked as a Front-End Developer on Freezebooking.com, a bus booking platform, where I led the end-to-end development of key user-facing features. I was also responsible for creating the internal admin portal, enabling streamlined management of fares, coupons, and administrative roles. My contributions focused on delivering responsive, user-friendly interfaces and seamless integration with third-party services like PhonePe.",
      skills: "React.js, JavaScript, MUI, Redux, Redux Saga, HTML, CSS.",
      responsibilities: [
        "Developed the entire payment flow, including seamless PhonePe integration for online transactions.",
        "Built key sections such as Wallet, Blogs, User Profile, and Coupons with a focus on responsive design and performance.",
        "Ensured a consistent and intuitive UI/UX across all modules.",
        "Designed and implemented the admin dashboard used for managing: Coupon codes and discounts, Fare prices from multiple vendors, Admin access control (adding/removing admins).",
        "Created intuitive data forms and tables to simplify backend operations for non-technical users.",
      ],
    },
    {
      position: "Application Engineering - Intern",
      company: "Hitachi Vantara",
      timeline: "January 2023 - August 2024",
      downloadHref: "./internshipCeritificate.pdf",
      content:
        "During an enriching internship, worked as a Full Stack Developer on the development of a leave application portal. The frontend was built using React.js, the backend was implemented with C#, and MongoDB was used as the database. The portal featured role-based authentication and authorization, leveraging Keycloak OAuth for secure access control.",
      skills:
        "C#, MongoDB, KeyCloak, React.js, JavaScript, Bootstrap, HTML, CSS.",
      responsibilities: [
        "Worked as a Full Stack Developer during an internship on a leave application portal.",
        "Developed the frontend using React.js to create an interactive and responsive user interface.",
        "Implemented backend logic using C# to handle business workflows and API endpoints.",
        "Used MongoDB to store and manage application data efficiently.",
        "Integrated Keycloak OAuth for secure role-based authentication and authorization.",
        "Implemented access control based on user roles (e.g., employee, manager, admin) throughout the portal.",
      ],
    },
  ];
  return (
    <>
      <Header title="Working Experience" intersecting={intersecting} />
      <div ref={triggerRef} style={{ height: 1 }} />
      <Common
        titles={experience.map(
          (item) => item.position + ` ( ${item.company} )`
        )}
        active={activeExperience}
        setActive={setActiveExperience}
        minWidth={500}
      >
        {experience
          .filter(
            (item) =>
              item.position + ` ( ${item.company} )` === activeExperience
          )
          .map((item, index) => (
            <Card
              key={`Experience-${index}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: 2,
                gap: 2,
                minHeight: 500,
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "aliceblue", width: "100%", textAlign: "justify" }}
              >
                {item.timeline}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "rgba(255, 51, 51, 1)", width: "100%" }}
              >
                Professional Summary
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "aliceblue", width: "100%", textAlign: "justify" }}
              >
                {item.content}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "rgba(255, 51, 51, 1)", width: "100%" }}
              >
                Roles and Responsibilities
              </Typography>
              <Box
                sx={{
                  color: "aliceblue",
                  width: "100%",
                  textAlign: "justify",
                  paddingLeft: "15px",
                }}
              >
                <ul>
                  {item.responsibilities?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "grey", width: "100%", textAlign: "justify" }}
              >
                <b>Skills : </b>
                {item.skills}
              </Typography>
            </Card>
          ))}
      </Common>
    </>
  );
};
export default Experience;
