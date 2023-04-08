const mongoose = require('mongoose');
const { Schema } = mongoose;

const Page = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    slug: {
      type: String,
      required: true,
    },

    content: Object,

    userName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
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

export default mongoose.model('Pages', Page);
