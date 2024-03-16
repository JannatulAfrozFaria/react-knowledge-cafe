import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = ({blog,handleAddBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='my-4 flex justify-between'>
                <div className='flex gap-6'>
                    <div className='w-16'>
                        <img src={author_img} alt="" />
                    </div>
                    <div>
                        <p className='text-2xl'>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span> {reading_time} min read </span>
                    <button onClick={()=>handleAddBookmark(blog)} className='ml-2 text-2xl text-red-600' ><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>
            <h2 className='text-4xl'>Blog Title: {title} </h2>
            <p>
                {hashtags.map((hash,idx)=> <span key={idx} > <a href="">#{hash}</a> </span> )}
            </p>
            <button className='text-purple-600 font-bold underline' onClick={()=> handleMarkAsRead(id,reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blog;