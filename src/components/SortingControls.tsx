import { SortBy } from "../lib/types";

type SortingProps ={
  sortBy:SortBy,
  onClick:(sortBy:SortBy)=>void
}

export default function Sorting({sortBy,onClick}:SortingProps) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>
      <SortingButton
        onClick={() =>onClick("relevant")}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingButton>

      <SortingButton
        onClick={() => onClick("recent")}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingButton>
    </section>
  );
}

type sortingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

function SortingButton({ children, onClick, isActive }: sortingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`sorting__button sorting__button--recent ${
        isActive ? "sorting__button--active" : ""
      }`}
    >
      {children}
    </button>
  );
}
