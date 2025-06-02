import AuthFormSkeleton from '@/components/AuthForm/AuthFormSkeleton'
import React from 'react'

const loading = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthFormSkeleton type="sign-in"/>
    </section>
  )
}

export default loading