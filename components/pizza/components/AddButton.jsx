import Image from "next/image";
import plusIcon from "../../../public/cart-plus-icon.svg";
import { useSelector } from "react-redux";

export const AddButton = ({ product, onClickAddBtn }) => {
  // const { cartItems } = useSelector((state) => state.cartSlice);
  // const filtered = cartItems?.filter((item) => item.id === product.id);
  // const pizzaCount = filtered?.reduce((count, item) => {
  //   return count + item.count;
  // }, 0);
  return (
    <div onClick={onClickAddBtn} className="button button--outline button--add">
      <Image src={plusIcon} alt="" />
      <span>Добавить</span>
      {/* {pizzaCount > 0 && <i>{pizzaCount}</i>} */}
    </div>
  );
};
