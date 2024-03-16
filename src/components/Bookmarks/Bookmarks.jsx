import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-full bg-gray-300 mt-10">
            <h3 className='text-4xl'>Reading Time: {readingTime} </h3>
            <h2 className="text-4xl text-center ">Bookmarked Blogs : {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark ={bookmark} ></Bookmark> )
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;