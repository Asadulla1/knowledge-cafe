import { useState } from "react";
import Blogs from "./components/Blogs/blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";
import ReadingTime from "./components/Reading Time/ReadingTime";
export default function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookMarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks);
  };
  const handleReadingTime = (id, time) => {
    setReadingTime(readingTime + time);
    // const remaining = bookmarks.map((bookmark, index) => console.log(index));
    //setBookMarks(remaining);
  };
  return (
    <div className="w-4/5 mx-auto">
      <Header />
      <main>
        <div className="md:grid grid-cols-3 gap-10">
          <Blogs
            handleBookMarks={handleBookMarks}
            handleReadingTime={handleReadingTime}
          />
          <div className="my-20">
            <ReadingTime readingTime={readingTime}></ReadingTime>
            <BookMarks bookmarks={bookmarks} />
          </div>
        </div>
      </main>
    </div>
  );
}
