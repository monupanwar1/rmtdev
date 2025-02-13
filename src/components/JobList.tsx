import { useActiveId } from "../lib/hooks";
import { JobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type jobListProps={
  jobItems:JobItem[],
  isLoading:boolean,
}

export function JobList({jobItems,isLoading}:jobListProps){
  const activeId =useActiveId();

    return <ul className="job-list">

      {isLoading && <Spinner/>}
      {!isLoading && jobItems.map((jobItems)=>(
        <JobListItem 
        key={jobItems.id} 
        jobItem={jobItems}
        isActive={jobItems.id === activeId}/>
      )
      )}

    </ul>;
  }
  
  export default JobList;