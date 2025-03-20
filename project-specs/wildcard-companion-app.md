# Wildcard Companion App: Fantasy Arena - Design Document

The Wildcard Companion App: Fantasy Arena is a web mobile-based application that integrates Wildcard's Web2 gameplay with Web3 functionalities, including $WC tokens and Thousands.tv. The app introduces fantasy sports mechanics where users can build teams, strategize based on in-game conditions, and earn rewards.

## User Registration & Profile

- Users sign up via email, social login, or Web3 wallet authentication.
- Profile dashboard displaying:
    - Current team setup
    - House affiliation
    - Fantasy league standing
    - Earned $WC tokens
    - Trading and marketplace access

## Fantasy League

- Players accumulate points based on the performance of their selected team.
- **Fantasy Point System:** Points are awarded based on real-match performances of the chosen summons and champions.
- Daily, Weekly and seasonal leaderboards determine top players.
- Rewards include:
    - $WC tokens
    - NFTs
    - In Game Rewards
        - Banners
        - Icons
        - Titles
        - Summon Skins

## Fantasy Draft System

- Users draft a team consisting of:
    - 1 Champion
    - 10 Summons
- Champions and summons have unique stats that affect performance.
- Summons can be traded at any time between players collection
- A roster can be changed once per week
- **Mana Cap System:** Each summon has a mana cost, and players must stay within a set cap to prevent overpowered teams. The league will set the mana cap.
- **Summon Acquisition:**
    - New players start with basic summons.
    - Summons can be earned through gameplay, bought in packs, or traded on the marketplace.

## Fantasy Scoring System

- **Performance-Based Scoring:**
    - Summon and champion fantasy scores are derived from real Wildcard matches played by the general public.
    - Key performance metrics:
        - **Wins/Losses:** Higher bonuses for winning teams.
        - **Champion KOs:** Summons that assist in taking down champions receive points.
        - **Summon KOs:** Summons earn points for eliminating other summons.
        - **Goalie Damage:** Points awarded for damage dealt to the goalie.
        - **Shield Damage:** Players earn points for damaging the shield.
- **Summon Modifiers:**
    - Summon-specific traits modify how fantasy points are calculated.
    - Example: "Gorrit #1" might have a *weather immunity* trait and a *score multiplier* of 0.25, adjusting its final points tally.
- **Weekly Fantasy Adjustments Based on Wildcard Meta**
    - The Fantasy App **analyzes real Wildcard gameplay trends** and applies weekly updates:
        - If a summon is **overperforming in Wildcard**, its **fantasy scoring formula adjusts slightly** for balance.
        - If a summon is **underutilized**, it may receive a **temporary bonus to encourage usage.**
    - Why this matter:
        - **Adds strategic depth**—players must think about how their Wildcard matches impact their Fantasy team.
        - **Keeps the meta fresh**—fantasy summons evolve as Wildcard gameplay shifts.
        - **Rewards skilled players**—those who perform well in Wildcard get better tools in Fantasy.
- **Summon Economy & Trade Balance**
    - **Summon Rental System:** Allow users to **rent out their summons** for fantasy use, creating a player-driven economy.
    - **Daily or Weekly Free Summons:** Introduce **rotating "free to use" summons** so new players can engage without large investments.

## Summon Traits

Each summon has a set of traits that influence its fantasy performance. These traits are rolled each time a player gets a summon from a pack or unlocked from the game.

- **Elemental Affinity:** Affects performance in different weather conditions.
- **Aggressive/Defensive Nature:** Bonuses or penalties depending on playstyle.
- **Endurance:** Summons with higher endurance earn more points for surviving longer.
- **Supportive Abilities:** Healers or defensive summons earn fantasy points based on assists and protective actions.
- **Unique Multipliers:** Certain rare summons may have point bonuses or penalties to balance fairness.

### Minor Traits (Level 3 Unlocks)

These provide small but meaningful boosts to a summon's fantasy performance.

1. **Fast Learner** – Gains +2% bonus fantasy points per match played.
2. **Early Starter** – +5% bonus if the summon gets a KO within the first 30 seconds.
3. **Resilient** – +3% bonus for surviving longer than 75% of the match.
4. **Opportunist** – +5% bonus if the summon lands the final hit on a shield.
5. **Pack Fighter** – +5% bonus if attacking alongside another summon.
6. **Assister** – +3% bonus for each assist provided.
7. **Precision Striker** – +3% bonus for hitting champions.
8. **Goalie Disruptor** – +4% bonus when damaging the goalie.
9. **Momentum Builder** – +5% points if the summon gets two KOs in quick succession.
10. **Elemental Affinity** – +5% bonus in favorable weather conditions.
11. **Quick Reflexes** – +3% bonus if dodging within one second of an attack.
12. **Adaptive** – Gains +2% bonus in random matches.
13. **Shield Breaker (Minor)** – +3% points for contributing to shield damage.
14. **Surprise Attack** – +4% bonus when attacking from behind.
15. **Safe Hands** – +3% points for defending an ally summon.
16. **Battle Hardened** – +2% reduction in penalties from losing a match.
17. **Efficiency Expert** – +5% bonus if the summon deals above-average damage.
18. **Focused** – +3% bonus if landing three consecutive hits.
19. **Lone Wolf** – +4% bonus when fighting without nearby allies.
20. **Comeback Specialist** – +5% bonus if contributing while the team is losing.

### Major Traits (Level 5 Unlocks)

These are powerful traits that significantly impact a summon's fantasy potential.

