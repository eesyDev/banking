import HeaderBoxSkeleton from '@/components/HeaderBox/HeaderBoxSkeleton'
import PaymentTransferFormSkeleton from '@/components/PaymentTransferForm/PaymentTransferFormSkeleton'
import React from 'react'

const loading = () => {
  return (
    <section className="payment-transfer">
      <HeaderBoxSkeleton />

      <section className="size-full pt-5">
        <PaymentTransferFormSkeleton/>
      </section>
    </section>
  )
}

export default loading