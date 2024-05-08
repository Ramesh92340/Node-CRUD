const  loginModel = require('../models/loginModel');
 class loginController {
    async register(req,res)
    {
        const user = req.body;
        try
        {
            const users = await loginModel.  register(user);
            // res.json(users);
            res.status(200).json({status:1 ,message:'user register successfully',users});
        }
        catch(error)
        {
            res.status(500).json({status:0 ,message:'user  not register '});

        }
    }

    async login(req,res)
    {
        const user = req.body;
        try
        {
            const users = await loginModel.login(user);
            // res.status(200).json({status:1 ,message:'user login successfully',users});
            // res.json(users);

            if (!users){
                return  res.status(404).json({status:0 ,message:'user not  found'});
              }
              else {
                  res.status(200).json({status:1 ,message:'user login ',users});
  
  
              }

        }
        catch(error)
        {
            res.status(500).json({status:0 ,message:'user  not login '});

        }
    }

}
module.exports = new loginController;