const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const fitSchema = new mongoose.Schema({
    cibles: { type: String, required: true },
    exercice: { type: String, required: false },
    frozen: { type: Boolean, required: false },
    serie: { type: String, required: false },
    detail: { type: String, required: false },
});

restoSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Fit', fitSchema);