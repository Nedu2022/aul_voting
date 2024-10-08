import President from "./Components/Position/President";
import Secretary from "./Components/Position/Secretary";
import VPresident from "./Components/Position/VPresident";
import Social from "./Components/Position/Social";


function Vote() {
  return (
    <div className="bg-background h-full">
 
      <div className="mt-20">
        <h2 className="align-center justify-center text-center text-lg font-lobster pt-8">
          President Of Department
        </h2>
        <President />

        <h2 className="align-center justify-center text-center text-lg font-lobster pt-8">
          Vice President Of Department
        </h2>
        <VPresident />

        <h2 className="align-center justify-center text-center text-lg font-lobster pt-8">
          Secretary Of Department
        </h2>
        <Secretary />

        <div>
          <h2 className="align-center justify-center text-center text-lg font-lobster pt-8">
            Social-Boy Of Department
          </h2>
          <Social />
        </div>
      </div>


    </div>
  );
}

export default Vote;
