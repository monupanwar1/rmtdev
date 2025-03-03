import { useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import Logo from "./Logo";
import BookmarksButton from "./BookmarksButton";
import SearchForm from "./SearchForm";
import Sidebar, { SidebarTop } from "./Sidebar";
import JobItemContent from "./JobItemContent";
import SortingControls from "./SortingControls";
import ResultsCount from "./ResultsCount";
import Pagination from "./PaginationControls";
import JobList from "./JobList";
import { useDebounce, useJobItems } from "../lib/hooks";
import { Toaster } from "react-hot-toast";
import { RESULTS_PER_PAGE } from "../lib/constants";
import { PageDirection, SortBy } from "../lib/types";

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 250);
  const { jobItems, isLoading } = useJobItems(debouncedSearchText);
  const[currentPage,setCurrentPage]=useState(1);
  const [sortBy,setSortBy]=useState<SortBy>("relevant")
  


  // slicing and returning only 7;

  const totalNumberOfResult = jobItems?.length || 0;
  const totalNumberOfPages=totalNumberOfResult/RESULTS_PER_PAGE
 
  //sorting

const jobItemsSorted=[...jobItems ||[]]?.sort((a,b)=>{
    if(sortBy==="relevant"){
      return b.relevanceScore-a?.relevanceScore
    }
    else{
      return a.daysAgo-b.daysAgo;
    }
    
})

   // slicing
   const jobItemSliced = jobItemsSorted.slice(currentPage*RESULTS_PER_PAGE-RESULTS_PER_PAGE,currentPage*RESULTS_PER_PAGE)|| [];

  const handleChangeSortBy=(newSortBy:SortBy)=>{
    setCurrentPage(1)
    setSortBy(newSortBy)
  }

  const handlePageChange=(direction:PageDirection)=>{
    if(direction==="next"){
      setCurrentPage((prev)=>prev+1);
    }
    else if(direction==="previous"){
      setCurrentPage((prev)=>prev-1);
    }

  }


 
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalNumberOfResults={totalNumberOfResult} />
            <SortingControls 
            sortBy={sortBy}
            onClick={handleChangeSortBy}
             />
          </SidebarTop>

          <JobList jobItems={jobItemSliced} isLoading={isLoading} />
          <Pagination
          onClick={handlePageChange}
          currentPage={currentPage}
          totalNumberOfPages={totalNumberOfPages}
          />
        </Sidebar>

        <JobItemContent />
      </Container>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
