// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Controller from "./Controller";
import DIRECTIONS from "./DIRECTIONS";
import Snake from "./Snake";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SnakeController extends Controller {
  @property(Snake)
  public Snake: Snake = null;
  protected onKeyUp(event: cc.Event.EventKeyboard): void {
    switch (event.keyCode) {
      case cc.macro.KEY.up:
        this.Snake.reface(DIRECTIONS.UP);
        break;
      case cc.macro.KEY.down:
        this.Snake.reface(DIRECTIONS.DOWN);
        break;
      case cc.macro.KEY.left:
        this.Snake.reface(DIRECTIONS.LEFT);
        break;
      case cc.macro.KEY.right:
        this.Snake.reface(DIRECTIONS.RIGHT);
        break;
    }
  }
  protected onKeyDown(event: cc.Event.EventKeyboard): void {}
}
