export default class UserInfo{
  constructor({title, subtitle}) {
    this._titleSelector = title;
    this._subtitleSelector = subtitle;

  }

  getUserInfo(){
    const data = {};
    data.nameSelector = this._titleSelector.textContent;
    data.jobSelector = this._subtitleSelector.textContent;
    return data;
  }

  setUserInfo(data){
     this._titleSelector.textContent = data.name;
     this._subtitleSelector.textContent = data.job;
  }
}
