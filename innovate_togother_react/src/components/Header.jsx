import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 p-4">
      <div className="flex justify-between items-center text-white">
        <Link to="/contribution" className="hover:text-blue-400">Project</Link>
        <a href="#mentor-section" className="hover:text-blue-400">Mentor</a>
        <Link to="/topics/topic.html" className="hover:text-blue-400">Topics</Link>
        <a id="about-link" href="#about-section" className="hover:text-blue-400">About</a>
        <a id="login" href="new form/login.html" className="flex items-center space-x-2 hover:text-blue-400">
          <i className="fa-solid fa-user text-blue-400"></i>
          <span>Log In</span>
        </a>
        <a href="new form/newsignup.html">
          <button className="border border-blue-400 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white">
            Register
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
