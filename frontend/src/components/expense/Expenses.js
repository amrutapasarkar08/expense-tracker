import React from 'react'
import Form from '../form/Form'
import ExpenseList from './ExpenseList'
import { useGlobalContext } from '../../context/GlobalContext'

const Expenses = () => {
  const { totalExpense} = useGlobalContext()

  return (
    <>
      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-5 lg:mb-0 3xl:col-span-5">
          <Form type={'Expense'}/>
        </div>
        <div className="col-span-7 lg:col-span-7 lg:mb-0 3xl:col-span-7">
          <ExpenseList />
        </div>
      </div>
    </>
  )
}

export default Expenses