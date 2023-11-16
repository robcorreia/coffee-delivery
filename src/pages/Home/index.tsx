import { Intro } from "./components/Intro";
import { OurCoffees } from "./components/OurCoffess";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  );
}
