import React from 'react'
import TransactionId from './TransactionId'
import { orderData } from './data';
const Table = () => {
  return (
    <div className='bg-[#ffffff] px-3 pt-3 pb-4 rounded-lg gap-4'>
       <TransactionId/>
       <div className='relative overflow-x-auto py-3'>
        <table className='w-full text-sm text-left rtl:text-right'>
            <thead className='text-sm font-medium rounded uppercase'>
                <tr>
                    <th scope='col' className='px-6 py-3 font-medium'>
                        ORDER ID
                    </th>
                    <th scope='col' className='px-6 py-3 font-medium'>
                        STATUS
                    </th>
                    <th scope='col' className='px-6 py-3 font-medium'> 
                        TRANSACTION ID
                    </th>
                    <th scope='col' className='px-6 py-3 font-medium'>
                        REFUND DATE
                    </th>
                    <th scope='col' className='px-6 py-3 font-medium text-right'>
                        ORDER AMOUNT
                    </th>
                </tr>
            </thead>

            {orderData.map((order) => {
               return ( 
               <tbody>
                        <tr className='border-b text-sm'>
                            <th scope='row' className='px-6 py-3 font-normal text-sky-600 whitespace-nowrap'>
                               #{order.id}
                            </th>
                            <td className='px-6 py-4 flex items-center gap-2'>
                                {(order.status === "Successful") && <div className='rounded-full h-2.5 w-2.5 bg-green-500'/>}
                                {(order.status === "Processing") && <div className='h-2.5 w-2.5 rounded-full bg-gray-400'/>}
                                {(order.status === "Failed") && <div className='h-2.5 w-2.5 rounded-full bg-red-500'/>}
                                {order.status}
                            </td>
                            <td className='px-6 py-4 text-slate-950'>
                                 {order.transactionID}
                            </td>
                            <td className='px-6 py-4 text-slate-950'>
                                {order.refundDate}
                            </td>
                            <td className='px-6 py-4 text-slate-950 text-right'>
                                {order.amount}
                            </td>
                        </tr>
                </tbody>
               )
            })}
        </table>
       </div>
    </div>
  )
}

export default Table


