const MainPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
             <img src="J.png" height={40} alt="LOGO"/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarText">
            <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="/about"><span className="bracket">&lt;</span>About Me<span className="bracket">&gt;</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/experience"><span className="bracket">&lt;</span>Experience<span className="bracket">&gt;</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects"><span className="bracket">&lt;</span>Projects<span className="bracket">&gt;</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact"><span className="bracket">&lt;</span>Contact<span className="bracket">&gt;</span></a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default MainPage;
