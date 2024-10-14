import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import TransactionList from './TransactionList';
import { useGlobalContext } from '../../context/GlobalContext'

import "react-datepicker/dist/react-datepicker.css";

const Transaction = () => {
  const {  getTransactions, transactions } = useGlobalContext()
  const [inputValues, setInputValues] = useState({
    startDate: new Date(),
    endDate: new Date(),
    category: '',
  })
  const handleSubmit = (e) =>{
    e.preventDefault()
    getTransactions(inputValues)
  }
  return (
    <>
      <div className='!z-5 flex rounded-[20px] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full p-4 h-full'>
        <form onSubmit={handleSubmit}>
          <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
            <div className="col-span-2 lg:col-span-2 lg:mb-0 3xl:col-span-2">
              <DatePicker
                className='mt-2  h-10 w-full items-center justify-center rounded-xl border bg-gray p-3 text-sm outline-none'
                selected={inputValues.startDate} onChange={(date) => setInputValues({...inputValues,startDate:date})} />
            </div>
            <div className="col-span-1 lg:col-span-1 lg:mb-0 3xl:col-span-1 mt-2">
              <label className='mt-2 text-sm text-navy-700 dark:text-white ml-3 mb-0 font-medium'>
                To
              </label>
            </div>
            <div className="col-span-2 lg:col-span-2 lg:mb-0 3xl:col-span-2">
              <DatePicker
                className='mt-2  h-10 w-full items-center justify-center rounded-xl border bg-gray p-3 text-sm outline-none'
                selected={inputValues.endDate} onChange={(date) => setInputValues({...inputValues,endDate:date})} />
            </div>
            <div className="col-span-3 lg:col-span-3 lg:mb-0 3xl:col-span-3">
              <select id='category'
                className="ml-2 mt-2 h-10 w-full items-center justify-center rounded-xl border bg-gray text-sm outline-none"
                onChange={(e)=>setInputValues({...inputValues,category: e.target.value})} value={inputValues.category}
                name={'category'}
              >
                <option value="">Select category</option>
                <option value="income">Income</option>
                <option value="expense">Expenses</option>

              </select>
            </div>
            <div className="col-span-4 lg:col-span-4 lg:mb-0 3xl:col-span-4">
              <button class="ml-5 linear rounded-[20px] bg-brand-900 px-4 py-2 mt-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">View Transactions</button>
            </div>
          </div>
        </form>
      </div>
      <div className='!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none mb-2 mt-10 p-4 h-full'>
        <TransactionList transactions={transactions}/>
      </div>
    </>
  )
}

export default Transaction
