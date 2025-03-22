const data = {
  title: "Floor 5-3",
  musicTrack: "MUSIC_WORLD1",
  theme: "YELLOW",
  tilesWidth: 18,
  tilesHeight: 7,
  placements: [
    {
      type: "HERO",
      x: 3,
      y: 1,
    },
    {
      type: "GOAL",
      x: 14,
      y: 1,
    },
    {
      type: "GROUND_ENEMY",
      x: 5,
      y: 2,
      initialDirection: "DOWN",
    },
    {
      type: "GROUND_ENEMY",
      x: 6,
      y: 4,
      initialDirection: "DOWN",
    },
    {
      type: "FLOUR",
      x: 4,
      y: 7,
    },
    {
      type: "FLOUR",
      x: 5,
      y: 3,
    },
    {
      type: "FLOUR",
      x: 6,
      y: 1,
    },
    {
      type: "FLOUR",
      x: 1,
      y: 1,
    },
    {
      type: "FIRE",
      x: 1,
      y: 3,
    },
    {
      type: "FIRE",
      x: 2,
      y: 3,
    },
    {
      type: "FIRE",
      x: 2,
      y: 2,
    },
    {
      type: "FIRE",
      x: 2,
      y: 1,
    },
    {
      type: "TELEPORT",
      x: 1,
      y: 2,
    },
    {
      type: "WALL",
      x: 11,
      y: 2,
    },
    {
      type: "WALL",
      x: 13,
      y: 1,
    },
    {
      type: "WALL",
      x: 13,
      y: 2,
    },
    {
      type: "SWITCH",
      x: 12,
      y: 2,
    },
    {
      type: "WALL",
      x: 11,
      y: 6,
    },
    {
      type: "WALL",
      x: 12,
      y: 6,
    },
    {
      type: "WALL",
      x: 13,
      y: 6,
    },
    {
      type: "ROAMING_ENEMY",
      x: 11,
      y: 7,
    },
    {
      type: "ROAMING_ENEMY",
      x: 12,
      y: 7,
    },
    {
      type: "WALL",
      x: 13,
      y: 7,
    },
    {
      type: "ICE",
      x: 6,
      y: 7,
    },
    {
      type: "ICE",
      x: 8,
      y: 7,
    },
    {
      type: "ICE",
      x: 7,
      y: 7,
    },
    {
      type: "ICE",
      x: 7,
      y: 6,
    },
    {
      type: "ICE",
      x: 7,
      y: 5,
    },
    {
      type: "ICE",
      x: 9,
      y: 7,
    },
    {
      type: "SWITCH_DOOR",
      x: 10,
      y: 7,
      isRaised: true,
    },
    {
      type: "FLOUR",
      x: 14,
      y: 7,
    },
    {
      type: "KEY",
      x: 2,
      y: 6,
      color: "BLUE",
    },
    {
      type: "WATER_PICKUP",
      x: 2,
      y: 5,
    },
    {
      type: "WATER",
      x: 3,
      y: 5,
    },
    {
      type: "WATER",
      x: 2,
      y: 4,
    },
    {
      type: "WATER",
      x: 1,
      y: 4,
    },
    {
      type: "WATER",
      x: 1,
      y: 5,
    },
    {
      type: "WATER",
      x: 1,
      y: 6,
    },
    {
      type: "WATER",
      x: 1,
      y: 7,
    },
    {
      type: "WATER",
      x: 2,
      y: 7,
    },
    {
      type: "WATER",
      x: 3,
      y: 7,
    },
    {
      type: "WATER",
      x: 4,
      y: 7,
    },
    {
      type: "WALL",
      x: 5,
      y: 7,
    },
    {
      type: "WATER",
      x: 4,
      y: 5,
    },
    {
      type: "WATER",
      x: 3,
      y: 4,
    },
    {
      type: "WATER",
      x: 5,
      y: 5,
    },
    {
      type: "WALL",
      x: 11,
      y: 3,
    },
    {
      type: "WALL",
      x: 13,
      y: 3,
    },
    {
      type: "WALL",
      x: 10,
      y: 2,
    },
    {
      type: "CONVEYOR",
      x: 11,
      y: 1,
      direction: "LEFT",
    },
    {
      type: "CONVEYOR",
      x: 12,
      y: 3,
      direction: "UP",
    },
    {
      type: "CONVEYOR",
      x: 12,
      y: 1,
      direction: "LEFT",
    },
    {
      type: "TELEPORT",
      x: 13,
      y: 5,
    },
    {
      type: "WALL",
      x: 15,
      y: 1,
    },
    {
      type: "WALL",
      x: 16,
      y: 2,
    },
    {
      type: "SWITCH_DOOR",
      x: 17,
      y: 1,
      isRaised: false,
    },
    {
      type: "FLOUR",
      x: 16,
      y: 1,
    },
    {
      type: "WALL",
      x: 15,
      y: 7,
    },
    {
      type: "WALL",
      x: 15,
      y: 6,
    },
    {
      type: "WATER",
      x: 18,
      y: 2,
    },
    {
      type: "WATER",
      x: 17,
      y: 4,
    },
    {
      type: "WALL",
      x: 18,
      y: 7,
    },
    {
      type: "FLYING_ENEMY",
      x: 4,
      y: 1,
      initialDirection: "DOWN",
    },
    {
      type: "FLOUR",
      x: 11,
      y: 1,
    },
    {
      type: "CONVEYOR",
      x: 10,
      y: 1,
      direction: "LEFT",
    },
    {
      type: "SWITCH_DOOR",
      x: 9,
      y: 2,
      isRaised: false,
    },
    {
      type: "SWITCH_DOOR",
      x: 8,
      y: 2,
      isRaised: false,
    },
    {
      type: "SWITCH_DOOR",
      x: 7,
      y: 2,
      isRaised: false,
    },
    {
      type: "LOCK",
      x: 14,
      y: 5,
      color: "BLUE",
    },
    {
      type: "THIEF",
      x: 14,
      y: 6,
    },
    {
      type: "FIRE_PICKUP",
      x: 16,
      y: 7,
    },
    {
      type: "ICE_PICKUP",
      x: 17,
      y: 7,
    },
    {
      type: "GROUND_ENEMY",
      x: 18,
      y: 3,
      initialDirection: "LEFT",
    },
  ],
};

export default data;
