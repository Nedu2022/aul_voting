import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Vote from "./vote";
import Poll from "./Components/Poll/Poll";
import PDetails from "./Components/PDetails"; // The unified details component

function App() {
  return (
    <Router>
      <div className="bg-background h-full">
        <Header />
        <Routes>
          <Route path="/" element={<Vote />} />
          <Route path="/poll" element={<Poll />} />

          {/* Dynamically handle any post */}
          <Route path="/:post/:id" element={<PDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
