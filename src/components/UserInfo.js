export default class UserInfo{
  constructor({title, subtitle, userAvatar}) {
    this._titleSelector = title;
    this._subtitleSelector = subtitle;
    this._avatarSelector = userAvatar;

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

  setUserAvatar(data){
    this._avatarSelector.src = data.avatar;
  }
}
