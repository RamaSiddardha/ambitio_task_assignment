import React, { useState } from 'react';
import Logo from '../assets/images/logo-desktop.png';
import LogoPhone from '../assets/images/logo-mobile.png';
import chevronDown from '../assets/images/chevron-down.png';
import Diamond from '../assets/images/diamond_icon.png';
import Phone from '../assets/images/phone.png';
import Crown from '../assets/images/crown-fill.png';
import Hamburger from '../assets/images/Hamburger.png';
import './Navbar.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Study-abroad', icon: chevronDown },
    { name: 'Bootcamps', icon: chevronDown },
    { name: 'Products', icon: chevronDown },
  ];

  const rightMenuItems = [
    { name: 'Ambitio Pro', icon: Diamond },
    { name: 'Ambitio Elite', icon: Crown },
  ];

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="p-1 bg-white shadow-sm">
      <div className="main mx-2 md:mx-4 lg:mx-auto md:my-0">
        <nav className="flex justify-between items-center p-2 md:p-4">
          {/* Logo */}
          <div className="text-red-600 font-bold text-xl">
             <img src={Logo} alt="logo" className="hidden md:block h-8" />
             <img src={LogoPhone} alt="logo" className="md:hidden h-8" />
             </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-4">
            {menuItems.map((item, index) => (
              <li key={index} className="relative inline-block text-left">
                <button
                  className="flex items-center text-gray-700 hover:text-red-600"
                  onClick={() => handleDropdownToggle(index)}
                >
                  {item.name} {item.icon && <img src={item.icon} alt="icon" className="ml-1" />}
                </button>
                {openDropdown === index && (
                  <div className="absolute left-0 mt-2 bg-white border shadow-md rounded-md p-2">
                    <ul>
                      {dropdownOptions.map((option, i) => (
                        <li key={i} className="text-gray-700 hover:bg-gray-100 p-2 cursor-pointer">
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}

            {rightMenuItems.map((item, index) => (
              <li key={index} className="relative inline-block text-left">
                <button className="flex items-center text-gray-700 hover:text-red-600">
                  {item.icon && <img src={item.icon} alt="icon" className="mr-1" />}
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Speak with Experts Button */}
            <button className="flex border-2 border-red-600 text-red-600 px-4 py-2 hover:bg-red-600 hover:text-white rounded-xl">
              <img src={Phone} alt="phone" className="mr-2" />
              <span className='text-xs sm:text-sm md:text-md'>Speak with our Experts</span>
            </button>
            
            {/* Mobile Menu Toggle Button */}
         
            <button
            className="sm:flex md:flex lg:hidden flex items-center focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={menuOpen ? Hamburger : Hamburger} alt="menu" className="h-6 w-6" />
          </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center text-gray-700 hover:text-red-600 w-full text-left"
                onClick={() => handleDropdownToggle(index)}
              >
                {item.name} {item.icon && <img src={item.icon} alt="icon" className="ml-1" />}
              </button>
            ))}

            {rightMenuItems.map((item, index) => (
              <button key={index} className="flex items-center text-gray-700 hover:text-red-600 w-full text-left">
                {item.icon && <img src={item.icon} alt="icon" className="mr-1" />}
                {item.name}
              </button>
            ))}
            
            {/* Speak with Experts Button in Mobile View */}
            {/* <button className="border-2 border-red-600 text-red-600 px-4 py-2 hover:bg-red-600 hover:text-white rounded-3xl w-full">
              <img src={Phone} alt="phone" className="mr-2" />
              Speak with our Experts
            </button> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
