import React from 'react'
import Form from '../form/Form'
import IncomeList from './incomeList'
import { useGlobalContext } from '../../context/GlobalContext'

const Income = () => {
  const { totalIncome } = useGlobalContext()

  return (
    <>
      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-5 lg:mb-0 3xl:col-span-5">
          <Form type={'Income'} />
        </div>
        <div className="col-span-7 lg:col-span-7 lg:mb-0 3xl:col-span-7">
          <IncomeList />
        </div>
      </div>
    </>
  )
}

export default Income