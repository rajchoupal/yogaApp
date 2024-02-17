const Class = require('../models/Class');

exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        res.json(classes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
