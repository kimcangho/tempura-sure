import Header from "@/components/Header";
import CurrentTempSection from "@/components/CurrentTempSection";
import HistoricalTempSection from "@/components/HistoricalTempSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="flex flex-col desktop:flex-row px-2 desktop:max-w-[80rem] mx-auto">
        <CurrentTempSection />
        <HistoricalTempSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
