import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import logo from '../assets/images/BrawlerLogoWhite.svg';
import colors from '../assets/json/colors.json';
import images from '../assets/json/images.json';

const Navbar = () => {

  const [isCommandersVisible, setIsCommandersVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Cards', href: '/cards' },
  ];

  const navigationCommanders = (color) => {
    return '/commanders/' + color;
  }

  const toggleCommandersVisibility = () => {
    setIsCommandersVisible(prev => !prev);
  };

  const toggleVisibility = (menu) => {
    setIsVisible(prev => menu === activeMenu ? !prev : true);
    setActiveMenu(menu);
  };


  return (
    <Disclosure as="nav" className="fixed inset-x-0 bg-background_light" id="navbar">
      {({ }) => (
        <>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
            <Link 
              key={navigation[0].name}
              to={navigation[0].href} 
              className="flex items-center"
            >
              <img src={logo} alt="logo" className="h-8 w-8" />
              <div className="ml-2 mr-4">
                <h1 className="text-detail text-lg font-bold">Brawler</h1>
              </div>
            </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-detail hover:bg-active px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="relative">
                    <button onClick={toggleCommandersVisibility} className="text-detail hover:bg-active px-3 py-2 rounded-md text-sm font-medium">
                      Commanders
                    </button>
                    {isCommandersVisible && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-detail ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {Object.keys(colors).map((key) => (
                            <div key={key} className="relative">
                              <div className="text-background hover:bg-detail_dark block px-3 py-2 rounded-md text-base font-medium">
                                <button className="flex justify-between w-full items-center" onClick={() => toggleVisibility(key)}>
                                  {key}
                                </button>
                              </div>
                              {isVisible && activeMenu === key && (
                                <div className={`submenu ${isVisible ? 'visible' : 'hidden'} leading-7 text-left text-sm font-thin mx-auto`}>
                                  {Object.entries(colors[key]).map(([colorKey, colorValue]) => (
                                    <Link
                                      key={colorKey}
                                      to={navigationCommanders(colorKey)}
                                      className="text-background hover:bg-detail_dark block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                      <span style={{ display: 'flex', alignItems: 'center' }}>
                                        {colorKey.split('').map(char => (
                                          <img src={images[char]} alt={char} style={{height: '1em', width: '1em'}} />
                                        ))}
                                        {<p className="ml-2">{colorValue}</p> }
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-detail hover:bg-active focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-detail hover:bg-active block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="text-detail hover:bg-active block px-3 py-2 rounded-md text-base font-medium">
                <button className="flex justify-between w-full items-center" onClick={toggleCommandersVisibility}>
                  Commanders
                </button>
              </div>
              {isCommandersVisible && Object.keys(colors).map((key) => (
                <div key={key}>
                  <div className="text-detail hover:bg-active block px-3 py-2 rounded-md text-base font-medium ml-2">
                    <button className="flex justify-between w-full items-center" onClick={() => toggleVisibility(key)}>
                      {key}
                    </button>
                  </div>
                  {isVisible && activeMenu === key && (
                    <div className={`submenu ${isVisible ? 'visible' : 'hidden'} leading-7 text-left text-sm font-thin ml-2 mx-auto`}>
                      {Object.entries(colors[key]).map(([colorKey, colorValue]) => (
                        <Link
                          key={colorKey}
                          to={navigationCommanders(colorKey)}
                          className="text-detail hover:bg-active block px-3 py-2 rounded-md text-base font-medium"
                        >
                          <span style={{ display: 'flex', alignItems: 'center' }}>
                            {colorKey.split('').map(char => (
                              <img src={images[char]} alt={char} style={{height: '1em', width: '1em'}} />
                            ))}
                            {<p className="ml-2">{colorValue}</p> }
                          </span>                   
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

//<h1 key={colorKey} className="cursor-pointer p-2 hover:hover:bg-active rounded-md mt-1">{colorKey + " " + colorValue}</h1>