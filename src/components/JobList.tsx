import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

export function JobList({jobItems,isLoading}){

    return <ul className="job-list">

      {isLoading && <Spinner/>}
      {!isLoading && jobItems.map((jobItems)=>(
        <JobListItem jobItems={jobItems}/>
      )
      )}

    </ul>;
  }
  
  export default JobList;