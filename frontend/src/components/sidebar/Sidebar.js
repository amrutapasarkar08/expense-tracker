/* eslint-disable */
import { React, useState } from 'react'
import SidebarCard from './components/SidebarCard';
import Links from './components/Links';
import routes from '../../routes';

export default function Sidebar(props) {

  const {active,setActive } = props;

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 translate-x-0" `}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
      >
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          Expense <span class="font-medium">Tracker</span>
        </div>
      </div>
      <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}
      <ul className="mb-auto pt-1">
        <Links routes={routes} active={active} setActive={setActive} />
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center">
        <SidebarCard />
      </div>

      {/* Nav item end */}
    </div>
  );
}

