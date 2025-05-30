import React from 'react'
import Skeleton from 'react-loading-skeleton'

const BankInfoSkeleton = () => {
  return (
    <div
        className='bank-info'
    >
      <figure
      >
        <Skeleton
          width={40}
          height={40}
          className="m-2 min-w-5"
          circle
        />
      </figure>
      <div className="flex w-full flex-1 flex-col justify-center gap-1">
        <div className="bank-info_content">
            <Skeleton width={140} height={20} containerClassName="flex-1"/>
            <Skeleton width={80} height={20} containerClassName="flex-1"/>
        </div>
        <Skeleton width={30} height={15}/>
      </div>
    </div>
  )
}

export default BankInfoSkeleton