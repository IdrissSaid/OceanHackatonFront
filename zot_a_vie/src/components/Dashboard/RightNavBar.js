import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const RightNavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogout = () => {
    console.log('Déconnexion effectuée');
  };

  return (
    <div className="flex items-center relative">
      <div className="relative">
        <FontAwesomeIcon icon={faUser} className="text-black text-xl mr-4" />
      </div>
      <FontAwesomeIcon icon={faBell} className="text-black text-xl mr-4" />
      <p className="text-black font-bold mr-4">Admin</p>
      <div
        className="relative cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faChevronDown} className="text-black text-xl" />
        {isHovered ? (
          <div className="absolute top-0 right-0 mt-10">
            <button
              className="bg-red-500 text-white p-2 focus:outline-none"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RightNavBar;
