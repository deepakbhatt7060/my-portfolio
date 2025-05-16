import Header from "@/components/pages/Header";
import Common from "@/components/pages/CommonPage/Common";

const Contact = () => {
  const titles = [
    "Phone : 9335306764",
    "Address : Delhi,India",
    "Personal Email : deepakbhatt7060@gmail.com",
    "Official Email : deepak.bhatt@hitachivantara.com",
    "LinkedIn :https://www.linkedin.com/in/deepak-bhatt-463a05156/",
    "Workplace Address : Hitachi Vantara, Pune, India",
  ];
  return (
    <>
      <Header title="Contact" />
      <Common titles={titles} minWidth={600} />
    </>
  );
};
export default Contact;
