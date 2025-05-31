import React from 'react'
import Skeleton from 'react-loading-skeleton'

const PaymentTransferFormSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div>
            <div className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                    <Skeleton
                        width={120}
                        height={20}
                    />
                    <Skeleton
                        width={200}
                        height={12}
                    />
                </div>
                <div className="flex w-full flex-col">
                  <Skeleton
                    width={250}
                    height={40}
                  />
                </div>
              </div>
            </div>
        </div>
        <div className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                    <Skeleton
                        width={120}
                        height={20}
                    />
                    <Skeleton
                        width={200}
                        height={12}
                    />
                </div>
              </div>
            </div>

        <div className="payment-transfer_form-details">
            <Skeleton
                width={150}
                height={20}
            />
            <Skeleton
                width={200}
                height={10}
            />
        </div>

        <div>
            <div className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                    <Skeleton
                        width={120}
                        height={20}
                    />
                </div>
                <div className="flex w-full flex-col">
                  <Skeleton
                    width={250}
                    height={40}
                  />
                </div>
              </div>
            </div>
        </div>

        <div>
            <div className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                    <Skeleton
                        width={120}
                        height={20}
                    />
                </div>
                <div className="flex w-full flex-col">
                  <Skeleton
                    width={250}
                    height={40}
                  />
                </div>
              </div>
            </div>
        </div>
        <div>
            <div className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                    <Skeleton
                        width={120}
                        height={20}
                    />
                </div>
                <div className="flex w-full flex-col">
                  <Skeleton
                    width={250}
                    height={40}
                  />
                </div>
              </div>
            </div>
        </div>

        <div className="payment-transfer_btn-box">
          <Skeleton
            width={200}
            height={40}
          />
        </div>
      </div>
    </div>
  )
}

export default PaymentTransferFormSkeleton