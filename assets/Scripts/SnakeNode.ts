// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DIRECTIONS, { DIRECTION } from "./DIRECTIONS";
import Snake from "./Snake";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SnakeNode extends cc.Component {
  facing: DIRECTION = DIRECTIONS.UP;

  public parent: Snake = null;
  private child: SnakeNode = null;

  public move() {
    this.node.x += this.facing.x * 10;
    this.node.y += this.facing.y * 10;
    this.child?.move();
  }

  public setChild(child: SnakeNode) {
    child.facing = this.facing;
    this.child = child;
  }

  public reface(direction: DIRECTION) {
    this.facing = direction;
    this.node.angle = this.getAngleByDirection(direction);
    setTimeout(() => {
      this.child?.reface(direction);
    }, 0.5 * 1000);
  }

  private getAngleByDirection(direction: DIRECTION): number {
    if (direction.x != 0) {
      return -(90 * direction.x);
    } else if (direction.y != 0) {
      return 180;
    }
  }
}
