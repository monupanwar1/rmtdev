import { useEffect, useState } from "react";

export function useJobItems(searchText:string){
    
const[jobItems,setJobItems]=useState([]);
const[isLoading,setIsLoading]=useState(false);
// slicing and returning only 7;

const jobItemSliced=jobItems.slice(0,7);


useEffect(()=>{
  if(!searchText) return;

  const fetchData=async()=>{
    setIsLoading(true);
  const response =await fetch(
    `
    https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
  );
   const data =await response.json();
   setIsLoading(false);
    setJobItems(data.jobItems);
  };
  fetchData();

},[searchText])


 return {
    jobItemSliced,
    isLoading
 }

}