1. **Weather Immune** – Summon ignores negative weather effects.
2. **Legendary Resilience** – +10% fantasy points if surviving the entire match.
3. **Champion Slayer** – +15% bonus for landing the final hit on a champion.
4. **Ultimate Assist** – +10% bonus when assisting a champion KO.
5. **Summon Eliminator** – +10% fantasy points for KO'ing another summon.
6. **Domination Streak** – +20% bonus if the summon achieves three KOs in a single match.
7. **Unbreakable** – If the summon takes more than 50% damage and survives, gain +10% fantasy points.
8. **Elemental Mastery** – +15% fantasy points when playing in favorable weather.
9. **Fearless** – +12% bonus when attacking enemies with higher HP.
10. **Shield Crusher** – +15% bonus for dealing significant shield damage.
11. **Focused Striker** – +10% for landing three or more consecutive direct hits.
12. **Perfect Timing** – +15% if the summon delivers the final hit before the goal is scored.
13. **Overtime Warrior** – +20% points if the match goes into overtime.
14. **Tactical Genius** – +15% bonus if contributing to multiple team plays.
15. **Firestarter** – +10% bonus if starting an attack combo.
16. **Hard to Kill** – +10% bonus if the summon avoids being KO'd the entire match.
17. **Final Blow** – +20% bonus if the summon scores the match-winning attack.
18. **Team Anchor** – +15% bonus if the summon is on a winning team.
19. **Lucky Strike** – Random +10-15% fantasy point boost at the end of a match.
20. **Wildcard Phenomenon** – Summon gets a **unique bonus trait per week**, randomly assigned.

## Summons

- **Named Summons (e.g., Gorrit):** Core creatures exist but vary in traits and rarity.
- **Unique Summon:**
    - Each summon has different power levels, abilities, and rarities.
    - Limited-edition versions with unique traits and numbered editions.
- **Trading System:** Players can buy, sell, or trade summons using $WC tokens

## Wildcard Game Connection

- **Earning Summons**
    - Each time a pack is opened if the summon is new it will unlock for the player in the fantasy app as well.
        - When unlocked in the fantasy app it will role the traits for the summon
    - Each duplicate card that a player gets from a pack will give the player a reroll for that summon in the fantasy app. This allows the player to roll for different traits if they wish.
    - When a summon reaches level 3 and 5 in game a minor and major trait will be rolled for that Named summon in the fantasy app.
- **Weather Conditions:**
    - Each match features dynamic weather affecting gameplay (e.g., rain reduces fire summons' effectiveness, storm boosts electric summons).
    - These can update daily and or per arena to change how fantasy points are earned
    - We can put a simple effect in game based on the weather in each arena
        - These do not have to have gameplay effects just the tie to the web 3
- **Fantasy Point System**
    - Points are awarded based on real-match performances of the chosen summons and champions.
    - Every game that is played send an API to the app to update all fantasy league info.
- **Rewards**
    - Leagues can give players in game rewards

## $WC Token

- Players earn $WC tokens by:
    - Winning fantasy challenges.
    - Being placed in fantasy leagues.
    - Trading summons on the marketplace.
- Summon trading is done through an auction system or direct trades.

## Other Monetization

- **NFT Summon Packs:** Players can purchase summon packs with $WC.
- **Subscription Model:** Premium features for fantasy tracking & analytics.
- **Event-Based Purchases:** Special events require ticket purchases.

## Thousands Connection

**Live Fantasy Draft & Real-Time Adjustments**

- **Live Pick System:** Viewers on Thousands.tv can draft **temporary summons** for live matches using their $WC tokens. They get rewarded based on real-time performance.
- **Adaptive Lineups:** Viewers can swap summons **mid-match** (e.g., if a summon is underperforming) by spending $WC or earning interaction points.
- **Quick Bets & Predictions:** Viewers predict outcomes like "First Summon KO" or "Most Damage to Goalie" for extra points.

**Fantasy Bonuses Based on Viewer Spending**

- **Summon Boosts:** Viewers can **"power up"** selected summons, increasing their fantasy point potential in that match.
- **Weather Votes:** Viewers can vote on upcoming **weather conditions** in a match, affecting their fantasy team.
- **Cheer Multiplier:** If a summon receives enough cheers, they get **temporary stat boosts**, affecting their fantasy performance.

**Event-Based Fantasy Challenges**

We can introduce **fantasy-specific events** exclusive to Thousands.tv that reward players for participating in live streams.

**Special Live Fantasy Tournaments**

- **Real-Time Leaderboards:** While watching a game, viewers compete in **live fantasy competitions** based on what happens in the match.
- **Limited-Time Rewards:** Viewers who score the most points in a single stream win exclusive **fantasy summons, $WC tokens, or upgrades**.

**Community Fantasy Goals**

- **Cumulative Buffs:** If a certain number of viewers pick a specific summon, they all get **a shared fantasy bonus**.
- **Crowdfunded Rewards:** The more viewers spend, the better **fantasy rewards** they unlock for everyone in that session.

**Exclusive Thousands.tv Summons & Traits**

To further **connect Thousands.tv to the Wildcard fantasy ecosystem**, we can introduce:

- **Exclusive Summons:** Special summons only available to active Thousands.tv participants.
- **Streaming-Only Traits:** Unique fantasy traits that give **bonuses when used during streamed matches**.
- **Twitch-Style Drops:** Viewers who watch long enough **unlock exclusive fantasy content**.