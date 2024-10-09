import { useParams } from 'react-router-dom';
import data from "../index"; // Assuming the data is coming from here

const PDetails = () => {
  const { post, id } = useParams(); // Get the post and ID from the URL
  const person = data.find(
    (person) => person.id === parseInt(id) && person.post.toLowerCase().replace(/\s+/g, '') === post
  ); // Find the person by ID and post

  if (!person) {
    return <p>Person not found</p>; // Fallback if the person is not found
  }

  return (
    <div className="flex flex-col items-center pt-28 h-screen bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center bg-white p-8 w-[80%] rounded-xl shadow-lg space-y-6 lg:space-y-0 lg:space-x-20">
        {/* Image */}
        <img
          src={person.img}
          alt={person.name}
          className="w-52 h-52 object-cover object-top rounded-full border-gray-200"
        />

        {/* Text Information */}
        <div className="text-center lg:text-left space-y-3">
          <h1 className="text-4xl font-bold text-gray-800">{person.name}</h1>
          <p className="text-lg font-medium text-gray-600">Email: {person.email}</p>
          <p className="text-lg font-medium text-gray-600">Department: {person.department}</p>
          <p className="text-lg font-medium text-gray-600">Programme: {person.programme}</p>
          <p className="text-lg font-medium text-gray-600">Post Held: {person.post}</p>
          <p className="text-lg font-medium text-gray-600">Level: {person.level}</p>
        </div>
      </div>
    </div>
  );
};

export default PDetails;
