// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import AppleGridSpawner from "./AppleGridSpawner";
import Snake from "./Snake";
import SnakeNode from "./SnakeNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Apple extends cc.Component {
  public mainGrid: AppleGridSpawner;

  private beEaten(snake: Snake) {
    snake.eatApple();
    this.node.destroy();
    this.mainGrid.spawnAppleInARandomPlace();
  }

  public onCollisionEnter(other: cc.BoxCollider, self: cc.BoxCollider) {
    const snake = other.node.getComponent(SnakeNode).parent;
    this.beEaten(snake);
  }
  // update (dt) {}
}
