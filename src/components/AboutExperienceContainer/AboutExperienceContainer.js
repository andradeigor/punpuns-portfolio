import Myexperience from "../MyExperience/MyExperience";
import About from "../About/About";
const AboutExperienceContainer = ({ theme }) => {
  return (
    <section className="h-screen w-full">
      <About theme={theme} />
      <Myexperience theme={theme} />
    </section>
  );
};

export default AboutExperienceContainer;
