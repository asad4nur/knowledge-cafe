import { useState } from "react";
import Blog from "./components/Blog/Blog";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

const App = () => {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleReadingTime = time => {
    const readingTimes = readingTime + time ;
    setReadingTime(readingTimes);
  }

  const handleAddBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  return (
    <div>
      <header>
        <Header> </Header>
      </header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddBookmarks={handleAddBookmarks} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks}
        readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
};

export default App;