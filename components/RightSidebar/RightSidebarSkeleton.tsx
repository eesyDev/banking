import React from 'react'
import Skeleton from 'react-loading-skeleton'
import BankCardSkeleton from '../BankCard/BankCardSkeleton'

const RightSidebarSkeleton = () => {
  return (
    <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className="profile-banner" />
            <div className="profile">
                <Skeleton
                  containerClassName='profile-img'
                />
                <div className="profile-details">
                    <Skeleton
                      width={200}
                      height={30}
                    />
                    <Skeleton
                      width={190}
                      height={15}
                    />
                </div>
            </div>
        </section>
        <section className="banks">
            <div className="flex w-full justify-between">
                <Skeleton
                  width={80}
                  height={20}
                />
                <Skeleton
                  width={80}
                  height={10}
                />
            </div>
                <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                    <div className="relative z-10">
                        <BankCardSkeleton showBalance={false}/>
                    </div>
                    <div className="absolute right-0 top-8 z-0 w-[90%]">
                        <BankCardSkeleton showBalance={false}/>
                    </div>
                </div>
        </section>
    </aside>
  )
}

export default RightSidebarSkeleton