import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sortArrowIcon from "@/public/sort-arrow-icon.svg";
import { actions } from "@/util/@reduxjs/filterSlice";
import { selectFilters, selectSortBy } from "@/components/pizzas/selectors";
import { StyledPopup, StyledSort } from "../styled";
import Image from "next/image";
import { pickSortParam } from "@/util/helpers/pick-sort";

export const Sort = () => {
  const { sortBy, order } = useSelector(selectFilters);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const onHandleClickSort = () => {
    setIsActive(!isActive);
  };

  const sortProperties = ["rating", "prices", "prices", "name"];

  const onHandleClickPopup = (index: number) => {
    dispatch(
      actions.setActiveSort([
        sortProperties[index],
        index === 2 ? "desc" : "asc",
      ])
    );
  };

  const sortList = [
    " по популярности ",
    "сначала дешевые",
    "сначала дорогие",
    "по алфавиту",
  ];

  return (
    <StyledSort>
      <Image src={sortArrowIcon} alt="" />
      <div className="sort__label">
        <b>Сортировка:</b>
        <span onClick={onHandleClickSort}>
          {sortBy && order && pickSortParam(sortBy, order)}
        </span>
      </div>
      {isActive && (
        <StyledPopup>
          <ul>
            {sortList.map((sortEl, index) => (
              <li
                key={sortEl}
                onClick={() => {
                  onHandleClickPopup(index);
                  setIsActive(false);
                }}
                className={
                  sortBy &&
                  order &&
                  pickSortParam(sortBy, order) === sortList[index]
                    ? "active"
                    : ""
                }>
                {sortEl}
              </li>
            ))}
          </ul>
        </StyledPopup>
      )}
    </StyledSort>
  );
};
