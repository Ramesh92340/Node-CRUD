const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const  loginRoute = require('./routes/loginRoute');
// const userRoutes = require('./routes/userRoutes');



app.use(bodyParser.json());

app.use('/api/users', loginRoute);



const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});