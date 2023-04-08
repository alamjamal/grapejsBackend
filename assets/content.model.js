const mongoose = require('mongoose');
const { Schema } = mongoose;
import Pages from '../page/page.modal';

const Content = new mongoose.Schema(
  {
    pageId: {
      type: Schema.Types.ObjectId,
      ref: Pages,
    },
    content : {
        type : String
    }
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Content', Content );
