import HeaderBoxSkeleton from '@/components/HeaderBox/HeaderBoxSkeleton'
import TransactionsTableSceleton from '@/components/TransactionsTable/TransactionsTableSkeleton'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const loading = () => {
  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBoxSkeleton/>
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <Skeleton
                width={150}
                height={25}
                baseColor="#5490e3" highlightColor="#90b6eb"
            />
            <Skeleton
                width={250}
                height={12}
                baseColor="#5490e3" highlightColor="#90b6eb"
            />
            <Skeleton
                width={200}
                height={12}
                baseColor="#5490e3" highlightColor="#90b6eb"
            />
          </div>
          <Skeleton
            width={150}
            height={60}
          />
        </div>

        <section className="flex w-full flex-col gap-6">
          <TransactionsTableSceleton/>
        </section>
      </div>
    </div>
  )
}

export default loading