interface SizesProps {
  sizes: number[];
  activeSize: number;
  onClickSize(index: number): void;
}

export const SizePicker = ({ sizes, activeSize, onClickSize }: SizesProps) => {
  return (
    <ul>
      {sizes.map((size) => (
        <li
          key={size}
          className={activeSize === size ? "active" : ""}
          onClick={() => onClickSize(size)}
        >
          {size} см.
        </li>
      ))}
    </ul>
  );
};
