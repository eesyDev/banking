import React from 'react'
import Skeleton from 'react-loading-skeleton'

const TransactionsTableSceleton = () => {
    return (
        <div>
            <div className="bg-[#f9fafb] py-2 px-4">
                <div className='flex justify-between'>
                    <div className="w-[32%]"><Skeleton width={60} height={30} containerClassName='flex-0' /></div>
                    <div className="w-[12%]"><Skeleton width={60} height={30} containerClassName='flex-0' /></div>
                    <div className="w-[16%]"><Skeleton width={60} height={30} containerClassName='flex-0' /></div>
                    <div className="w-[10%]"><Skeleton width={60} height={30} containerClassName='flex-0' /></div>
                    <div className="w-[10%]"><Skeleton width={60} height={30} containerClassName='flex-0' /></div>
                    <div className="w-[10%]"><Skeleton width={60} height={30} containerClassName='flex-0' /></div>

                </div>
            </div>
            <div>
                <div className="bg-[#FFFBFA] !over:bg-none !border-b-DEFAULT flex justify-between px-4 py-2">
                    <div className="w-[32%]">
                        <div className="flex items-center gap-3">
                            <Skeleton containerClassName='flex-1' width={100} height={20} />
                        </div>
                    </div>
                    <div className='w-[12%]'>
                        <Skeleton width={60} height={20} />
                    </div>
                    <div className="w-[16%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="max-md:hidden w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>
                </div>
                <div className="bg-[#F6FEF9] !over:bg-none !border-b-DEFAULT flex justify-between px-4 py-2">
                    <div className="w-[32%]">
                        <div className="flex items-center gap-3">
                            <Skeleton containerClassName='flex-1' width={100} height={20} />
                        </div>
                    </div>
                    <div className='w-[12%]'>
                        <Skeleton width={60} height={20} />
                    </div>
                    <div className="w-[16%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="max-md:hidden w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>
                </div>
                <div className="bg-[#FFFBFA] !over:bg-none !border-b-DEFAULT flex justify-between px-4 py-2">
                    <div className="w-[32%]">
                        <div className="flex items-center gap-3">
                            <Skeleton containerClassName='flex-1' width={100} height={20} />
                        </div>
                    </div>
                    <div className='w-[12%]'>
                        <Skeleton width={60} height={20} />
                    </div>
                    <div className="w-[16%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="max-md:hidden w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>
                </div>
                <div className="bg-[#F6FEF9] !over:bg-none !border-b-DEFAULT flex justify-between px-4 py-2">
                    <div className="w-[32%]">
                        <div className="flex items-center gap-3">
                            <Skeleton containerClassName='flex-1' width={100} height={20} />
                        </div>
                    </div>
                    <div className='w-[12%]'>
                        <Skeleton width={60} height={20} />
                    </div>
                    <div className="w-[16%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="max-md:hidden w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>
                </div>
                <div className="bg-[#FFFBFA] !over:bg-none !border-b-DEFAULT flex justify-between px-4 py-2">
                    <div className="w-[32%]">
                        <div className="flex items-center gap-3">
                            <Skeleton containerClassName='flex-1' width={100} height={20} />
                        </div>
                    </div>
                    <div className='w-[12%]'>
                        <Skeleton width={60} height={20} />
                    </div>
                    <div className="w-[16%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>

                    <div className="max-md:hidden w-[10%]">
                        <Skeleton width={60} height={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionsTableSceleton