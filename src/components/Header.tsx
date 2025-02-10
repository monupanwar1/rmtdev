import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header({
    searchText,setSearchText
}) {
    return <header className="header">
        <div className="header_top">
        <Logo/>
        <BookmarksButton/>
        </div>

        <SearchForm  searchText={searchText}
        setSearchText={setSearchText}
        />
    </header>;
  }
  
