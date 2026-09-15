/**
 * Headless checks for the camp armoury.
 *
 * Buying, upgrading and refusing a purchase that the purse cannot cover
 * are the three things a shop can get wrong without anyone noticing in
 * a screenshot.
 */
import { Shop } from "../src/game/Shop.js";
import { WEAPONS, nextUpgrade, maxTier } from "../src/game/armory.js";

const errors = [];
const expect = (ok, message) => {
  if (!ok) errors.push(message);
};

function purse(gold) {
  return {
    bounty: gold,
    log: [],
    spend(amount, reason) {
      if (this.bounty < amount) return false;
      this.bounty -= amount;
      this.log.push(reason);
      return true;
    },
  };
}

const shop = new Shop();
expect(shop.isOwned("ashpiercer"), "the hunter does not start with the Ashpiercer");
expect(shop.equipped === "ashpiercer", "the Ashpiercer is not in the hand");
expect(shop.tierOf("ashpiercer") === 0, "the starter is not at its first tier");

const poor = purse(0);
expect(shop.buy("emberhail", poor).reason === "gold", "Emberhail sold for nothing");
expect(!shop.isOwned("emberhail"), "Emberhail was granted without gold");

const hunt = purse(3000);
const bought = shop.buy("emberhail", hunt);
expect(bought.ok, "could not buy Emberhail with 3000g");
expect(shop.isOwned("emberhail"), "buying Emberhail did not own it");
expect(shop.equipped === "emberhail", "buying a weapon did not put it in the hand");
expect(hunt.bounty === 3000 - WEAPONS.emberhail.cost, `purse is ${hunt.bounty} after the Emberhail`);

expect(shop.buy("emberhail", hunt).reason === "owned", "Emberhail sold a second time");

const first = shop.upgrade("emberhail", hunt);
expect(first.ok, "could not upgrade Emberhail");
expect(shop.tierOf("emberhail") === 1, `Emberhail is tier ${shop.tierOf("emberhail")} after one upgrade`);
expect(
  hunt.bounty === 3000 - WEAPONS.emberhail.cost - nextUpgrade(WEAPONS.emberhail, 0).cost,
  "upgrade did not take its price"
);

shop.upgrade("emberhail", hunt);
expect(shop.tierOf("emberhail") === maxTier(WEAPONS.emberhail), "could not reach the last Emberhail tier");
expect(shop.upgrade("emberhail", hunt).reason === "max", "upgraded past the last tier");

expect(shop.equip("ashpiercer").ok, "could not put the Ashpiercer back in the hand");
expect(shop.equipped === "ashpiercer", "equip did not stick");

const coil = shop.buy("widowcoil", hunt);
expect(coil.ok, "could not buy Widow's Coil");
const lance = shop.buy("hellharpoon", hunt);
expect(lance.ok, "could not buy the Hellharpoon");
expect(shop.equipped === "hellharpoon", "the last purchase was not equipped");

expect(shop.upgrade("widowcoil", hunt).reason === "unowned" || shop.isOwned("widowcoil"), "Widow's Coil vanished");

if (errors.length) {
  console.error(`Shop test failed:\n  ${errors.join("\n  ")}`);
  process.exit(1);
}
console.log("Shop test passed — four weapons, three tiers, gold actually spent.");
