// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DIRECTIONS, { DIRECTION } from "./DIRECTIONS";
import SnakeNode from "./SnakeNode";

const { ccclass, property } = cc._decorator;

console.log(cc.resources);

@ccclass
export default class Snake extends cc.Component {
  @property(cc.Prefab)
  private headPrefab: cc.Prefab = null;

  @property(cc.Prefab)
  private bodyPrefab: cc.Prefab = null;

  private bodyNodes: SnakeNode[] = [];

  @property(Number)
  public movePerTime: number = 0.5;

  private moveAux: number = 0;

  private facing: DIRECTION = DIRECTIONS.UP;

  start() {
    this.buildSnake();
  }

  private buildSnake() {
    const newHead = cc.instantiate(this.headPrefab);
    newHead.x = 0;
    newHead.y = 0;
    this.node.addChild(newHead);
    newHead.getComponent(SnakeNode).parent = this;
    this.bodyNodes.push(newHead.getComponent(SnakeNode));
  }

  public eatApple() {
    this.addBodyNodeToSnake();
  }

  private addBodyNodeToSnake() {
    const newBody = cc.instantiate(this.bodyPrefab);
    this.bodyNodes[this.bodyNodes.length - 1].setChild(
      newBody.getComponent(SnakeNode)
    );
    newBody.getComponent(SnakeNode).parent = this;
    this.bodyNodes.push(newBody.getComponent(SnakeNode));
    newBody.zIndex -= 1;
    newBody.x = newBody.getComponent(SnakeNode).facing.x * newBody.width;
    newBody.y = newBody.getComponent(SnakeNode).facing.y * newBody.height;
    if (newBody.getComponent(SnakeNode).facing.x != 0) {
      newBody.x -= this.bodyNodes.length * newBody.width;
    }
    if (newBody.getComponent(SnakeNode).facing.y != 0) {
      newBody.y -= this.bodyNodes.length * newBody.height;
    }
  }

  public move() {
    this.bodyNodes[0]?.move();
  }

  public reface(direction: DIRECTION) {
    this.bodyNodes[0]?.reface(direction);
  }

  update(dt) {
    if (this.moveAux <= this.movePerTime) {
      this.moveAux += dt;
    } else {
      this.move();
      this.moveAux = 0;
    }
  }
}
