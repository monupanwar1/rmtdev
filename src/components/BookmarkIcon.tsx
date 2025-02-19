import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { BookmarksContext } from "../contexts/BookmarksContextProvider";

type BookmarkIconProps={
  id:number
}

export default function BookmarkIcon({id}:BookmarkIconProps){
  const{ bookmarkedIds,handleToggleBookmarks,}=useContext(BookmarksContext);

  return (
    <button 
    onClick={(e)=>{
      handleToggleBookmarks(id);
      e.stopPropagation();
      e.preventDefault();
    }}
   >
      <BookmarkFilledIcon 
        className={`
          ${bookmarkedIds.includes(id) ? "filled" : ""}
        `}
      />
    </button>
  );
}