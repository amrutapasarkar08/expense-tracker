const { addIncome, getIncome, deleteIncome, getIncomeTransactions } = require('../conntrollers/IncomeController')
const { addExpense, getExpense, deleteExpense, getExpenseTransactions } = require('../conntrollers/ExpenseController')
const { signup, login, isAuthorised, logout } = require('../conntrollers/AuthController')
const router = require('express').Router()

router.post('/add-income', addIncome)
    .get('/get-income', getIncome)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expense', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .get('/get-expense-transactions', getExpenseTransactions)
    .get('/get-income-transactions', getIncomeTransactions)
    .post('/signup', signup)
    .post('/login', login)
    .get('/dashboard', isAuthorised)
    .get('/logout', logout)

module.exports = router