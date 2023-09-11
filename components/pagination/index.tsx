import { useSelector } from "react-redux";
import { StyledPaginate } from "./styled";

type paginationProps = {
  onChangePage(page: number): void;
};

export const Pagination = ({ onChangePage }: paginationProps) => {
  return (
    <StyledPaginate
      className="paginate"
      breakLabel="..."
      nextLabel="→"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={2}
      previousLabel="←"
      renderOnZeroPageCount={null}
    />
  );
};
