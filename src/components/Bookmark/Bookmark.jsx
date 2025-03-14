const Bookmark = ({ bookmark }) => {
    const { title } = bookmark || {};

    console.log(bookmark);

    return (
        <div>
            <h4>Title: {title}</h4>
        </div>
    );
};

export default Bookmark;
