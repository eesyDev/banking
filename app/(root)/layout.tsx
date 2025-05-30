import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarSkeleton from "@/components/Sidebar/SidebarSkeleton";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import 'react-loading-skeleton/dist/skeleton.css';


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) {
    console.log('not logged in', loggedIn)
    redirect('/sign-in')
  }
  return (
    <main className="flex h-screen w-full font-inter">
      <Suspense fallback={<SidebarSkeleton/>}>
        <Sidebar 
            user={loggedIn}
          />
      </Suspense>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="logo"
            />
            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
