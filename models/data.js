const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

const Counter = mongoose.model('counter', counterSchema);

const dataSchema = new Schema({
    id: { type: Number, unique: true },
    quote_text: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    language: { type: String, required: true },
    date_added: { type: Date, required: true },
    popularity_score: { type: Number, required: true },
    tags: { type: [String], required: true },
    source: { type: String }
});

dataSchema.pre('save', async function (next) {
    const doc = this;
    
    if (doc.isNew) {
        try {
            const counter = await Counter.findByIdAndUpdate(
                { _id: 'data_id' },
                { $inc: { seq: 1 } },
                { new: true, upsert: true }
            );
            doc.id = counter.seq;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

const Data = mongoose.model('data', dataSchema, 'data');

module.exports = Data;
