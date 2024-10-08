
import Person from "../Person/Person";
import data from "../..";

const Secretary = () => {
  const social = data.filter((person) => person.post === "Social President");
  return (
    <div>
      <div className="flex justify-center items-center py-8">
        {social.map((person, index) => (
          <div key={person.id} className="flex items-center space-x-4">
            <Person
              name={person.name}
              post={person.post}
              level={person.level}
              img={person.img}
            />

            {index < social.length - 1 && (
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

export default Secretary;
