module.exports = class extends think.Controller {
  async __before() {
    this.header('Access-Control-Allow-Origin', '*');

    // 根据token值获取用户id
    // this.ctx.state.token = this.ctx.header['token'] || '';
    // const tokenSerivce = think.service('token');
    // this.ctx.state.userId = await tokenSerivce.getUserId(this.ctx.state.token);

    // const publicController = this.config('publicController');
    // const publicAction = this.config('publicAction');
    // // 如果为非公开，则验证用户是否登录
    // const controllerAction = this.ctx.controller + '/' + this.ctx.action;
    // if (
    //   !publicController.includes(this.ctx.controller) &&
    //   !publicAction.includes(controllerAction)
    // ) {
    //   if (this.ctx.state.userId <= 0) {
    //     return this.fail(401, '请先登录');
    //   }
    // }
  }
};
