import Person from "../Person/Person";
import data from "../../index";

const President = () => {
  // Filter data for contestants with the post "President"
  const presidents = data.filter((person) => person.post === "President");

  return (
    <div>
      <div className="flex justify-center items-center py-8">
        {/* Loop through the filtered "President" contestants and render each */}
        {presidents.map((person, index) => (
          <div key={person.id} className="flex items-center space-x-4">
            <Person
              id={person.id} 
              name={person.name}
              post={person.post}
              level={person.level}
              img={person.img}
            />
            
            {/* Show "VS" image between contestants */}
            {index < presidents.length - 1 && (
              <div>
                <img className="w-52" src="../public/vs.png" alt="VS" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default President;
