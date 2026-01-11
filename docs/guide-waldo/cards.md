---
sidebar_position: 2
---

# Cards

## Modifying Cards

> References: [Class](https://github.com/MiMLoader/Waldo/blob/main/src/card.ts), [Type Definitions](https://github.com/MiMLoader/Waldo/blob/main/types/card.d.ts)

To modify already existing cards we can use the `Card` class.

```js title="bash.js"
import { Card } from "@mimloader/waldo";

export default new Card({
  name: "Bash",
  EN: "Bashv2{desc}Super cool bash that does {dmg} damage",
  damage: "Fire*1000",
});
```

This takes the `Bash` Card and edits its damage. Now it will do Fire based damage rather than Armor damage and 1000 damage points.
It also changes the english description of the card. Look at [placeholders](./placeholders.md) to see how \{desc\} and \{dmg\} work.


## Custom Cards

To create custom cards we can use the `Card` class.
```js title="custom-sabotage.js"
import { Card } from "@mimloader/waldo";

export default new Card({
  name: "Sabotage",
  custom: true,
  EN: "Sabotage{desc}Deals {dmg} fire damage to your spirit (poor thing)",
  damage: "Fire*20",
  target: "self"
});
```

Why you would want to make a card that hurts your own spirit I don't know but this custom card will do the trick!

<video src="https://cdn.mimloader.com/sabotage.mp4" width="320" height="240" controls></video>
Hopstraw and Pappus Sabotaging themselves. (This is just overwriting the bash mod so I can get it to show up in the game early)
![](https://cdn.mimloader.com/sabotage.mp4)

## All Card Properties

Check out the References: [Class](https://github.com/MiMLoader/Waldo/blob/main/src/card.ts), [Type Definitions](https://github.com/MiMLoader/Waldo/blob/main/types/card.d.ts) for the raw props or this list of them all:

```js title="Bash Card Example"
import { Card } from "@mimloader/waldo";

export default new Card({
  name: "Bash",
  type: "Skill",
  stat: "speed",
  multiplier: 0.5,
  element: "None",
  target: "opponent",
  playerCost: 1,
  rarity: 1,
  EN: "Bash{desc}Reduce target's Armor by {dmg}.",
  damage: "Armor",
  condition: undefined,
  upgradeable: 0,
  AI: 1,
  weight: 1,
  exhaust: 0,
  retain: 0,
  armor: 0,
  gfx: "hit",
  draw: undefined,
  energyGain: undefined,
  FR: "Impact{desc}Réduit l'armure de la cible de {dmg}.",
  DE: "Hieb{desc}Senke die Rüstung des Ziels um {dmg}.",
  ES: "Aporrear{desc}Reduce {dmg} punto(s) la Armadura del objetivo.",
  BR: "Golpear{desc}Reduz a Armadura do alvo em {dmg}.",
  CN: "猛击{desc}使目标的防御降低{dmg}。",
  JP: "なぐる{desc}ターゲットのアーマーを{dmg}減らす。",
  RU: "Таран{desc}Снимает {dmg} брони",
});
```
