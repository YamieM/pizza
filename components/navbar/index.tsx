import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { StyledTopContent } from "./styled";
// import "./style.scss";

export const Navbar = () => {
  return (
    <StyledTopContent>
      <Categories />
      <Sort />
    </StyledTopContent>
  );
};
