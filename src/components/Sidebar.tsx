import { cn } from "@/utils/style";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiOutlineClose } from "react-icons/ai";

interface SidebarProps {
  close: () => void;
  isOpen: boolean;
}

export default function Sidebar({isOpen, close}: SidebarProps) {
  return <div className={cn("absolute min-h-screen flex-col gap-6 border-r bg-white p-10 pr-6 text-base lg:relative", isOpen ? 'flex' : 'hidden')}>
    <div className="flex justify-end lg:hidden">
      <AiOutlineClose className="h-5 w-5 lg:hidden"/>
    </div>
    <Link href='/' className="w-48 font-medium text-gray-600 hover:underline">
      홈
    </Link>
    <Link href='/tag' className="w-48 font-medium text-gray-600 hover:underline">
      태그
    </Link>
    <Link href='/catehory/web-debelopment'>
      Web Development
    </Link>
    <div className="mt-10 flex items-center gap-4">
      <Link href='/' target="_blank">
        <AiFillGithub />
      </Link>
      <Link href='/' target="_blank">
        <AiFillInstagram />
      </Link>
    </div>
  </div>
}