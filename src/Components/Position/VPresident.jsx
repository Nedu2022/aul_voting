import Person from "../Person/Person";
import data from "../..";

const President = () => {
  // Filter data for contestants with the post "President"
  const vpresidents = data.filter((person) => person.post === "Vice President");

  return (
    <div>
      <div className="flex justify-center items-center py-8">
     
        {vpresidents.map((person, index) => (
          <div key={person.id} className="flex items-center space-x-4">
            <Person
              name={person.name}
              post={person.post}
              level={person.level}
              img={person.img}
            />
            

            {index < vpresidents.length - 1 && (
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
