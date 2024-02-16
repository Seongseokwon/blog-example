import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import IconButton from "./IconComponent";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header ({isSidebarOpen, setIsSidebarOpen}: HeaderProps) {
  return <header className='flex h-16 items-center justify-between border-b px-5 lg:px-10 lg:h-20'>
    <IconButton 
      Icon={isSidebarOpen ? AiOutlineClose : AiOutlineMenu}
      onClick={() => setIsSidebarOpen((toggle) => !toggle)}
    />  
    <Link href="/">
      <h1 className="text-3xl font-medium text-slate-600 lg:text-4xl">Blog</h1>
    </Link>
    <IconButton Icon={BsRobot} component={Link} href='/chatbot' />
  </header>
}