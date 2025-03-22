const data = {
  title: "Floor 5-1",
  musicTrack: "MUSIC_WORLD1",
  story: "FLOOR FIVE - ALL IN THE LOGISTICS",
  theme: "YELLOW",
  tilesWidth: 8,
  tilesHeight: 14,
  placements: [
    {
      type: "HERO",
      x: 3,
      y: 1,
    },
    {
      type: "GOAL",
      x: 6,
      y: 6,
    },
    {
      type: "WALL",
      x: 7,
      y: 3,
    },
    {
      type: "WALL",
      x: 5,
      y: 3,
    },
    {
      type: "WALL",
      x: 6,
      y: 2,
    },
    {
      type: "WATER",
      x: 1,
      y: 3,
    },
    {
      type: "WATER",
      x: 2,
      y: 3,
    },
    {
      type: "SWITCH_DOOR",
      x: 2,
      y: 2,
      isRaised: true,
    },
    {
      type: "THIEF",
      x: 1,
      y: 1,
    },
    {
      type: "FLOUR",
      x: 1,
      y: 2,
    },
    {
      type: "FLOUR",
      x: 6,
      y: 3,
    },
    {
      type: "FIRE_PICKUP",
      x: 1,
      y: 5,
    },
    {
      type: "FLYING_ENEMY",
      x: 1,
      y: 4,
      initialDirection: "DOWN",
    },
    {
      type: "WALL",
      x: 1,
      y: 8,
    },
    {
      type: "WALL",
      x: 2,
      y: 8,
    },
    {
      type: "FIRE",
      x: 7,
      y: 5,
    },
    {
      type: "FIRE",
      x: 7,
      y: 6,
    },
    {
      type: "FIRE",
      x: 7,
      y: 7,
    },
    {
      type: "FIRE",
      x: 7,
      y: 8,
    },
    {
      type: "FIRE",
      x: 8,
      y: 8,
    },
    {
      type: "FIRE",
      x: 8,
      y: 5,
    },
    {
      type: "SWITCH",
      x: 8,
      y: 7,
    },
    {
      type: "WATER_PICKUP",
      x: 8,
      y: 6,
    },
    {
      type: "ICE",
      x: 3,
      y: 7,
    },
    {
      type: "ICE",
      x: 3,
      y: 8,
    },
    {
      type: "ICE",
      x: 5,
      y: 7,
    },
    {
      type: "ICE",
      x: 5,
      y: 8,
    },
    {
      type: "ICE",
      x: 5,
      y: 9,
    },
    {
      type: "ICE",
      x: 3,
      y: 9,
    },
    {
      type: "ICE",
      x: 3,
      y: 10,
    },
    {
      type: "ICE",
      x: 2,
      y: 11,
    },
    {
      type: "ICE",
      x: 2,
      y: 10,
    },
    {
      type: "ICE",
      x: 1,
      y: 11,
      corner: "BOTTOM_LEFT",
    },
    {
      type: "ICE",
      x: 1,
      y: 10,
      corner: "TOP_LEFT",
    },
    {
      type: "ICE",
      x: 3,
      y: 11,
      corner: "BOTTOM_RIGHT",
    },
    {
      type: "ICE",
      x: 5,
      y: 11,
      corner: "BOTTOM_LEFT",
    },
    {
      type: "ICE",
      x: 5,
      y: 10,
    },
    {
      type: "LOCK",
      x: 4,
      y: 11,
      color: "GREEN",
    },
    {
      type: "ICE",
      x: 6,
      y: 10,
    },
    {
      type: "ICE",
      x: 6,
      y: 11,
    },
    {
      type: "ICE",
      x: 7,
      y: 10,
    },
    {
      type: "ICE",
      x: 7,
      y: 11,
    },
    {
      type: "ICE",
      x: 8,
      y: 10,
    },
    {
      type: "ICE",
      x: 8,
      y: 11,
      corner: "BOTTOM_RIGHT",
    },
    {
      type: "ICE",
      x: 8,
      y: 9,
    },
    {
      type: "ICE_PICKUP",
      x: 1,
      y: 9,
    },
    {
      type: "SWITCH",
      x: 2,
      y: 9,
    },
    {
      type: "WALL",
      x: 7,
      y: 2,
    },
    {
      type: "WALL",
      x: 5,
      y: 2,
    },
    {
      type: "GROUND_ENEMY",
      x: 7,
      y: 4,
      initialDirection: "LEFT",
    },
    {
      type: "WALL",
      x: 6,
      y: 7,
    },
    {
      type: "SWITCH_DOOR",
      x: 3,
      y: 12,
      isRaised: true,
    },
    {
      type: "WALL",
      x: 3,
      y: 14,
    },
    {
      type: "WALL",
      x: 3,
      y: 13,
    },
    {
      type: "WALL",
      x: 6,
      y: 13,
    },
    {
      type: "WALL",
      x: 6,
      y: 14,
    },
    {
      type: "SWITCH_DOOR",
      x: 6,
      y: 12,
      isRaised: true,
    },
    {
      type: "ROAMING_ENEMY",
      x: 5,
      y: 13,
    },
    {
      type: "FLOUR",
      x: 4,
      y: 14,
    },
    {
      type: "FLOUR",
      x: 1,
      y: 14,
    },
    {
      type: "FLOUR",
      x: 7,
      y: 14,
    },
    {
      type: "KEY",
      x: 6,
      y: 1,
      color: "GREEN",
    },
    {
      type: "WATER",
      x: 5,
      y: 1,
    },
    {
      type: "WALL",
      x: 4,
      y: 5,
    },
    {
      type: "CONVEYOR",
      x: 2,
      y: 1,
      direction: "RIGHT",
    },
  ],
};

export default data;
