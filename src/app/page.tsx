import Hero from "@/components/module/home/hero";
import Service from "./service/page";
import Resume from "./resume/page";
import Work from "./work/page";

const Home = () => {
  return (
    <section>
      <Hero />
      <Service />
      <Resume />
      <Work />
    </section>
  );
};

export default Home;
