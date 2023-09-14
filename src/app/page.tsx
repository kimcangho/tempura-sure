import CurrentTempSection from "@/components/CurrentTempSection";
import Header from "@/components/Header";
import HistoricalTempSection from "@/components/HistoricalTempSection";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col desktop:flex-row px-2 desktop:max-w-[80rem] mx-auto">
        <CurrentTempSection />
        <HistoricalTempSection />
      </div>
    </>
  );
};

export default Home;
