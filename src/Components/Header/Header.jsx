import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-neutral text-primary py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-12 h-12 object-contain" src="/public/Anchor.png" alt="Anchor University Lagos Logo" />
        </Link>

        {/* App title */}
        <h1 className="text-4xl font-bold flex-grow text-center font-croissant">AUL VOTING APP</h1>

        {/* Navigation */}
        <nav className="flex space-x-8">
          <Link to="/poll" className="text-lg font-medium cursor-pointer hover:text-lprimary transition duration-300">Poll</Link>
          <Link to="/contestant" className="text-lg font-medium cursor-pointer hover:text-lprimary transition duration-300">Contestants</Link>
        </nav>

        {/* User Login Icon */}
        <div className="ml-8 flex items-center justify-center">
          <div className="w-10 h-10 bg-primary text-neutral font-semibold rounded-full flex items-center justify-center cursor-pointer hover:bg-lprimary transition duration-300">
            C
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
