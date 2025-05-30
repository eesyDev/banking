'use client'
import React, { Suspense } from 'react'
import HeaderBoxSkeleton from './HeaderBoxSkeleton'

const HeaderBox = ({ type = "title", title, subtext, user  }: HeaderBoxProps ) => {
  return (
    <Suspense fallback={<HeaderBoxSkeleton/>}>
    <div className='header-box'>
        <h1 className='header-box-title'>
            {title}
            {type === 'greeting' && (
                <span className='text-bankGradient'>&nbsp;{user}</span>
            )}
        </h1>
        <p className='header-box-subtext'>{subtext}</p>
    </div>
    </Suspense>
  )
}

export default HeaderBox