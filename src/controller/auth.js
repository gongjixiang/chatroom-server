const Base = require('./base.js');
const SALT = 'jixiang';

module.exports = class extends Base {
  async loginAction() {
    //登录验证
    //获取前端提交过来的用户名，并定义一个常量存储它
    const account = this.post('account');
    //获取前端提交过来的密码，并定义一个常量存储它
    const password = this.post('password');
    //对用户名进行验证
    const admin = await this.model('users').where({ account }).find();
    if (think.isEmpty(admin)) {
      return this.fail(401, '用户名不正确');
    }
    //对用户密码进行验证
    if (think.md5(password + '' + SALT) !== admin.password) {
      return this.fail(401, '用户密码错误');
    }

    //实例化一个tokenservice对象，来调用create()方法创建一个token
    const TokenService = this.service('token');
    const token = await TokenService.create({
      id: admin.id //payload
    });
    //判断token是否创建成功
    if (think.isEmpty(token)) {
      return this.fail('用户登录失败');
    }
    //令牌创建成功，返回给客户端"uerInfo"和"token"给前端
    const userInfo = {
      id: admin.id,
      account: admin.account
    };
    return this.json({
      token: token,
      userInfo: userInfo
    });
  }

  async registerAction() {
    const account = this.post('account');
    const password = this.post('password');
    const isEmpty = think.isEmpty(
      await this.model('users').where({ account }).find()
    );

    if (!isEmpty) {
      return this.fail('用户名已存在');
    }
    //注册完成，写入数据
    const userId = await this.model('users').add({
      account,
      password: think.md5(password + '' + SALT)
    });

    const TokenSerivce = this.service('token');
    const sessionKey = await TokenSerivce.create({ userId });

    if (think.isEmpty(sessionKey)) {
      return this.fail('生成 token 失败');
    }

    return this.json({ token: sessionKey, userInfo: { account, userId } });
  }
};
