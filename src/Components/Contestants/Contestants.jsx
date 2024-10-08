
import ContestantCard from './ContestantCard';
import data from '../../index'; // Ensure this is the correct path

const Contestants = () => {
  // Filter contestants based on their post
  const presidents = data.filter(contestant => contestant.post === 'President');
  const vicePresidents = data.filter(contestant => contestant.post === 'Vice President');
  const secretaries = data.filter(contestant => contestant.post === 'Secretary');
  const socialPresidents = data.filter(contestant => contestant.post === 'Social President');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contestants</h1>

      {/* Presidents Section */}
      <div>
        <h2 className="text-xl font-bold mb-4 mt-20">Presidents</h2>
        <div className="grid grid-cols-1  gap-6">
          {presidents.map((contestant) => (
            <ContestantCard 
              key={contestant.id}
              name={contestant.name}
              img={contestant.img}
              programme={contestant.programme}
              department={contestant.post}
              level={contestant.level}
            />
          ))}
        </div>
      </div>

      {/* Vice Presidents Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Vice Presidents</h2>
        <div className="grid grid-cols-1 gap-6">
          {vicePresidents.map((contestant) => (
            <ContestantCard 
              key={contestant.id}
              name={contestant.name}
              img={contestant.img}
              programme={contestant.programme}
              department={contestant.post}
              level={contestant.level}
            />
          ))}
        </div>
      </div>

      {/* Secretaries Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Secretaries</h2>
        <div className="grid grid-cols-1  gap-6">
          {secretaries.map((contestant) => (
            <ContestantCard 
              key={contestant.id}
              name={contestant.name}
              img={contestant.img}
              programme={contestant.programme}
              department={contestant.post}
              level={contestant.level}
            />
          ))}
        </div>
      </div>

      {/* Social Presidents Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Social Presidents</h2>
        <div className="grid grid-cols-1  gap-6">
          {socialPresidents.map((contestant) => (
            <ContestantCard 
              key={contestant.id}
              name={contestant.name}
              img={contestant.img}
              programme={contestant.programme}
              department={contestant.post}
              level={contestant.level}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contestants;
