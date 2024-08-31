
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_upper">
          <p>Stay in<br />the Know</p>
          <div className="footer_join_us_Now">
            <form>
              <p>Join us Now!</p>
              <input type="text" />
              <a href="new form/newsignup.html">
                <button style={{ '--clr': '#605ffc' }}>Register Now!</button>
              </a>
            </form>
          </div>
        </div>
        <hr />
        <div className="footer_lower">
          <p>
            For any questions please email<br />
            <a href="mailto:rushikeshwayal6@gmail.com">rushikeshwayal6@gmail.com</a>
          </p>
          <div className="footer_social_links">
            <a href="https://twitter.com/Rushikesh_7_11" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter" style={{ color: '#000000' }}></i>
            </a>
            <a href="https://www.linkedin.com/in/rushikesh-wayal-87134a220/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin" style={{ color: '#000000' }}></i>
            </a>
            <a href="https://github.com/rushikeshwayal" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" style={{ color: '#000000' }}></i>
            </a>
            <a href="https://www.instagram.com/rushikesh__wayal/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram" style={{ color: '#000000' }}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
