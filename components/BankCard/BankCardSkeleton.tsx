import React from 'react'
import Skeleton from 'react-loading-skeleton';

const BankCardSkeleton = ({ showBalance } : {showBalance: boolean}) => {
  return (
    <div className='flex flex-col'>
        <div 
            className='bank-card'
        >
            <div className="bank-card_content">
                <div className="">
                    <Skeleton
                        width={180}
                        height={10}
                        baseColor="#5490e3" highlightColor="#90b6eb"
                    />
                     <Skeleton
                        width={100}
                        height={15}
                        baseColor="#5490e3" highlightColor="#90b6eb"
                    />
                </div>
                <article className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <Skeleton
                            width={150}
                            height={15}
                            containerClassName='flex-1'
                            baseColor="#5490e3" highlightColor="#90b6eb"
                        />
                        <Skeleton
                            width={30}
                            height={15}
                            containerClassName='flex-0'
                            baseColor="#5490e3" highlightColor="#90b6eb"
                        />
                    </div>
                    <Skeleton
                            width={180}
                            height={15}
                            containerClassName='flex-1'
                            baseColor="#5490e3" highlightColor="#90b6eb"
                    />
                    
                </article>
            </div>
            <div className="bank-card_icon">
                <Skeleton
                    width={20}
                    height={24}
                    containerClassName='flex-1'
                    baseColor="#5490e3" highlightColor="#90b6eb"
                />
                <Skeleton
                    width={45}
                    height={32}
                    containerClassName='flex-1 ml-5'
                    baseColor="#5490e3" highlightColor="#90b6eb"
                />
                
            </div>
        </div>
        {showBalance && <Skeleton width={200} height={20}/>}
    </div>
  )
}

export default BankCardSkeleton