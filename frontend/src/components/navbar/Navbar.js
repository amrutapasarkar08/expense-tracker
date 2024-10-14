import React from 'react'
import routes from '../../routes';
import { IoMdLogOut } from "react-icons/io";

const Navbar = (props) => {
  const { active,name,logout } = props
  const activeRoute = routes.filter((route) => route.id == active)

  return (
    <nav className="ml-5 sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">

      <div className="ml-[6px]">
        <p className="ml-5 shrink text-[33px] capitalize text-navy-700 dark:text-white">
          {activeRoute[0].name}
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[250px] flex-grow items-center justify-around rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[250px] md:flex-grow-0 xl:w-[250px]">
          <p className="text-xl">
          Hey {name}
          </p>
       <span
          className="flex cursor-pointer"
          onClick={logout}
        >
         <IoMdLogOut className="h-7 w-7"/>
        </span>

      </div>
    </nav>
  );
}
export default Navbar