import BankCardSkeleton from "@/components/BankCard/BankCardSkeleton"
import HeaderBoxSkeleton from "@/components/HeaderBox/HeaderBoxSkeleton"
import Skeleton from "react-loading-skeleton"


const loading = () => {
  return (
    <section className='flex'>
      <div className="my-banks">
        <HeaderBoxSkeleton />

        <div className="space-y-4">
            <Skeleton width={200} height={20}/>
          <h2 className="header-2">
            Your cards
          </h2>
          <div className="flex flex-wrap gap-6">
            <BankCardSkeleton showBalance/>
            <BankCardSkeleton showBalance/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default loading