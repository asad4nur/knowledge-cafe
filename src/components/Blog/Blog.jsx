import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddBookmarks, handleReadingTime }) => {

    const { title, cover, author, author_img, post_date, reading_time, hashtags, id } = blog || {};
    
    return (
        <div className="mb-20 border-b-1 mt-20 pb-5">
            <img className="w-full mb-8" src={cover} alt="" />

            <div className="flex justify-between mb-8 ">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h4>{author}</h4>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className="ml-2 text-2xl text-amber-500"><FaBookmark onClick={() => handleAddBookmarks(blog)}></FaBookmark></button>
                </div>
            </div>

            <h2 className="text-4xl">{title}</h2>

            <p className="p-5">
                {
                    hashtags?.map((hash, idx) => <span className="pr-5" key={idx}><a href="">{hash}</a></span>)
                }
            </p>

            <button onClick={() => handleReadingTime({id, reading_time})} className="text-fuchsia-700">Mark As Read</button>

        </div>
    );
};

export default Blog;