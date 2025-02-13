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

export default Footer;
