import { JobItems } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type jobListProps={
  jobItems:JobItems[],
  isLoading:boolean,
}

export function JobList({jobItems,isLoading}:jobListProps){

    return <ul className="job-list">

      {isLoading && <Spinner/>}
      {!isLoading && jobItems.map((jobItems)=>(
        <JobListItem key={jobItems.id} jobItem={jobItems}/>
      )
      )}

    </ul>;
  }
  
  export default JobList;