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

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 250);
  const { jobItems, isLoading } = useJobItems(debouncedSearchText);

  // slicing and returning only 7;

  const totalNumberOfResult = jobItems.length;
  const jobItemSliced = jobItems.slice(0, 7);

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
            <SortingControls />
          </SidebarTop>

          <JobList jobItems={jobItemSliced} isLoading={isLoading} />
          <Pagination />
        </Sidebar>

        <JobItemContent />
      </Container>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
