const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  
  addPotion(newPotion) {
   const potion = this.potions;
    if (potion.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    potion.push(newPotion);
  },


  addPotion(newPotion) {
    for (const potion of this.potions) {
    if (potion.name === newPotion.name) {
      return Error! Potion ${newPotion.name} is already in your inventory!;
    }
    }
    this.potions.push(newPotion);
  },



  removePotion(potionName) {
  
    const potion = this.potions;

  for (let i = 0; i < potion.length; i +=1) {
  if (potionName === potion.name) {
    const pot = potion[i]
    potion.splice(i, 1);
  }
  return `Potion ${potionName} is not in inventory!`;
}
  },


  updatePotionName(oldName, newName) {
    const potion = this.potions;
    const potionIndex = potion.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    potion.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};


console.table(atTheOldToad.removePotion("Speed potion"));

