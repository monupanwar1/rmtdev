import { useEffect, useState } from "react";
import {JobItem ,JobItemExpanded,} from "./types";
import { BASE_API_URL } from "./constants";
import { useQuery } from "@tanstack/react-query";

type JobItemsApiResponse={
  public:boolean;
  jobItem:JobItemExpanded;
}

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
    
const[jobItems,setJobItems]=useState<JobItem[]>([]);
const[isLoading,setIsLoading]=useState(false);
// slicing and returning only 7;

const totalNumberOfResult =jobItems.length;
const jobItemSliced=jobItems.slice(0,7);


useEffect(()=>{
  if(!searchText) return;

  const fetchData=async()=>{
    setIsLoading(true);
   const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
   const data =await response.json();
   setIsLoading(false);
    setJobItems(data.jobItems);
  };
  fetchData();

},[searchText])


 return [
    jobItemSliced,
    isLoading,
    totalNumberOfResult
 ] as const

}

// export function useJobItem(id:number|null){


//   const[jobItem,setJobItem]=useState< JobItemExpanded|null>(null);
//   const[isLoading,setIsLoading]=useState(false);


//   useEffect(()=>{
//     setIsLoading(true);
//     const fetchData=async()=>{
//       if(!id) return
//       const response = await fetch(`${BASE_API_URL}/${id}`);
//       const data = await response.json();
//       setIsLoading(false);
//       setJobItem(data.jobItem);
//     }
//     fetchData()

//   },[id])

//   return {
//     jobItem,isLoading
//   } as const

// }

// fetcher function


const fetchJobItem=async(id:number):Promise<JobItemsApiResponse> =>{
  const response =await fetch(`${BASE_API_URL}/${id}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }
  const data = await response.json();
  return data;
}


export function useJobItem(id: number | null) {
  const { data, isLoading} = useQuery({
    queryKey:["job-items",id],
    queryFn:()=>(id ? fetchJobItem(id):Promise.resolve(null)),
    staleTime:1000*60*60,
    refetchOnWindowFocus:false,
    retry:false,
    enabled:!!id
  })
  return{
    jobItem:data?.jobItem,
    isLoading
  } as const 
  
}


export function useDebounce<T>(value:T,delay =500):T{
  const [debouncedValue,setDebouncedValue]=useState(value);
  
  useEffect(()=>{
    const timerId = setTimeout(()=>setDebouncedValue(value)) 
     return ()=>clearTimeout(timerId);
  },[value,delay])
  return debouncedValue;
}

export function useActivejobItem(){
  const activeId=useActiveId();
  const jobItem=useJobItem(activeId)

  return jobItem;
}