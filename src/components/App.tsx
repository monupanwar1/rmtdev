import {useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import Logo from "./Logo";
import BookmarksButton from "./BookmarksButton";
import SearchForm from "./SearchForm";
import Sidebar,{SidebarTop} from "./Sidebar";
import JobItemContent from "./JobItemContent";
import SortingControls from "./SortingControls";
import ResultsCount from "./ResultsCount";
import Pagination from "./PaginationControls";
import JobList from "./JobList";
import { useJobItems } from "../lib/hooks";




function App() {
  const[searchText,setSearchText]=useState("");
  const[jobItemSliced,isLoading]=useJobItems(searchText);



  return (
    <>
     <Background/>
     <Header>
      <HeaderTop>  
        <Logo/>
        <BookmarksButton/>
      </HeaderTop>
      

        <SearchForm  searchText={searchText}
        setSearchText={setSearchText}
        />
     </Header>
     <Container>
     <Sidebar>
     <SidebarTop>
            <ResultsCount/>
            <SortingControls/> 
      </SidebarTop>

        <JobList jobItems={jobItemSliced} isLoading={isLoading}/>
        <Pagination/>
      </Sidebar>

        <JobItemContent/>
      </Container>
     <Footer/>
    </>
  );
}

export default App;