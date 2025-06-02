import TotalBalanceBox from '@/components/TotalBalanceBox/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { getAccounts, getAccount } from '@/lib/actions/bank.actions';
import RecentTransactions from '@/components/RecentTransactions/RecentTransactions';
import HeaderBox from '@/components/HeaderBox/HeaderBox';


const Home = async ({searchParams} : SearchParamProps) => {
  const { id, page } = await searchParams
  const currentPage = Number(page as string) || 1;
  // const loggedIn = await getLoggedInUser();
  // const accounts = await getAccounts({
  //   userId: loggedIn.$id
  // });

  const [loggedIn, accounts] = await Promise.all([
    getLoggedInUser(),
    getAccounts({ userId: (await getLoggedInUser()).$id }) 
  ]);

  if (!accounts) return;

  const appwriteItemId = (id as string) || accounts?.data[0]?.appwriteItemId;
  const [account] = await Promise.all([
    getAccount({ appwriteItemId })
  ]);

  console.log(loggedIn)
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'User'}
              subtext="Access & manage your account and transactions efficiently."
            />
          <TotalBalanceBox
            accounts={accounts.data}
            totalBanks={accounts.totalBanks}
            totalCurrentBalance={accounts.totalCurrentBalance}
          />
        </header>
        <RecentTransactions 
          accounts={accounts?.data}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={accounts?.data.slice(0, 2)}
      />
    </section>
  )
}

export default Home