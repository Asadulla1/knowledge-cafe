import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookmarks }) => {
  console.log(bookmarks);
  return (
    <>
      <div className="text-4xl bg-[#1111110D] max-h-max p-10 my-20 rounded-lg">
        <h2 className="text-xl font-bold text-center">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookMark, idx) => (
          <BookMark key={idx} bookMark={bookMark} />
        ))}
      </div>
    </>
  );
};

export default BookMarks;
