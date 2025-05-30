import Skeleton from 'react-loading-skeleton';

const SidebarSkeleton = () => {
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <div
                className='mb-12 cursor-pointer items-center gap-2 flex'
            >
                <Skeleton
                    width={34}
                    height={34}
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className="sidebar-logo">Horizon</h1>
            </div>
            
            <Skeleton />
        </nav>
        <Skeleton />
    </section>
  )
}

export default SidebarSkeleton