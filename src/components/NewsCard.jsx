import PropTypes from 'prop-types';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsStarFill, BsEye } from 'react-icons/bs';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md p-4 rounded-lg">
      <div className="flex items-center mb-3">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="font-semibold">{author.name}</h2>
          <p className="text-sm text-gray-500">
            {new Date(author.published_date).toLocaleString()}
          </p>
        </div>
        <div className="ml-auto">
          <AiOutlineShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3">{title}</h3>

      <div>
      <img
        src={thumbnail_url}
        alt="Thumbnail"
        className="w-full object-center h-[300px] rounded-lg "
      />
      </div>

      <p className="text-sm text-gray-600 mt-3">
        {details.slice(0, 100)}...{' '}
      </p>
      <span className="text-[#FF8C47] mt-5 cursor-pointer">Read More</span>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center text-yellow-400">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <span className="ml-1 font-semibold text-gray-800">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center text-gray-500">
          <BsEye />
          <span className="ml-1">{total_view} views</span>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
    news: PropTypes.object
}

export default NewsCard;
