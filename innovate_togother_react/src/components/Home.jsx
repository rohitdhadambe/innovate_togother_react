import { Link } from 'react-router-dom';

<Link to="/contribution" className="hover:text-blue-400">Project</Link>

function Header() {
  return (
    <header className="bg-gray-900 p-4">
      <div className="flex justify-between items-center text-white">
        <Link to="/main/index.html" className="hover:text-blue-400">Project</Link>
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

function MidSection() {
  return (
    <div className="bg-white text-center py-12">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-3xl font-bold mb-6">
          Contribute to a variety of <br /> projects
        </h4>
        <a href="new form/newsignup.html">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Register
          </button>
        </a>
      </div>

      {/* Uncomment and use the video if needed */}
      {/* <div className="mt-8">
        <video autoPlay loop src="19 (1080p).mp4" className="w-full h-auto"></video>
      </div> */}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Upper section: Stay in the Know */}
        <div className="text-center mb-8">
          <p className="text-2xl font-semibold">Stay in<br />the Know</p>
          <div className="mt-4">
            <form className="flex flex-col items-center space-y-4">
              <p className="text-lg font-semibold">Join us Now!</p>
              <input
                type="text"
                placeholder="Enter your email"
                className="p-2 rounded-md w-full sm:w-64 text-black focus:outline-none"
              />
              <a href="new form/newsignup.html">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg">
                  Register Now!
                </button>
              </a>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full my-6 border-gray-700" />

        {/* Lower section: Contact and Social Links */}
        <div className="text-center mb-8">
          <p className="mb-4">
            For any questions, please email<br />
            <a href="mailto:rushikeshwayal6@gmail.com" className="underline hover:text-blue-400">
              rushikeshwayal6@gmail.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://twitter.com/Rushikesh_7_11" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter text-2xl hover:text-blue-400"></i>
          </a>
          <a href="https://www.linkedin.com/in/rushikesh-wayal-87134a220/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin text-2xl hover:text-blue-400"></i>
          </a>
          <a href="https://github.com/rushikeshwayal" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github text-2xl hover:text-blue-400"></i>
          </a>
          <a href="https://www.instagram.com/rushikesh__wayal/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram text-2xl hover:text-blue-400"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <MidSection />
      <Footer />
    </div>
  );
}

export default Home;
