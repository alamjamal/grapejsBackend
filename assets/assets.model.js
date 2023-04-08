const mongoose = require('mongoose');
const { Schema } = mongoose;
import Pages from '../page/page.modal';

const Assets = new mongoose.Schema(
  {
    pageId: {
      type: Schema.Types.ObjectId,
      ref: Pages,
    },
    src: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default : 250
    },
    height: {
      type: String,
      default : 350
    },
    content : {
      type : [ String ]
    }
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Assets', Assets);
