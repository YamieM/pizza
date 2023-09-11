import Link from "next/link";
import cartEmptyImage from "../public/empty-cart.png";
import Image from "next/image";
import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 NotFound</title>
      </Head>
      <div className="cart cart--empty">
        <h2>Страница не найдена 🤕</h2>
        <p>Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
        <Image src={cartEmptyImage} alt="Empty cart" />
        <Link href="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};
export default NotFound;
