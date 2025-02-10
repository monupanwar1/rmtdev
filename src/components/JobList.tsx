import JobListItem from "./JobListItem";

export function JobList({jobItems}) {
    return <ul className="job-list">
      {jobItems.map((jobItems)=>(
        <JobListItem jobItems={jobItems}/>
      )
      )}

    </ul>;
  }
  
  export default JobList;