# Forwarning

> I'm in the middle of working on like three different things for this game so docs are very minimal rn.

# Cards

You can modify already made cards with the [WaldoPatcher](https://github.com/MiMLoader/Waldo) (now built into MiMLoader) using the Card class.

> You dont *have* to intsall the waldo packages as its mainly type definitions and the loader will deal with it for you.

`bun add github:mimloader/waldo # with bun`

`npm install https://github.com/mimloader/waldo # with npm`


```js
import { Card } from "waldo";

export const card = new Card({
  name: "Bash",
});
```

Every card propertiy can be edited!

## Custom Cards

Its the same principal as editing normal Cards but now we use the `custom:true` prop so the WaldoPatcher can assign the new mod to a custom slot. There are 20 custom slots in the game so going over this will cause an error.

```js
import { Card } from "waldo";

export const card = new Card({
  name: "Super Cool Custom",
  custom: true
});
```
