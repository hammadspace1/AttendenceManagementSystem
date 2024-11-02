const Admin = require('../Models/Admin.model');

const AdminLogin = async (req, res) => {
    const {email, password} = req.body.adminData;

    try {
        const result = await Admin.find({email: email, password: password});

        if(result.length > 0){
            res.json({msg: "Login Successfully!", d: result})
        }else{
            res.json({msg: "Invalid Email or Password!"})
        }
    } catch (error) {
        console.log(error)
    }
}

const AdminUpdate = async (req, res) => {
    const {email, newPassword} = req.body;

    try {
        const filter = {email: email};
        const update = {password: newPassword}

        const data = await Admin.findOneAndUpdate(filter, update)

        if(data.password === newPassword){
            res.json({msg: "Password Updated Successfully!"})
        }else{
            res.json({msg: "Password is not Updated!"})
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {AdminLogin,AdminUpdate};