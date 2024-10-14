const ExpenseSchema = require("../models/ExpenseSchema");
require('moment');

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body
    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try {
        if (!title || !category || !description) {
            return res.status(400).json({ message: 'All fields are mandatory!' })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount should be positive number!' })
        }
        await expense.save()
        res.status(200).json({ message: 'Expense added!' })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.getExpense = async (req, res) => {
    try {
        const expenseData = await ExpenseSchema.find().sort({ createdAt: -1 })
        res.status(200).json(expenseData)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params
    await ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({ message: 'Expense record deleted' })
        }).catch((error) => {
            res.status(500).json({ message: 'Server Error' })
        })
}

exports.getExpenseTransactions = async (req, res) => {
    const startDate = new Date(req.query.startDate)
    const endDate = new Date(req.query.endDate)
    try {
        const expenseTransactions = await ExpenseSchema.find({createdAt:
            {$gte: startDate, 
                $lt:endDate}})
        res.status(200).json(expenseTransactions)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }    
}
