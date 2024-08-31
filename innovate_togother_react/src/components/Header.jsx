import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="head">
      <div className="head_info">
        <Link to="/main/index.html">Project</Link>
        <a href="#mentor-section">Mentor</a>
        <Link to="/topics/topic.html">Topics</Link>
        <a id="about-link" href="#about-section">About</a>
        <a id="login" href="new form/login.html">
          <i className="fa-solid fa-user" style={{ color: '#605ffc' }}></i> Log In
        </a>
        <a href="new form/newsignup.html">
          <button style={{ '--clr': '#605ffc' }}>Register</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
