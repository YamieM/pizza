interface TypesProps {
  activeSize: number;
  types: number[];
  activeType: number;
  onClickType(index: number): void;
}

export const TypePicker = ({
  activeSize,
  types,
  activeType,
  onClickType,
}: TypesProps) => {
  const namesOfTypes = ["тонкое", "традиционное"];

  return (
    <ul>
      {activeSize !== 26 ? (
        types.map((type, index) => (
          <li
            key={type}
            className={activeType === type ? "active" : ""}
            onClick={() => onClickType(index)}
          >
            {namesOfTypes[type]}
          </li>
        ))
      ) : (
        <>
          <li className="disabled">тонкое</li>
          <li className="active">традиционное</li>
        </>
      )}
    </ul>
  );
};
