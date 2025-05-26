'use client';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="burger"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <Link
                        href="/"
                        className='mb-12 cursor-pointer items-center gap-2 flex'
                    >
                        <Image
                            src='/icons/logo.svg'
                            width={34}
                            height={34}
                            alt='Horizon image'
                            className='size-[24px] max-xl:size-14'
                        />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className='flex flex-col gap-4'>
                                {sidebarLinks.map(item => {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                                    return (
                                        <SheetClose key={item.label} asChild>
                                            <Link href={item.route}  className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}>
                                                <Image
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    width={20}
                                                    height={20}
                                                    className={cn({
                                                        'brightness-[3] invert-0': isActive
                                                    })}
                                                />
                                                <p className={cn(`text-16 font-semibold text-black-2`, { 'text-white': isActive })}>{item.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                USER
                            </nav>
                        </SheetClose>
                        <Footer user={user} type="mobile"/>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav