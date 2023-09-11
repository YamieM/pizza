import { useCallback, useEffect, useState } from "react";
import { AddButton } from "./components/AddButton";
import { SizePicker } from "./components/SizePicker";
import { TypePicker } from "./components/TypePicker";
import { useDispatch } from "react-redux";
// import { addCartItem } from "../../redux/slices/cartSlice";

import { PizzaDTO } from "@/global-types";
import { PizzasDTORequestParams } from "../pizzas/types";
import Image from "next/image";
import { StyledPizzaBlock } from "./styled";

type PizzaContainerProps = {
  pizza: PizzaDTO;
};
export const PizzaContainer = ({ pizza }: PizzaContainerProps) => {
  // const dispatch = useDispatch();

  const [state, setState] = useState<{
    activeSize: 26 | 30 | 40;
    activeType: 0 | 1;
    activePrice: number;
  }>({
    activeSize: pizza.sizes[1],
    activeType: 1,
    activePrice: pizza.prices[1],
  });

  const onClickType = useCallback(
    (index: typeof state.activeType) => {
      setState({ ...state, activeType: index });
    },
    [state]
  );

  const onClickSize = useCallback(
    (index: typeof state.activeSize) => {
      setState({ ...state, activeSize: index });
    },
    [setState, state]
  );
  useEffect(() => {
    if (state.activeSize === 26) {
      setState({
        activeSize: 26,
        activeType: 1,
        activePrice: pizza.prices[0],
      });
    } else if (state.activeSize === 30) {
      setState({ ...state, activePrice: pizza.prices[1] });
    } else if (state.activeSize === 40) {
      setState({ ...state, activePrice: pizza.prices[2] });
    }
  }, [state.activeSize, setState, pizza.prices]);

  const onClickAddBtn = useCallback(() => {
    const namesOfTypes = ["тонкое тесто", "традиционное тесто"];
    const item = {
      id: pizza.id,
      name: pizza.name,
      price: state.activePrice,
      imageUrl: pizza.imageUrl,
      type: namesOfTypes[state.activeType],
      size: state.activeSize,
      count: 1,
    };
    // dispatch(addCartItem(item));
  }, [
    // dispatch,
    pizza.id,
    pizza.imageUrl,
    pizza.name,
    state.activePrice,
    state.activeSize,
    state.activeType,
  ]);

  return (
    <StyledPizzaBlock>
      <Image
        className="pizza-block__image"
        src={pizza.imageUrl}
        alt={pizza.name}
        width={250}
        height={250}
      />
      <h4 className="pizza-block__title">{pizza.name}</h4>
      <div className="pizza-block__selector">
        <TypePicker
          types={pizza.types}
          activeType={state.activeType}
          onClickType={onClickType}
          activeSize={state.activeSize}
        />
        <SizePicker
          sizes={pizza.sizes}
          activeSize={state.activeSize}
          onClickSize={onClickSize}
        />
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{state.activePrice} ₽</div>
        <AddButton onClickAddBtn={onClickAddBtn} product={pizza} />
      </div>
    </StyledPizzaBlock>
  );
};
