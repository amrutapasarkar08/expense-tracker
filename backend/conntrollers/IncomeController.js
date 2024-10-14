const IncomeSchema = require("../models/IncomeSchema")

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body
    const income = IncomeSchema({
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
        await income.save()
        res.status(200).json({ message: 'Income added!' })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.getIncome = async (req, res) => {
    try {
        const incomeData = await IncomeSchema.find().sort({ createdAt: -1 })
        res.status(200).json(incomeData)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.deleteIncome = async (req, res) => {
    const { id } = req.params
    await IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: 'Income record deleted' })
        }).catch((error) => {
            res.status(500).json({ message: 'Server Error' })
        })
}

exports.getIncomeTransactions = async (req, res) => {
    const startDate = new Date(req.query.startDate)
    const endDate = new Date(req.query.endDate)
    try {
        const expenseTransactions = await IncomeSchema.find({createdAt:
            {$gte: startDate, 
                $lt:endDate}})
        res.status(200).json(expenseTransactions)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }    
}
