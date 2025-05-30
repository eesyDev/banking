import HeaderBoxSkeleton from '@/components/HeaderBox/HeaderBoxSkeleton'
import RecentTransactionsSkeleton from '@/components/RecentTransactions/RecentTransactionsSkeleton'
import RightSidebarSkeleton from '@/components/RightSidebar/RightSidebarSkeleton'
import TotalBalanceBoxSkeleton from '@/components/TotalBalanceBox/TotalBalanceBoxSkeleton'
import React from 'react'

const loading = () => {
    return (
        <section className='home'>
            <div className="home-content">
                <header className="home-header">

                    <HeaderBoxSkeleton />
                    <TotalBalanceBoxSkeleton />
                </header>
                <RecentTransactionsSkeleton/>
            </div>
            <RightSidebarSkeleton/>
        </section>
    )
}

export default loading