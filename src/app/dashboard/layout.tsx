import SideBar from '../Components/SideBar';

export default function dashboardLayout({children}: {children: React.ReactNode;}){
  return (
    <>
    <div>
      <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
    <div className="flex">
       <SideBar/>
        <div className="text-fuchsia-950">
        {children}
            
        </div>
      
    </div>
</div>
    </div>
    </>
  );
}