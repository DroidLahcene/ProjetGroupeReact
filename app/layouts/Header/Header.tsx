import React from "react";
import "./Header.css";


export function Header(){
    return(
      <header className="main-head  bg-black text-white text-center h-12 flex items-center justify-center ">
      <h1 className="font-bold text-2xl">
        Header du projet
      </h1>
      </header>
    );
};

// export {Header}; // export default Header