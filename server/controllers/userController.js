const User = require("../models/userModel");

exports.userRegister = async (req, res)=> {
  console.log(req.body);

  try {
    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address
    });

  await newUser.save();

  res.send("form submitted");

} catch (error) {
  res.send(error.message);

}
}
