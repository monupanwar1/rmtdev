import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PageDirection } from "../lib/types";

type PaginationProps = {
  currentPage: number;
  totalNumberOfPages: number;
  onClick: (direction: PageDirection) => void;
};

export default function PaginationControls({
  onClick,
  currentPage,
  totalNumberOfPages,
}: PaginationProps) {
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButtons
          direction="previous"
          cureentPage={currentPage}
          onClick={() => onClick("previous")}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationButtons
          direction="next"
          cureentPage={currentPage}
          onClick={() => onClick("next")}
        />
      )}
    </section>
  );
}

type paginationButtonsProps = {
  direction: PageDirection;
  cureentPage: number;
  onClick: () => void;
};

function PaginationButtons({
  direction,
  cureentPage,
  onClick,
}: paginationButtonsProps) {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.currentTarget.blur;
      }}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon />
          page{cureentPage - 1}
        </>
      )}
      {direction === "next" && (
        <>
          <ArrowRightIcon />
          page{cureentPage + 1}
        </>
      )}
    </button>
  );
}
