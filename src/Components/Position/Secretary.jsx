import Person from "../Person/Person";
import data from "../..";

const Secretary = () => {
  const secretary = data.filter((person) => person.post === "Secretary");
  return (
    <div>
      <div className="flex justify-center items-center py-8">
        {secretary.map((person, index) => (
          <div key={person.id} className="flex items-center space-x-4">
            <Person
             id={person.id} 
              name={person.name}
              post={person.post}
              level={person.level}
              img={person.img}
            />

            {index < secretary.length - 1 && (
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
