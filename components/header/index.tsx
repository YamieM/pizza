import { SearchInput } from "./components/SearchInput";
import { CartButton } from "./components/CartButton";
import { Logo } from "./components/Logo";
import { StyledHeader, StyledHeaderContainer } from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Logo />
        <div className="header-left">
          <SearchInput />
          <CartButton />
        </div>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
