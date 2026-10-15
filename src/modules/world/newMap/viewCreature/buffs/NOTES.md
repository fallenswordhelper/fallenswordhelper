# Combat Evaluator Notes

Some buffs change the effective stats for every hit while others either have a chance to activate or change values on each hit. Empiracle analysis is possible, but I'm sure I can find a better method.

Most all the buffs that ALWAYS add to stats are included already. But some work in other ways.

Base Stat Modifiers
These are the easiest to implement
- [DONE] Terrorize: -0.1% per point to enemy Damage
- [DONE] Super Elite Slayer: +0.2% per point reduction to Super Elite Creature Damage, Attack, Defense and Armor
- [DONE] Holy Flame: +0.2% per point to Damage vs. Undead
- [DONE] Anchored: +0.05% per point Damage is added to HP during combat
- [DONE] Chi strike: 0.1% per point of your HP is added to your Damage during combat
- [DONE] Death Dealer: +0.01% extra Damage per point per 5 Creature kills in a row without dying (Max 20%)
- [DONE] Dark Curse: +0.2% reduction per point to enemy Defense
- [DONE] Counter Attack: +0.25% per point to Attack and Damage at the cost of +0.25% per point Stamina (PvE only, casting level can be adjusted from your Preferences)


Probability Buffs:
(Anythign with ?? means I don't know if it is applied to profile stats)
- Absorb: +0.1% chance per point to absorb 25% of incoming Damage
- Ageless: 0.2% chance per point that your HP is doubled at the start of combat
- Allied Frenzy: Increases the level range that Assist works by +1 level per point
- Armored Strike: 0.05% chance per point that your Damage is doubled, but your Armor stat is reduced to 0 (PvE only)
- Assist: +0.05% chance per point that an ally, up to 25 levels above you (+1 level per point), assists you in combat vs. Creatures. Ally adds 50% of their Attack, Defense, Damage, Armor and Health
- Block: +0.01% chance that a player will take 0 damage in a combat round
- Blood Thirst: +0.2% chance, per point, to drain 5% enemy HP per combat turn
- Death Wish: +0.03% chance per point to instantly kill vs Creatures (PvE only, excludes Super Elites)
- Demoralize: 0.25% chance per point to half enemy enhancement levels during combat if you initiated
- Dispel Curse: 0.1% chance per point that Dark Curse will not work against you (PvP only)
- Distraction: 0.05% chance per point to inflict double Damage per combat round. 0.2% chance per point to obtain no Gold (PvE only)
- Flinch: -0.1% per point to enemy Attack
- Force Shield: +0.1% chance per point to reduce incoming Damage to 1
- Gambler: +0.1% chance per point that a random stat will be tripled while all other stats are halved at the start of combat
- Golden Shield: 0.05% chance per point to double your Armor and Defense at the start of combat
- Healer: +0.01% per point chance that your health will fully restore after any given combat round
- High Guard: 0.05% chance per point that your Attack stat is added to your Defense and your Damage stat is added to your Armor
- Ignite: +0.1% chance per point that enemy ignites. Burning foes take up to 10% bonus Damage
- Mesmerize: 0.1% chance per point to reduce Creature Armor and Defense by 50%
- Poison: 0.1% chance per point to poison your opponent. Successful attacks will then deal up to 20% bonus Damage
- Savagery: 0.05% chance per point that your Defense stat is added to your Attack and your Armor stat is added to your Damage
- Shatter Armor: +0.05% chance per point to reduce enemy Armor by 50%
- Shield Strike: 0.1% chance per point that your Damage is doubled, but your Defense stat reduces to 0
- Shockwave: +0.1% chance per point that your enemy forfeits their next combat turn
- Spectral Knight: 0.1% chance per point to reduce enemy armor by 100% (PvE only)
- Stalwart Heart: +0.03% per point boost to Armor each time your opponent hits you (Max 5)
- Stun: +0.1% chance, per point, to half opponents chance to hit
- Wither: +0.2% per point chance to reduce enemy HP by 50% at combat start

Other Buffs:
- Avenger: +0.03% per point boost to Attack each time your opponent hits you (Max 5)
- Bastion: +0.2% per point to the maximum percentage (above 100%) of the Protection enhancement
- Critical Strike: +0.1% per point to the maximum percentage (above 100%) of the Critical Hit
- Nullify: +0.2% per point to the maximum percentage (above 100%) of the Nullify enhancement
- Defensive Aura: +0.05% per point of every item's Attack stat is added to your Defense (??)
- Dull Edge: -0.4% per point to the Piercing Strike enhancement of Creatures
- Fumble: 0.1% per point reduction to attacker's Attack when successfully defending (PvP only, excludes Relic Combat, Max Level 175)
- Guild Berserker: Increase the enhancement level of First Strike, Nullify and Breaker by 0.01% per point in Guild Conflicts only
- Fortitude: 0.1% per point of your Defense stat is added to your HP (??)
- Hardened: 0.05% chance per point to prevent your opponent from activating Shatter Armor
- Heavy Weight: +0.025% per point to Damage during combat if you are carrying Gold to the amount of 2,500 multiplied by your level (??)
- Invert: 0.2% chance per point that opponent's Armor and Defense stats are switched (PvP only)
- Layered Armor: +0.05% per point of every item's Damage stat is added to your Armor (??)
- Necrosis: 0.1% chance per point that the enemy will become Undead at the start of combat (PvE Only)
- Reaper's Lantern: Reduces the opponent’s max HP by 0.05% per point each time you land a successful hit (Activates a maximum of 3 times)
- Reckoning: 0.2% chance per point that a random skill level will be doubled when you initiate the combat (excludes Doubler, Summon Shield Imp, Counter Attack and Global Booster)
- Reflection: 0.2% per point of opponents inflicted Damage is added to your next combat strike
- Reign of Terror: 0.1% per point reduction to relic defender's Armor and Defense (only applies to Group Leader)
- Sealed: 0.2% chance per point to negate 2 combat-specific Buffs during combat (PvP only, excludes Relic Combat)
- Smite: -0.1% per point to attacking enemy's Armor (PvP only)
- Warcry: +0.1% per point increase in group member stats while active (excludes the Group Leader) (??)
