import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import Image from "next/image";



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loggedIn = { firstName: 'Rano', lastName: 'Eesydev' }
	return (
		<main className="flex h-screen w-full font-inter">
			<Sidebar user={loggedIn} />
			<div className="flex size-full flex-col">
				<div className="root-layout">
					<Image
						src="/icons/logo.svg"
						alt="menu icon"
						width={30}
						height={30}
					/>
					<div className="">
						<MobileNav user={loggedIn} />
					</div>
				</div>
				{children}
			</div>
		</main>
	);
}
