import Skeleton from "react-loading-skeleton"
import BankInfoSkeleton from "../BankInfo/BankInfoSkeleton"
import TransactionsTableSceleton from "../TransactionsTable/TransactionsTableSceleton"

const RecentTransactionsSkeleton = () => {
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <Skeleton width={200} height={20} containerClassName="flex-1"/>
        <Skeleton width={100} height={20} containerClassName="flex-0"/>
      </header>

      <div className="flex items-center justify-center gap-4">
            <Skeleton width={80} height={30} containerClassName="flex-0"/>
            <Skeleton width={80} height={30} containerClassName="flex-0"/>
            <Skeleton width={80} height={30} containerClassName="flex-0"/>
        </div>

          <div
            className="space-y-4"
          >
            <BankInfoSkeleton/>
            <TransactionsTableSceleton/>
          </div>
    </section>
  )
}

export default RecentTransactionsSkeleton