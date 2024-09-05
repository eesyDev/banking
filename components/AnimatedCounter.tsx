"use client";
import React from 'react';
import CountUp from 'react-countup';
import { formatAmount } from '@/lib/utils';

const AnimatedCounter = ({ amount } : { amount: number }) => {
  return (
    <div className='w-full'>
        <CountUp 
            end={amount}
            decimal=','
            decimals={2}
            prefix='$'
            duration={2.75}
        />
    </div>
  )
}

export default AnimatedCounter