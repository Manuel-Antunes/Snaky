// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Snake from "./Snake";

const { ccclass, property } = cc._decorator;

@ccclass
export default abstract class Controller extends cc.Component {
  onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  }

  protected abstract onKeyUp(event: cc.Event.EventKeyboard): void;
  protected abstract onKeyDown(event: cc.Event.EventKeyboard): void;
}
