import Skeleton from "react-loading-skeleton"

const RecentTransactionsSkeleton = () => {
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <Skeleton width={200} height={20} containerClassName="flex-1"/>
        <Skeleton width={100} height={20} containerClassName="flex-1"/>
      </header>

      <div className="flex space-y-4">
          {Array(3).map((account: Account) => (
            <Skeleton width={60} height={30} containerClassName="flex-1"/>
          ))}
        </div>

          <div
            className="space-y-4"
          >
            {/* <BankInfo 
              account={account}
              appwriteItemId={appwriteItemId}
              type="full"
            />

            <TransactionsTable transactions={currentTransactions} /> */}
            
          </div>
    </section>
  )
}

export default RecentTransactionsSkeleton