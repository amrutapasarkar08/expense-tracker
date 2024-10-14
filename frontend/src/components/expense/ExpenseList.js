import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import { IoMdTrash } from "react-icons/io";
import { MdBarChart } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { PiChartLineUpFill } from "react-icons/pi";
import { RiYoutubeFill } from "react-icons/ri";
import { FaMoneyCheckAlt,FaMoneyCheck} from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const ExpenseList = () => {
    const { getExpense, expense, deleteExpense } = useGlobalContext()
    useEffect(() => {
        const res = getExpense()
        console.log('expense', res)
    }, [])

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Salary':
                return <MdBarChart className="h-7 w-7" />;
            case 'Rent':
                return <IoMdHome className="h-7 w-7" />;
            case 'Stocks':
                return <PiChartLineUpFill className="h-7 w-7" />;
            case 'Youtube':
                return <RiYoutubeFill className="h-7 w-7" />;
            case 'Investment returns':
                return <FaMoneyCheckAlt className="h-7 w-7" />;
            case 'Other':
                return <FaMoneyCheck  className="h-7 w-7" />;
            default:
                return <FaMoneyBillTransfer className="h-7 w-7" />;
        }
    }

    return (
        <div className='!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full p-4 h-full'>
            <header className="relative flex items-center justify-between pt-4">
                <div className="text-xl font-bold text-navy-700 dark:text-white">
                    Expense List
                </div>
            </header>

            {expense && expense.map((expense) => (
                <div className="flex h-15 w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700 mt-2">
                    <div className="flex items-center">
                        <div className="flex h-full w-16 rounded-xl">
                            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                                <span className="flex items-center text-brand-500 dark:text-white">
                                    {getCategoryIcon(expense.category)}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-base font-bold text-navy-700 dark:text-white">
                                {expense.title}
                            </h5>
                            <p className="text-sm font-normal text-gray-600">
                                {expense.category}
                            </p>
                        </div>
                    </div>

                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                            <p> {"$"}  </p>
                            {expense.amount}
                        </div>
                        <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                            <IoMdTrash onClick={() => deleteExpense(expense._id)} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ExpenseList