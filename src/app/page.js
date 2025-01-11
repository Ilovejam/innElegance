import Home_V5 from "./(home)/page";
import Wrapper from "./layout-wrapper/wrapper";
import "@/styles/scss/main.scss";

export const metadata = {
  title: "Home || Villam365",
  description: "Villam365 - Your luxury villa rental partner",
};


export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V5 />
    </Wrapper>
  );
}
