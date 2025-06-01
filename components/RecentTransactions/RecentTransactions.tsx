'use client';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankTabItem from '../BankTabItem';
import BankInfo from '../BankInfo/BankInfo';
import TransactionsTable from '../TransactionsTable/TransactionsTable';
import { useState, Suspense, useEffect } from 'react'
import TransactionsTableSkeleton from '../TransactionsTable/TransactionsTableSkeleton';
import { usePathname, useSearchParams } from 'next/navigation';
// import { Pagination } from './Pagination'

const RecentTransactions = ({
  accounts,
  transactions = [],
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) => {
  const rowsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const indexOfLastTransaction = page * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = transactions.slice(
    indexOfFirstTransaction, indexOfLastTransaction
  )
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname()
  const searchParams = useSearchParams()
  // Сбрасываем загрузку при изменении URL
  useEffect(() => {
    setIsLoading(false)
  }, [pathname, searchParams])

  const handleTabChange = (newId: string) => {
    setIsLoading(true) // Включаем загрузку сразу при клике
  }
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent transactions</h2>
        <Link
          href={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          View all
        </Link>
      </header>

      <Tabs defaultValue={appwriteItemId} className="w-full" onValueChange={handleTabChange}>
      <TabsList className="recent-transactions-tablist">
          {accounts.map((account: Account) => (
            <TabsTrigger key={account.id} value={account.appwriteItemId}>
              <BankTabItem
                key={account.id}
                account={account}
                appwriteItemId={appwriteItemId}
              />
            </TabsTrigger>
          ))}
        </TabsList>

        {accounts.map((account: Account) => (
          <TabsContent
            value={account.appwriteItemId}
            key={account.id}
            className="space-y-4"
          >
            <BankInfo 
              account={account}
              appwriteItemId={appwriteItemId}
              type="full"
            />
            {isLoading ? (
              <TransactionsTableSkeleton />
            ) : (
              currentTransactions.length > 0 ? (
                <TransactionsTable transactions={currentTransactions} />
              ) : (
                <p className='mt-4'>No transactions found</p>
              )
            )}

            {totalPages > 1 && (
              <div className="my-4 w-full">
                {/* <Pagination totalPages={totalPages} page={page} /> */}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

export default RecentTransactions