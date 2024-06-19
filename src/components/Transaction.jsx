import React from 'react'

const Transaction = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className="font-medium text-xl">
        <p>Transactions | This Month</p>
      </div>
      <div className="flex gap-4 text-sm">
        <span className='rounded-xl bg-[#e5e5e5] text-[#64748b] py-1.5 px-4'>Payouts (22)</span>
        <span className='rounded-2xl bg-[#0369a1] text-white py-1.5 px-4'>Refunds (16)</span>
      </div>
    </div>
  )
}

export default Transaction
