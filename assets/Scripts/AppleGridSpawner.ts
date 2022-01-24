// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Apple from "./Apple";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AppleGridSpawner extends cc.Component {
  currentApple: cc.Node = null;

  @property(cc.Prefab)
  public applePrefab: cc.Prefab = null;

  start() {
    this.spawnAppleInARandomPlace();
  }

  public spawnAppleInARandomPlace() {
    const appleNode = cc.instantiate(this.applePrefab);
    const { width, height } = this.node;
    const destX = Math.ceil(Math.random() * (width / 2));
    const destY = Math.ceil(Math.random() * (height / 2));
    appleNode.x = destX - appleNode.width / 2;
    appleNode.y = destY - appleNode.height / 2;
    appleNode.zIndex = -100;
    appleNode.getComponent(Apple).mainGrid = this;
    this.node.addChild(appleNode);
  }

  // update (dt) {}
}
