import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookMarks, handleReadingTime }) => {
  const { id, blog_title, blog_cover, author_img, reading_time, hashtags } =
    blog;
  //   console.log(blog);
  return (
    <div className="w-[845px] my-20 border-b-2 gray last:border-none">
      <img src={blog_cover} alt="" />
      {/* Author Div  */}
      <div className="flex justify-between items-center my-5">
        <div className="w-[70px] my-5">
          <img src={author_img} alt="" />
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-xl font-bold">{reading_time} min</p>
          <button onClick={() => handleBookMarks(blog_title)}>
            <FaRegBookmark className="text-green-600" />
          </button>
        </div>
      </div>
      <h1 className="text-5xl font-extrabold my-10">{blog_title}</h1>
      <div className="flex gap-10">
        {hashtags.map((hashtag, idx) => (
          <p key={idx} className="text-gray-400 font-bold">
            #{hashtag}
          </p>
        ))}
      </div>
      <button
        className="my-10"
        onClick={() => handleReadingTime(id, reading_time)}
      >
        <a href="#" className="text-[#6047EC] underline font-bold">
          Mark as Read
        </a>
      </button>
    </div>
  );
};

export default Blog;
