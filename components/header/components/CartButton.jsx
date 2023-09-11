// import { useSelector } from "react-redux";
import Link from "next/link";
import cartIcon from '../../../public/cart-icon.svg'
import Image from "next/image";

export const CartButton = () => {
  // const { totalPrice, totalCount } = useSelector((state) => state.cartSlice);

  return (
    <div className="header__cart">
      <Link href="/cart" className="button button--cart">
        <span>{200} ₽</span>
        <div className="button__delimiter"></div>
        <Image src={cartIcon} alt="cart" width={20} height={20}/>
        <span>{4}</span>
      </Link>
    </div>
  );
};
