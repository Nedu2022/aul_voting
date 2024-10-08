
import PropTypes from 'prop-types';

const ContestantCard = ({ name, img, programme, department, level }) => {
  console.log(name, img, programme, department, level); // Debugging
  return (
    <div className="max-w-full w-full flex shadow-lg rounded-lg overflow-hidden bg-white">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img className=" w-48 object-cover " src={img} alt={`${name}'s profile`} />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          {/* Name */}
          <h2 className="text-xl font-bold text-primary mb-2">{name}</h2>
          
          {/* Programme */}
          <p className="text-gray-700 font-medium">Programme: {programme}</p>

          {/* Department */}
          <p className="text-gray-700">Department: {department}</p>
          
          {/* Level */}
          <p className="text-gray-700">Level: {level}</p>
        </div>
      </div>
    </div>
  );
};

ContestantCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  programme: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default ContestantCard;
