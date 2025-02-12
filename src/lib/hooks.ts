import { useEffect, useState } from "react";
import { JobItems } from "./types";
import { BASE_API_URL } from "./constants";

export function useActiveId(){
  const[activeId,setActiveId]=useState<number | null>(null);

  useEffect(()=>{

    const handleHashChange=()=>{
      const id =+window.location.hash.slice(1);
      setActiveId(id);
    }
    handleHashChange();
    window.addEventListener("hashchange",handleHashChange)

    return ()=>{
      window.removeEventListener("hashchange",handleHashChange)
    }

  },[])

  return activeId;
}

export function useJobItems(searchText:string){
    
const[jobItems,setJobItems]=useState<JobItems[]>([]);
const[isLoading,setIsLoading]=useState(false);
// slicing and returning only 7;

const jobItemSliced=jobItems.slice(0,7);


useEffect(()=>{
  if(!searchText) return;

  const fetchData=async()=>{
    setIsLoading(true);
  const response =await fetch(
    `
    ${BASE_API_URL}?search=${searchText}`
  );
   const data =await response.json();
   setIsLoading(false);
    setJobItems(data.jobItems);
  };
  fetchData();

},[searchText])


 return [
    jobItemSliced,
    isLoading
 ] as const

}

