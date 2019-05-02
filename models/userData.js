const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		name: String,
		username: String,
		email: String,
		fCity: String,
		date: {
			type: Date,
			default: Date.now
		}
	}
);

const UserData = mongoose.model('User', UserSchema);
module.exports = UserData;  