// container
// - columns
// -- blocks
// --- heading and cards
// ---- card

import { For } from 'solid-js';

import * as styles from './ListTableView.css';

export const ListTableView = () => {
  const colorMap = {
    White: 'hsl(50, 100%, 80%, 0.2)',
    Blue: 'hsl(220, 100%, 65%, 0.2)',
    Black: 'hsl(260, 40%, 50%, 0.2)',
    Red: 'hsl(0, 100%, 65%, 0.2)',
    Green: 'hsl(100, 100%, 65%, 0.2)',
    Multicolor: 'hsl(50, 100%, 40%, 0.2)',
    Colorless: 'hsl(0, 0%, 40%, 0.2)',
    Lands: 'hsl(20, 100%, 40%, 0.2)',
  };

  const cardColumns: { color: string; cards: number }[] = [
    {
      color: 'White',
      cards: [
        'Esper Sentinel',
        'Giver of Runes',
        'Mother of Runes',
        'Archivist of Oghma',
        'Deep Gnome Terramancer',
        'Lion Sash',
        'Monastery Mentor',
        'Skyclave Apparition',
        'Solitude',
        'The Wandering Emperor',
        'Mana Tithe',
        'Path to Exile',
        'Swords to Plowshares',
        'Fateful Absence',
        'Oust',
        'Prismatic Ending',
        'Winds of Abandon',
        "Council's Judgment",
        "Sevine's Reclamation",
      ],
    },
    {
      color: 'Blue',
      cards: [
        'A-Symmetry Sage',
        'Delver of Secrets',
        "Jace, Vryn's Prodigy",
        'Ledger Shredder',
        'Snapcaster Mage',
        'Brazen Borrower',
        'Vendilion Clique',
        'Ethereal Forager',
        'Murktide Regent',
        'Narset, Parter of Veils',
        'Jace, the Mind Sculptor',
        'Brainstorm',
        'Consider',
        'Divert',
        'Mental Note',
        'Opt',
        'Spell Pierce',
        'Thought Scour',
        'Counterspell',
        'Daze',
        'Evasive Action',
        'Mana Leak',
        'Memory Lapse',
        'Miscalculation',
        'Remand',
        "Archmages's Charm",
        'Force of Negation',
        'Force of Will',
        'Ponder',
        'Preordain',
        'Serum Visions',
        'Sleight of Hand',
        'Shark Typhoon',
      ],
    },
    {
      color: 'Black',
      cards: [
        'Dark Confidant',
        'Dauthi Voidwalker',
        'Tourach, Dread Cantor',
        'Plague Engineer',
        'Sedgemoor Witch',
        'Uchuulon',
        'Tasigur, the Golden Fang',
        'Gurmag Angler',
        'Liliana of the Veil',
        'Liliana, the Last Hope',
        'Cling to Dust',
        'Fatal Push',
        'Ghastly Demise',
        'Vendetta',
        'Eliminate',
        'Snuff Out',
        "Bloodchief's Thirst",
        'Dread Fugue',
        'Duress',
        'Inquisition of Kozilek',
        'Reanimate',
        'Thoughtseize',
        'Collective Brutality',
        'Hymn to Tourach',
        "Night's Whisper",
        'Painful Truths',
        'Toxic Deluge',
        'Bitterblossom',
      ],
    },
    {
      color: 'Red',
      cards: [
        "Dragon's Rage Channeler",
        'Grim Lavamancer',
        'Ragavan, Nimble Pilferer',
        'Dreadhorde Arcanist',
        'Krark, the Thumbless',
        'Young Pyromancer',
        'Bonecrusher Giant',
        'Seasoned Pyromancer',
        'Fury',
        'Burst Lightning',
        'Lava Dart',
        'Lightning Bolt',
        'Unholy Heat',
        'Delayed Blast Fireball',
        'Chain Lightning',
        'Flame Slash',
        'Forked Bolt',
        'Reckless Impulse',
        'Fable of the Mirror-Breaker',
      ],
    },
    {
      color: 'Green',
      cards: [
        'Birds of Paradise',
        'Ignoble Hierarch',
        'Noble Hierarch',
        'Jolrael, Mwonvuli Recluse',
        'Scavenging Ooze',
        'Tarmogoyf',
        'Endurance',
        'Thrun, the Last Troll',
        'Abundant Harvest',
        "Green Sun's Zenith",
        'Abundant Growth',
        'Utopia Sprawl',
        'Sylvan Library',
      ],
    },
    {
      color: 'Multicolor',
      cards: [
        'Teferi, Time Raveler',
        'Supreme Verdict',
        'Teferi, Hero of Dominaria',
        'Baleful Strix',
        'Drown in the Loch',
        'Kaito Shizuki',
        'Zyym, Mesmeric Lord',
        "Angrath's Rampage",
        'Dreadbore',
        "Kroxa, Titan of Death's Hunger",
        'Daretti, Ingenious Iconoclast',
        'Fire Covenant',
        "Kolaghan's Command",
        'Territorial Kavu',
        'Wrenn and Six',
        'Bloodbraid Elf',
        "Eladamri's Call",
        "Gerrard's Verdict",
        'Priest of Fell Rites',
        'Tidehollow Sculler',
        "Kaya's Guile",
        'Expressive Iteration',
        'Sprite Dragon',
        'Abrupt Decay',
        "Assassin's Trophy",
        'Chevill, Bane of Monsters',
        'Grist, the Hunger Tide',
        'Rip Apart',
        'General Ferrous Rokiric',
        'Growth Spiral',
        'Ice-Fang Coatl',
        'Oko, Thief of Crowns',
        'Shardless Agent',
        'Bring to Light',
        'Leovold, Emissary of Trest',
        'Omnath, Locus of Creation',
        'Niv-Mizzet Reborn',
      ],
    },
    {
      color: 'Colorless',
      cards: [
        'Dismember',
        "Mishra's Bauble",
        "Urza's Bauble",
        'Manamorphose',
        'Damn',
        'Lingering Souls',
        'Lurrus of the Dream-Den',
        'Deathrite Shaman',
        'Scion of Draco',
      ],
    },
    {
      color: 'Lands',
      cards: [
        'Flooded Strand',
        'Flooded Strand',
        'Tundra',
        'Tundra',
        'Tundra',
        'Polluted Delta',
        'Polluted Delta',
        'Underground Sea',
        'Underground Sea',
        'Underground Sea',
        'Badlands',
        'Badlands',
        'Badlands',
        'Bloodstained Mire',
        'Bloodstained Mire',
        'Taiga',
        'Taiga',
        'Taiga',
        'Wooded Foothills',
        'Wooded Foothills',
        'Horizon Canopy',
        'Savannah',
        'Savannah',
        'Windswept Heath',
        'Windswept Heath',
        'Marsh Flats',
        'Marsh Flats',
        'Scrubland',
        'Scrubland',
        'Silent Clearing',
        'Fiery Islet',
        'Scalding Tarn',
        'Scalding Tarn',
        'Volcanic Island',
        'Volcanic Island',
        'Volcanic Island',
        'Bayou',
        'Bayou',
        'Bayou',
        'Nurturing Peatland',
        'Verdant Catacombs',
        'Verdant Catacombs',
        'Arid Mesa',
        'Arid Mesa',
        'Plateau',
        'Plateau',
        'Sunbaked Canyon',
        'Misty Rainforest',
        'Misty Rainforest',
        'Tropical Island',
        'Tropical Island',
        'Tropical Island',
        'Waterlogged Grove',
        "Spara's Headquarters",
        "Raffine's Tower",
        "Xander's Lounge",
        "Ziatora's Proving Ground",
        'Ketria Triome',
        'Zagoth Triome',
      ],
    },
  ];

  return (
    <div class={styles.listViewContainer}>
      <For each={cardColumns}>
        {(column) => (
          <div class={styles.listViewColumn}>
            <h3 class={styles.listViewColumnTitle}>{`${column.color} (${column.cards.length})`}</h3>
            <div class={styles.listViewCardsContainer}>
              <For each={column.cards}>
                {(card) => (
                  <span class={styles.listViewCard} style={{ '--card-color': colorMap[column.color] }}>
                    {card}
                  </span>
                )}
              </For>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};
