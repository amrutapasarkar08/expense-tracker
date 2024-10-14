
const UserSchema = require('../models/UserSchema')
const jwt = require('jsonwebtoken')


const SECRET_KEY = process.env.SECRET_KEY

exports.isAuthorised = (req, res) => {
    const token = req.cookies.token
   
    if (!token) {
        res.status(401).json({ message: 'UnAuthorised User' })
    }
    else {
        jwt.verify(token, SECRET_KEY, (error, decoded) => {
            if (error)
                res.status(500).json({ message: error })
            else
                res.status(200).json({ status:true, name: decoded.name })
        })
    }
}

exports.signup = async (req, res) => {
    const { name, email, password } = req.body
    const user = UserSchema({
        name,
        email,
        password
    })
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are mandatory' })
        }
        await user.save()
        res.status(200).json({ message: 'User Added Successfully' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are mandatory' })
        }
        const response = UserSchema.findOne({
            email: email
        }).then((response) => {
            if (response) {
                if (response.password == password) {
                    const name = response.name
                    const token = jwt.sign({ name }, SECRET_KEY, { expiresIn: '1d' })
                    res.cookie('token', token)
                    res.status(200).json({ message: 'Login Successful' })
                } else {
                    return res.status(400).json({ message: 'Please Enter valid password' })
                }
            } else {
                return res.status(400).json({ message: 'No user found' })
            }
        })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

exports.logout = (req, res) => {
    res.clearCookie('token')
    res.status(200).json({ message:'Logout done' })     
}
