import { useDispatch } from "react-redux";
import searchIcon from "@/public/search-icon.svg";
import inputClearIcon from "@/public/input-clear-icon.svg";
import { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { actions } from "@/util/@reduxjs/filterSlice";
import Image from "next/image";
import { StyledSearchContainer } from "../styled";

export const SearchInput = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const setSearchParamWithDelay = useCallback(
    debounce((string) => {
      dispatch(actions.setSearchParameter(string));
    }, 500),
    []
  );

  const onChangeSearchInput = (e) => {
    setValue(e.target.value);
    setSearchParamWithDelay(e.target.value);
  };

  const onClickClearBtn = () => {
    setValue("");
    dispatch(actions.setSearchParameter(""));
  };

  return (
    <StyledSearchContainer>
      <Image
        className="search-icon"
        src={searchIcon}
        alt=""
        width={20}
        height={20}
      />
      <input
        value={value}
        onChange={onChangeSearchInput}
        className="search-input"
        placeholder="Поиск пиццы"
      />
      <Image
        onClick={onClickClearBtn}
        className="clear-icon"
        src={inputClearIcon}
        alt=""
        width={25}
        height={25}
      />
    </StyledSearchContainer>
  );
};
