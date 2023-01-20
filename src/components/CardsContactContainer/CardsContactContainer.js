import Cards from "../Cards/Cards";
import Contact from "../Contact/Contact";

const AboutExperienceContainer = ({ theme }) => {
  return (
    <section className="h-screen w-full">
      <Cards theme={theme} />
      <Contact />
    </section>
  );
};

export default AboutExperienceContainer;
