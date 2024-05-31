import Image from 'next/image'
import React from 'react'
import { IoMdHeartHalf } from 'react-icons/io'
import { IoCalculator, IoLogoAndroid, IoLogoReact } from 'react-icons/io5'
import SideBarMenuItem from './SideBarMenuItem'
// import { PageProps } from '../../../.next/types/app/dashboard/counter/page';

export const menuItems = [
    {
        path: "/dashboard/main",
        icon: <IoCalculator />,
        title: "Counter",
        subTitle: "Contador client Side"
    },
    {
        path: "/dashboard/counter",
        icon: <IoMdHeartHalf />,
        title: "Contacto",
        subTitle: "ver mas ..."
    },
    {
        path: "",
        icon: <IoMdHeartHalf />,
        title: "PROYECTOS",
        subTitle: "ver mas ..."
    },
    {
        path: "",
        icon: <IoMdHeartHalf />,
        title: "CERTIFICADOS ONLINE",
        subTitle: "ver mas ..."
    }
]



const SideBar = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">

                <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
                    <span className='p-2 '><IoLogoAndroid />
                    </span>        Personal<span className="text-blue-500">Page</span><span className="text-gray-500">UG</span>.</h1>
                <p className="text-slate-500 text-sm">Proyectos personales</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8" width={50} height={50} src="https://media.licdn.com/dms/image/D4E03AQEmVskt4e9VzA/profile-displayphoto-shrink_800_800/0/1698307975557?e=1722470400&v=beta&t=T06MUbhcvVUmtFPpPB9UDHDBXoSntxdJvze5ix06CL8" alt="Software Enginner and dataScience Ingennier" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Julio Coloma
                    </span>
                </a>
                <p className="text-slate-500">Welcome to me page,</p>
            </div>
            <div id="nav" className="w-full px-6">

                {
                    menuItems.map(menuItem => (
                        <SideBarMenuItem key={menuItem.path} {...menuItem} />
                    ))
                }
            </div>
        </div>
    )
}

export default SideBar