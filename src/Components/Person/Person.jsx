import PropTypes from 'prop-types';

const Person = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg px-6 py-12 text-center max-w-lg">
      <img
        className="w-64 h-52 mb-6 object-cover object-top"
        src={props.img}
        alt={props.post}
      />
      <h2 className="text-2xl font-semibold mb-3 text-gray-800">{props.name}</h2>
      <p className="text-lg text-gray-600 mb-1">{props.level}</p>
      <p className="text-sm text-gray-500 mb-6">{props.post}</p>
      <button
        className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition"
        onClick={props.onVote} // Trigger vote on click
      >
        Vote
      </button>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onVote: PropTypes.func.isRequired, // Require the vote handler function
};

export default Person;
