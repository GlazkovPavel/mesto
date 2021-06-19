export default class UserInfo{
  constructor({title, subtitle}, {nameInput, jobInput}) {
    this._titleSelector = title;
    this._subtitleSelector = subtitle;
    this._nameSelector = nameInput;
    this._jobSelector = jobInput;

  }

  getUserInfo(){
    this._nameSelector.value = this._titleSelector.textContent;
    this._jobSelector.value = this._subtitleSelector.textContent;
  }

  setUserInfo(data){
     this._titleSelector.textContent = data.name;
     this._subtitleSelector.textContent = data.job;
  }

}
