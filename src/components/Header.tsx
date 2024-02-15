import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header ({isSidebarOpen, setIsSidebarOpen}: HeaderProps) {
  return <header className='flex h-16 items-center justify-between border-b px-5 lg:px-10 lg:h-20'>
    <button onClick={() => setIsSidebarOpen((toggle) => !toggle)} className="p-2">
      {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu className="w-5 h-5 lg:w-6 lg:h-6"/>}
    </button>
    <Link href="/">
      <h1 className="text-3xl font-medium text-slate-600 lg:text-4xl">Blog</h1>
    </Link>
    <Link href="/chatbot" className="p-2"><BsRobot className="w-5 h-5 lg:w-6 lg:h-6"/></Link>
  </header>
}