import { ReactNode, createContext, useState } from "react";


type BookmarksContextProps = {
    bookmarkedIds: number[];
    handleToggleBookmarks: (id: number) => void;
};

export const BookmarksContext = createContext<BookmarksContextProps|null>(null);


type BookmarksProviderProps = {
    children: ReactNode
};

export default function BookmarksContextProvider({
  children
}:BookmarksProviderProps) {
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

  const handleToggleBookmarks = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  };


  const contextValue ={
    bookmarkedIds,
    handleToggleBookmarks,
  }

  return(
     <BookmarksContext.Provider value={contextValue}>
    {children}
    </BookmarksContext.Provider>
    )
}
