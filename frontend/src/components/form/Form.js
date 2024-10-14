import React, { useState } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'

const Form = (props) => {
  const { addIncome, addExpense } = useGlobalContext()


  const [inputValues, setInputValues] = useState({
    title: '',
    amount: '',
    type: '',
    category: '',
    description: '',
  })

  const { title, amount, type, category, description } = inputValues;

  const handleInput = name => e => {
    setInputValues({ ...inputValues, [name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (props.type === 'Income')
      addIncome(inputValues)
    else if (props.type === 'Expense')
      addExpense(inputValues)
  }

  return (
    <div className='!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full p-4 h-full'>
      <form onSubmit={handleSubmit}>
        <header className="relative flex items-center justify-between pt-2">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Add {props.type}
          </div>
        </header>
        <label className='mt-2 text-sm text-navy-700 dark:text-white ml-1.5 font-medium'>
          Title
        </label>
        <input
          id={`${props.type}-title`}
          type='text'
          className='mt-2 flex h-10 w-full items-center justify-center rounded-xl border bg-gray p-3 text-sm outline-none'
          value={title}
          name={'title'}
          onChange={handleInput('title')} />
        <label className='mt-2 text-sm text-navy-700 dark:text-white ml-1.5 font-medium'>
          Type
        </label>
        <input
          id={`${props.type}-type`}
          type='text'
          className='mt-2 flex h-10 w-full items-center justify-center rounded-xl border bg-gray p-3 text-sm outline-none'
          value={type}
          name={'type'}
          onChange={handleInput('type')} />
        <label className='mt-2 text-sm text-navy-700 dark:text-white ml-1.5 font-medium'>
          Amount
        </label>
        <input
          id={`${props.type}-amount`}
          type='text'
          className='mt-2 flex h-10 w-full items-center justify-center rounded-xl border bg-gray p-3 text-sm outline-none'
          value={amount}
          name={'amount'}
          onChange={handleInput('amount')} />
        <label className='mt-2 text-sm text-navy-700 dark:text-white ml-1.5 font-medium'>
          Category
        </label>

        <select id={`${props.type}-category`} className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-gray p-3 text-sm outline-none"
          onChange={handleInput('category')} value={category}
          name={'category'} >
          <option value="">Select category</option>
          <option value="Salary">Salary</option>
          <option value="Rent">Rent</option>
          <option value="Stocks">Stocks</option>
          <option value="Youtube">Youtube</option>
          <option value="Investment returns">Investment returns</option>
          <option value="Other">Other</option>
        </select>

        <label className='mt-2 text-sm text-navy-700 dark:text-white ml-1.5 font-medium'>
          Description
        </label>
        <input
          id={`${props.type}-description`}
          type='text'
          className='mt-2 flex h-10 w-full items-center justify-center rounded-xl border bg-gray p-3 text-sm outline-none'
          value={description}
          name={'description'}
          onChange={handleInput('description')} />
        <button class="linear rounded-[20px] bg-brand-900 px-4 py-2 mt-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">ADD +</button>
      </form>
    </div>
  )
}

export default Form
