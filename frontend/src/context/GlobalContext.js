import React, { createContext, useState, useContext } from 'react'
import axios from 'axios'


const GlobalContext = createContext();

const BASR_URL = 'http://localhost:5000/api/v1/'


export const GlobalProvider = ({ children }) => {

    const [income, setIncome] = useState([])
    const [expense, setExpense] = useState([])
    const [transactions, setTransactions] = useState(null)
    const [error, setError] = useState(null)



    const addIncome = async (income) => {
        const response = await axios.post(`${BASR_URL}add-income`, income)
            .catch((err) => setError(err.response.data.message))
        getIncome()
    }

    const getIncome = async () => {
        const response = await axios.get(`${BASR_URL}get-income`)
        setIncome(response.data)
    }

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASR_URL}delete-income/${id}`)
            .catch((err) => setError(err.response.data.message))
        getIncome()
    }
    const totalIncome = () => {
        let totalincome = 0
        income.forEach((income) => {
            totalincome = totalincome + income.amount
        })
        return totalincome
    }

    const addExpense = async (expense) => {
        const response = await axios.post(`${BASR_URL}add-expense`, expense)
            .catch((err) => setError(err.response.data.message))
        getExpense()
    }

    const getExpense = async () => {
        const response = await axios.get(`${BASR_URL}get-expense`)
        setExpense(response.data)
    }

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASR_URL}delete-expense/${id}`)
            .catch((err) => setError(err.response.data.message))
        getExpense()
    }
    const totalExpense = () => {
        let totalexpense = 0
        expense.forEach((expense) => {
            totalexpense = totalexpense + expense.amount
        })
        return totalexpense
    }
    const totalBalance = () => {
        let balance = income - expense
        return balance
    }
    const getTransactions = async (data) => {
        if (data.category == 'income') {
            const response = await axios.get(`${BASR_URL}get-income-transactions?startDate=${data.startDate}&&endDate=${data.endDate}`)
            setTransactions(response.data)
        } else if (data.category == 'expense') {
            const response = await axios.get(`${BASR_URL}get-expense-transactions?startDate=${data.startDate}&&endDate=${data.endDate}`)
            setTransactions(response.data)
        }
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            income,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense,
            totalBalance,
            expense,
            getTransactions,
            transactions,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
