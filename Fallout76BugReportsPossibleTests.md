Player report:  
Pack Rat perk card not working, junk weight remains the same after equipping. Similar perks such as Scattershot and Sturdy Frame still working as they did prior to the patch.

white box, functional testing 

* a functional test of each card and preferably each level of the card to see if they do the desired effect.

  * start game with no perk cards equipped.  
  * equip one card  
  * check if card effect does what it states.  
  * unequip card  
  * check if effect is removed.  
  * repeat for other cards.  
---
Player report:  
Another weird glitch. On PC using controller I do not have the button prompt to use an item. Stash, cooking, sitting, bed, nothing just blank. But if I turn off my controller everything is normal. LOL  

white box, functional testing  

* a functional test of each variation of having the controller plugged it would probably lead to the actual bug.  

  * plug in controller while pc is off. 
  * skip to starting game 
  * check if prompts are coming up at all.
  * 
  * start pc without controller plugged in 
  * plug in controller
  * start game
  * check if prompts are coming up.
  * 
  * with controller unplugged skip to starting game
  * once in game plug in controller 
  * check if prompts are coming up
  ---
  
Player report:  
Can we buff pain train? I would like to see more ragdoll when I have max rank. Right now it literally lightly stuns them and does minor damage to anything above level like 15. I don't think it's very useful for the level you have to be to be able to unlock it. Right now it's still fun for just sprinting through a low level area, but only that.  

black box, balance testing or acceptance testing  

* as the player stated its just not fun to use and feel useless. having other players input and play test this would be beneficial to see if it’s a single person’s opinion or the majority. By checking every 5 levels it can be better balanced by level than just to have the card be useless at 15.

  * start game with the pain train card 
  * fight the same type of enemy at increments of 5 with card equipped.
  * repeat until level max for enemies.
  ---
Player report:
The bug with the power armor chassis seems to be resolved, but now when I try to craft the excavator power armor (for the quest miner miracles) at a station in my own camp, there's a slight pause & then it says someone else is using the station. I tried closing the game and trying again but the problem persists.

black box, functional or negative testing

* my first thought is a functional test as it’s just not working. But I have a feeling its because the designer did not think the player would use their own station at the camp but one in the world.  So, this brings me to a negative test to see if doing it the unintended way is the reason for the bug. 

  * start the quest miners’ miracles
  * try crafting the required armor at a personal camp.
  * 
  * start the quest miners’ miracles 
  * try crafting the required armor at a world crafting station not a personal camp one.
  ---
Player report:
Issue, the government supply drop crate followed me the entire game.
So I was playing, and suddenly hear the flare sound for the supply drop to my left. I spin around and there’s a government supply drop crate. I figure a bot dropped it, so I check it. It just shows an infinite loading arrow, so I wait but then just give up. Continue down the road 5 minutes, and boom. There’s the crate again, I check and leave it. 5 more minutes, crate drops again, and continues to drop every where I go. I fast travel, and as soon as I materialize, the crate drops. It’s followed me the entire game. Including dropping inside my camp structure.

black box, negative testing

* I believe intentionally breaking the supply drop to not load the loot correctly, probably by having no loot in it, would lead to the bug. 

  * give bad information to supply drop so it cannot be looted correctly.
  * play until a supply drop is given to player.
  * if supply drop doesn’t load try fast traveling. if it does have loot restart at step one.
  * see if supply drop spawns directly after loading 
  * check if supply drop still is broken.
 
