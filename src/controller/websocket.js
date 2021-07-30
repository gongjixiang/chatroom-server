module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }
  openAction() {
    console.log('ws connected');
    return this.success();
  }

  closeAction() {
    console.log('ws closed');
    return this.success();
  }

  joinAction() {}

  leaveAction() {}

  messageAction() {
    this.broadcast('message', this.wsData);
    return this.success();
  }
};
