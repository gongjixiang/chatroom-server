const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const message = this.model('room_message');
    const data = await message.select();
    return this.success(data);
  }
};
