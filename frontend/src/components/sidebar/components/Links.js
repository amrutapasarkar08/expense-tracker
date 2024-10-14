/* eslint-disable */
import React from 'react';
import { Link} from 'react-router-dom';
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  
  const { routes,active,setActive } = props;

  // verifies if routeName is the one active (in browser input

    return routes.map((route, index) => {
        return (
          <Link key={index} >
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
                onClick={()=>setActive(route.id)}
              >
                <span
                  className={`${
                    active === route.id
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 flex ms-4 ${
                    active === route.id
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
            </div>
          </Link>
        );
    });
  
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
