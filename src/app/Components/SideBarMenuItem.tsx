'use client'
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface props{
    path:string,
    icon:JSX.Element,
    title:string,
    subTitle:string
}
export default function SideBarMenuItem({icon,path,title,subTitle}
    :props
) {
    const currentPath=usePathname();
  return (
    <div>
      <>
      
      <Link href={path} 
      className=
      {`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 placeholder-blue-950g--800 hover:bg-white/5 transition ease-linear duration-150 ${currentPath==path?'bg-slate-700':''}`}>  
         <div>
            {icon}
         </div>
         <div className="flex flex-col">
            
             <span className="text-lg font-bold leading-5 text-white">{title}</span>
             <span className="text-sm text-white/50  md:block">{subTitle}</span>
         </div>
         </Link>
      </>
    </div>
  );
}