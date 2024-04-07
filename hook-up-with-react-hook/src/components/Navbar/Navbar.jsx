import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  return (
    <header className="font-semibold h-20 lg:sticky lg:top-0 z-10 bg-slate-800 text-yellow-400">
      <div className="container mx-auto flex p-3 flex-col md:flex-row items-center">
        <Link to="/">
          <img className="w-32" src={logo} alt="" />
        </Link>

        <nav className="text-lg md:ml-auto md:mr-auto flex flex-wrap items-center justify-center space-x-5 lg:space-x-8">
          <Link to="/service"> services </Link>
          <a href="#"> home </a>
          <a href="#"> home </a>
          <a href="#"> home </a>
          {/* <button
            className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
            onClick={() => setDarkMode(!darkMode)}
          > */}
          {/* <img
                  src={darkMode ? sun : moon}
                  width="24"
                  height="24"
                  alt=""
                /> */}

          {/* {darkMode ? <Sun /> : <Moon />} */}
          {/* </button> */}
        </nav>
        {/* Showing User name and Photo */}
        <span className="mr-1">
          <img className="w-9 rounded-full" alt="" />
        </span>
        <span className="m-2"></span>
      </div>
    </header>
  );
};

export default Navbar;
