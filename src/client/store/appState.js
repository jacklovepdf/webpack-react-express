/**
 * Created by chengyong.lin on 18/1/7.
 */
import {
  observable,
  computed,
  action,
} from 'mobx'

class AppState {
  @observable count = 0;
  @observable name = 'jacklovepdf';
  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }
  @action add() {
    this.count += 1
  }
}
const appState = new AppState();
export default appState;
