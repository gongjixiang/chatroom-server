const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    // this.cookie('theme', 'gray');
    // await this.session('ss', {a:1,b:'2'});
    // const sessionData = await this.session('ss')
    // console.log(sessionData);

    // const list = await this.model('room_message').select();
    // const data = await Promise.all(
    //   list.map(async (item) => {
    //     const userInfo = await this.model('users_profile')
    //       .where({ id: item.uid })
    //       .find();
    //     item['userInfo'] = { avatar: userInfo.avatar, name: userInfo.name };
    //     return item;
    //   })
    // );
    // return this.success(data);

    return this.success();
  }
};
