const userModel = require('../models/authModel.js');

class UserController {

async createUser(req, res) {
const user = req.body;
try {
const newUser = await userModel.createUser(user);
res.status(200).json({ status:1 ,message: 'User Created Suuucccessfully!!!!' ,newUser});
} catch (error) {
res.status(500).json({ status:0, message: 'Internal Server Error' });
}
}


async getAllUsers(req, res) {
    try {
    const users = await userModel.getAllUsers();
    res.status(200).json({ status:1 ,message: 'getting All Created users Suuucccessfully!!!!' ,users});
    // res.json(users);
    } catch (error) {
    res.status(500).json({ status:0, message: 'Internal Server Error' });
    }
    }

    async updateUser(req, res) {
    // console.log("heloo");return;
        const { id } = req.params;
        // console.log(id);return;
        const user = req.body;
        try {
            // console.log("hello");return;
        const updatedUser = await userModel.updateUser(id,user);

        if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ status:1 ,message: 'Updated users Suuucccessfully!!!!' ,updatedUser});
        // res.json(updatedUser);
        } catch (error) {
        res.status(500).json({ status:0, message: 'Internal Server Error' });
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params;
        try {
        await userModel.deleteUser(id);
        res.status(200).json({ status:1 ,message: 'deleted users Suuucccessfully!!!!' ,deleteUser});
        // res.sendStatus(204);
        } catch (error) {
        res.status(500).json({ status:0, message:  'Internal Server Error' });
        }
        }
        
}
module.exports = new UserController();