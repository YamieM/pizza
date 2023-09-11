import Link from "next/link";
import cartEmptyImage from "../public/empty-cart.png";
import Image from "next/image";
const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <i>😕</i>
      </h2>
      <p>
        Вы ещё ничего не добавили корзину.
        <br />
        Для того, чтобы заказать пиццу, перейдите на главную страницу.
      </p>
      <Image src={cartEmptyImage} alt="Empty cart" />
      <Link href="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
export default EmptyCart;