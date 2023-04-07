const mongoose = require('mongoose');
const { Schema } = mongoose;


const User = new mongoose.Schema(
    {
      userName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
      },
      websiteName: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        
      },
      industry: {
        type: String,
      },
      type: {
        type: String,
      },

    },
    {
      timestamps: true,
    },
  );
  
  export default mongoose.model('User', User);
