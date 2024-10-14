import React from "react";
import {dateFormat} from '../../utils/dateFormat'

export default function TransactionList(props) {

    const { transactions } = props
  
 // eslint-disable-next-line
  return (
    <>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Transaction List
        </div>
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
              <tr className="!border-px !border-gray-400">
                <th
                    className="cursor-pointer border-b-[1px] border-gray-900 pt-4 pb-2 pr-4 text-start">
                    <div className="text-sm font-bold text-gray-600 dark:text-white">
                        TITLE
                    </div>
                </th>
                <th
                    className="cursor-pointer border-b-[1px] border-gray-900 pt-4 pb-2 pr-4 text-start">
                    <div className="text-sm font-bold text-gray-600 dark:text-white">
                       CATEGORY
                    </div>
                </th>
                <th
                    className="cursor-pointer border-b-[1px] border-gray-900 pt-4 pb-2 pr-4 text-start">
                    <div className="text-sm font-bold text-gray-600 dark:text-white">
                        AMOUNT
                    </div>
                </th>
                <th
                    className="cursor-pointer border-b-[1px] border-gray-900 pt-4 pb-2 pr-4 text-start">
                    <div className="text-sm font-bold text-gray-600 dark:text-white">
                        DATE
                    </div>
                </th>
              </tr>
          </thead>
          <tbody>
            {transactions && transactions.map((transaction)=>{
                return(
                <tr >
                    <td className="min-w-[150px] border-white/0 py-3  pr-4">{transaction.title}</td>
                    <td className="min-w-[150px] border-white/0 py-3  pr-4">{transaction.category}</td>
                    <td className="min-w-[150px] border-white/0 py-3  pr-4">{transaction.amount}</td>
                    <td className="min-w-[150px] border-white/0 py-3  pr-4">{dateFormat(transaction.createdAt)}</td>
                </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
