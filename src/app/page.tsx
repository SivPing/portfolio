import Hero from "@/components/module/home/hero";
import Service from "./service/page";
import Resume from "./resume/page";
import Project from "./projects/page";

const Home = () => {
  return (
    <section>
      <Hero />
      <Service />
      <Resume />
      <Project />
    </section>
  );
};

export default Home;
