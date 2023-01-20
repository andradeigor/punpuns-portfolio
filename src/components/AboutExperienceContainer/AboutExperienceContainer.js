import Myexperience from "../MyExperience/MyExperience";
import About from "../About/About";
const AboutExperienceContainer = ({ theme }) => {
  return (
    <section className="h-screen w-full">
      <About />
      <Myexperience theme={theme} />
    </section>
  );
};

export default AboutExperienceContainer;
