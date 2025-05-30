import Skeleton from "react-loading-skeleton";

const TotalBalanceBoxSkeleton = () => {
  return (
    <section className='total-balance'>
        <div className="total-balance-chart">
            <Skeleton 
                circle
                width={100}
                height={100}
                duration={1.5}
                baseColor="#e0e0e0" 
                highlightColor="#f5f5f5"
                containerClassName="flex-1"
            />
        </div>
        <div className="flex flex-col gap-6">
            <Skeleton 
                width={150}
                height={20}
                borderRadius={5}
                baseColor="#e0e0e0" 
                highlightColor="#f5f5f5"
                containerClassName="flex-1"
            />
                
            <div className="flex flex-col gap-2">
                <Skeleton 
                    width={120}
                    height={10}
                    borderRadius={5}
                    className="total-balance-label"
                    baseColor="#e0e0e0" 
                    highlightColor="#f5f5f5"
                    containerClassName="flex-1"
                />
                <Skeleton 
                    width={80}
                    height={30}
                    borderRadius={5}
                    className="total-balance-amount flex-center gap-2"
                    baseColor="#e0e0e0" 
                    highlightColor="#f5f5f5"
                    containerClassName="flex-1"
                />
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBoxSkeleton