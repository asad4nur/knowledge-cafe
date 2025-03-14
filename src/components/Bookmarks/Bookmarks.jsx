import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3  mt-20 pl-5 bg-zinc-100 m-2 p-5 ">
            <div className="w-full">
                <h3>Reading Time: {readingTime}</h3>
                 <h3 className="flex justify-end w-full border-b text-3xl">Bookmarks: {bookmarks.length}</h3>
                 {bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)}
            </div>
        </div>
    );
};

export default Bookmarks;