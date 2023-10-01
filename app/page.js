import About from "@/Containers/About/About";
import Exercises from "@/Containers/Exercises/Exercises";
import Header from "@/Containers/Header/Header";
import SliderArea from "@/Containers/Slider/Slider";
import Story from "@/Containers/Stroy/Story";
import Upcoming from "@/Containers/Upcomming/Upcoming";

export default function Home() {
  return (
    <>
      <Header />
      <Upcoming />
      <About />
      <Story />
      <Exercises />
      <SliderArea />
    </>
  );
}
