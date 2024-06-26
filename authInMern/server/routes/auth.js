const router = require("express").Router();
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password!" });

        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );
        if (!validPassword){
            return res.status(401).send({ message: "Invalid Email or Password!" });}

        // You can now use the date and address from the request body to update the user
        user.date = req.body.date;
        user.address = req.body.address;

        // Save the updated user to the database
        await user.save();

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "Logged in successfully." });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error!" });
    }
});

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
        date: Joi.date().required().label("Date"),
        address: Joi.string().required().label("Address")
    });
    return schema.validate(data);
};

module.exports = {User , validate};
module.exports = router;
