import { JobItems } from "../lib/types";
import BookmarkIcon from "./BookmarkIcon";

type jobItemsProps={
  jobItem:JobItems
  isActive:boolean
}


export default function JobListItem({jobItem,isActive}:jobItemsProps){
  return (
    <li className={`job-item ${isActive ?"job-item--active" : ""}`}>
      <a href={`#${jobItem.id}`}className="job-item__link">
        <div className="job-item__badge">{jobItem.badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className="job-item__company">{jobItem.company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">{jobItem.date}</time>
        </div>
      </a>
    </li> 
  );
}