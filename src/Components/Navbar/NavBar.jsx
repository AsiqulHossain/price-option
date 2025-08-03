import React from 'react';

const NavBar = () => {

    const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

    return (
        <nav>
            <ul className='md:flex'>
                 {
                routes.map(route=> <li className="mr-10" key={route.id}>
                    <a href={route.path}>{route.name}</a> </li>)
            }
            </ul>
            
        </nav>
    );
};

export default NavBar;