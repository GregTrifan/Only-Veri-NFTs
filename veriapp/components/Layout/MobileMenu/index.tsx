import { Disclosure, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { Fragment } from "react";
import { BiChevronDown, BiSend } from "react-icons/bi";
import { BsGithub, BsInfoCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
interface Props {
    open: boolean;
    setOpen: (show:boolean) => void;
}

export default function MobileMenu(props:Props) {
  const { open, setOpen } = props;
  return (
    <AnimatePresence>
        {open && (
            <motion.div
              key="nav-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
             className="absolute top-0 left-0 right-0 z-50  p-2 pb-4 m-2 space-y-3 bg-gradient-to-tr from-emerald-50 to-blue-100 rounded shadow-lg shadow-emerald-400/20">
            <div className="self-end flex-none px-2 ml-2 btn btn-link btn-icon">
              <button onClick={()=>setOpen(false)} className="absolute top-0 right-0 m-2 rounded-full hover:bg-red-400 transition">
                <IoMdClose className="h-5 w-5" />
                <span className="sr-only">Close Menu</span>
              </button>
              <div className="w-full mt-6">
                <Link href="/upload">
                  <a className="transition-colors ease-in-out hover:bg-emerald-100 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                    Upload
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="transition-colors ease-in-out hover:bg-emerald-100 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                    Blog
                  </a>
                </Link>
                <Disclosure>
                  <Disclosure.Button className="transition-colors ease-in-out hover:bg-emerald-100 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                    About
                    <BiChevronDown className="w-5 h-5 ml-auto" aria-hidden="true" />
                  </Disclosure.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Disclosure.Panel>
                      <button className="transition-colors ease-in-out hover:bg-emerald-100 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                        <BsInfoCircle className="mx-2" />
                        About this project
                      </button>
                      <button className="transition-colors ease-in-out hover:bg-emerald-100 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                        <BiSend className="mx-2 -rotate-45" />
                        Send us a Message
                      </button>
                      <button className="transition-colors ease-in-out  hover:bg-emerald-100 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                        <BsGithub className="mx-2 " />
                        Github
                      </button>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>
              </div>
            </div>
          </motion.div>
        )}
    </AnimatePresence>
  );
};

