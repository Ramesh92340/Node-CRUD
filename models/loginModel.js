const pool = require('../config/dbConFig');
const valid = require('../middlewere/userValidation');
class loginModel {
  async register(user) {
    const { id, name, email, phonenumber, password } = user;
    const isemail = valid.validateEmail(email);
    const ispassword = valid.validatePassword(password);
    const isphonenum = valid.validatePhoneNumber(phonenumber);
    const isname = valid.validateName(name);

    if (isemail) {

      if (ispassword) {

        if (isphonenum) {

          if (isname) {

            const query = 'INSERT INTO login(id,name,email,phonenumber,password) VALUES ($1,$2,$3,$4,$5) RETURNING *';
            const values = [id, name, email, phonenumber, password];
            const { rows } = await pool.query(query, values);
            return rows[0];


          }
          else {
            return { error: "invailed name formate...! " }
          }


        }
        else {
          return { error: "invailed phonenum " }
        }

      }
      else {
        return { error: "invailed password " }

      }

    }

    else {
      return { error: "invailed email " }
    }

  }

  async login(user) {
    const { email, password } = user;
    const isemail = valid.validateEmail(email);
    const ispassword = valid.validatePassword(password);

    if (isemail) {

      if (ispassword) {


        const query = 'select * from login where email=$1 and password=$2';
        const values = [email, password];
        const { rows } = await pool.query(query, values);
        if (rows) {
          return rows[0];
        }
        else {
          return null;
        }

      }

      else {
        return { error: "invailed password " }

      }

    }

    else {
      return { error: "invailed email " }
    }

  }
}
module.exports = new loginModel;