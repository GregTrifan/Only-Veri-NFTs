import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown, BiSend } from "react-icons/bi";
import { BsInfoCircle, BsGithub } from "react-icons/bs";
const AboutMenu = () => {
  return (
    <Menu>
      <Menu.Button className="transition inline-flex hover:bg-black/10 hover:text-white text-blue-100 px-3 py-2 rounded-md text-sm font-medium">
        About
        <BiChevronDown
          className="w-5 h-5 ml-2 -mr-1 text-blue-100 hover:text-white"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute  w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg shadow-slate-700/20 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              <button className="transition-colors ease-in-out hover:bg-emerald-100 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                <BsInfoCircle className="mx-2" />
                About this project
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="transition-colors ease-in-out hover:bg-emerald-100 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                <BiSend className="mx-2 -rotate-45" />
                Send us a Message
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="transition-colors ease-in-out  hover:bg-emerald-100 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                <BsGithub className="mx-2 " />
                Github
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AboutMenu;
