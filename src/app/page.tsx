import CurrentTempSection from "@/components/CurrentTempSection";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col px-2 desktop:max-w-[80rem] mx-auto">
        <CurrentTempSection />
      </div>
    </>
  );
};

export default Home;
