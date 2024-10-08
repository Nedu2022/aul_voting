import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Vote from "./vote";
import Contestants from "./Components/Contestants/Contestants";
import Poll from "./Components/Poll/Poll";



function App() {
  return (
    <Router>
      <div className="bg-background h-full">
        <Header />
        <Routes>
          {/* Home route - Vote component */}
          <Route path="/" element={<Vote />} />

          {/* Contestants route */}
          <Route path="/poll" element={<Poll/>}/>

          {/* Contestants route */}
          <Route path="/contestant" element={<Contestants />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
