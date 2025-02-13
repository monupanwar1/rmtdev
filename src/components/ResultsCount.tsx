import { useDebounce } from "../lib/hooks";

type ResultsCountProps={
  totalNumberOfResults:number;
}

export default function ResultsCount({totalNumberOfResults}:ResultsCountProps) {
  const debouncedTotalNumberOfResults=useDebounce(totalNumberOfResults);

  return (
    <p className="count">
      <span className="u-bold">{debouncedTotalNumberOfResults}</span> results
    </p>
  );
}