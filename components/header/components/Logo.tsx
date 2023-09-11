import Link from "next/link";
import logoPizza from "../../../public/logo-pizza.svg";
import Image from "next/image";
import { StyledHeaderLogo } from "../styled";

export const Logo = () => {
  return (
    <Link href="/">
      <StyledHeaderLogo>
        <Image src={logoPizza} alt="pizza-logo" width={35} height={35} />
        <div className="logo__text">
          <h1>300bucks</h1>
          <p>pizza</p>
        </div>
      </StyledHeaderLogo>
    </Link>
  );
};
