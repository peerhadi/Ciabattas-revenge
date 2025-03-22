const data = {
  title: "Floor 5-2",
  musicTrack: "MUSIC_WORLD1",
  theme: "YELLOW",
  tilesWidth: 13,
  tilesHeight: 11,
  placements: [
    {
      type: "HERO",
      x: 2,
      y: 4,
    },
    {
      type: "GOAL",
      x: 6,
      y: 6,
    },
    {
      type: "WALL",
      x: 6,
      y: 2,
    },
    {
      type: "LOCK",
      x: 8,
      y: 3,
      color: "BLUE",
    },
    {
      type: "LOCK",
      x: 11,
      y: 5,
      color: "GREEN",
    },
    {
      type: "LOCK",
      x: 11,
      y: 3,
      color: "BLUE",
    },
    {
      type: "WALL",
      x: 10,
      y: 3,
    },
    {
      type: "WALL",
      x: 10,
      y: 5,
    },
    {
      type: "WALL",
      x: 9,
      y: 4,
    },
    {
      type: "WATER",
      x: 8,
      y: 2,
    },
    {
      type: "WATER",
      x: 7,
      y: 3,
    },
    {
      type: "WALL",
      x: 7,
      y: 4,
    },
    {
      type: "THIEF",
      x: 9,
      y: 3,
    },
    {
      type: "WATER",
      x: 8,
      y: 1,
    },
    {
      type: "WATER_PICKUP",
      x: 10,
      y: 1,
    },
    {
      type: "KEY",
      x: 4,
      y: 5,
      color: "BLUE",
    },
    {
      type: "GROUND_ENEMY",
      x: 13,
      y: 4,
      initialDirection: "LEFT",
    },
    {
      type: "WALL",
      x: 12,
      y: 5,
    },
    {
      type: "WALL",
      x: 12,
      y: 3,
    },
    {
      type: "WALL",
      x: 13,
      y: 3,
    },
    {
      type: "WALL",
      x: 13,
      y: 5,
    },
    {
      type: "TELEPORT",
      x: 13,
      y: 1,
    },
    {
      type: "FIRE",
      x: 5,
      y: 5,
    },
    {
      type: "FIRE",
      x: 5,
      y: 7,
    },
    {
      type: "FIRE",
      x: 5,
      y: 6,
    },
    {
      type: "FIRE",
      x: 5,
      y: 4,
    },
    {
      type: "FIRE",
      x: 5,
      y: 3,
    },
    {
      type: "FIRE",
      x: 5,
      y: 2,
    },
    {
      type: "FIRE",
      x: 5,
      y: 1,
    },
    {
      type: "FIRE",
      x: 5,
      y: 8,
    },
    {
      type: "FIRE",
      x: 5,
      y: 9,
    },
    {
      type: "TELEPORT",
      x: 2,
      y: 1,
    },
    {
      type: "WALL",
      x: 4,
      y: 2,
    },
    {
      type: "CONVEYOR",
      x: 1,
      y: 3,
      direction: "DOWN",
    },
    {
      type: "CONVEYOR",
      x: 2,
      y: 3,
      direction: "DOWN",
    },
    {
      type: "CONVEYOR",
      x: 3,
      y: 3,
      direction: "DOWN",
    },
    {
      type: "WALL",
      x: 4,
      y: 3,
    },
    {
      type: "WALL",
      x: 4,
      y: 4,
    },
    {
      type: "FLYING_ENEMY",
      x: 6,
      y: 9,
      initialDirection: "LEFT",
    },
    {
      type: "GROUND_ENEMY",
      x: 1,
      y: 7,
      initialDirection: "DOWN",
    },
    {
      type: "WALL",
      x: 1,
      y: 6,
    },
    {
      type: "SWITCH_DOOR",
      x: 1,
      y: 9,
      isRaised: false,
    },
    {
      type: "FLOUR",
      x: 1,
      y: 10,
    },
    {
      type: "ICE",
      x: 5,
      y: 10,
    },
    {
      type: "ICE",
      x: 4,
      y: 11,
    },
    {
      type: "ICE",
      x: 5,
      y: 11,
    },
    {
      type: "ICE",
      x: 4,
      y: 10,
    },
    {
      type: "ICE",
      x: 6,
      y: 10,
    },
    {
      type: "ICE",
      x: 7,
      y: 10,
    },
    {
      type: "ICE",
      x: 9,
      y: 10,
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
    },
    {
      type: "ICE",
      x: 9,
      y: 11,
    },
    {
      type: "ICE",
      x: 7,
      y: 11,
    },
    {
      type: "ICE",
      x: 6,
      y: 11,
    },
    {
      type: "ICE",
      x: 10,
      y: 11,
    },
    {
      type: "LOCK",
      x: 11,
      y: 11,
      color: "BLUE",
    },
    {
      type: "ICE",
      x: 10,
      y: 10,
      corner: "BOTTOM_RIGHT",
    },
    {
      type: "WALL",
      x: 11,
      y: 9,
    },
    {
      type: "WALL",
      x: 12,
      y: 9,
    },
    {
      type: "CONVEYOR",
      x: 13,
      y: 9,
      direction: "UP",
    },
    {
      type: "FLOUR",
      x: 13,
      y: 11,
    },
    {
      type: "FLOUR",
      x: 6,
      y: 1,
    },
    {
      type: "CONVEYOR",
      x: 12,
      y: 1,
      direction: "RIGHT",
    },
    {
      type: "CONVEYOR",
      x: 12,
      y: 2,
      direction: "RIGHT",
    },
    {
      type: "KEY",
      x: 13,
      y: 2,
      color: "GREEN",
    },
    {
      type: "FIRE",
      x: 4,
      y: 6,
    },
    {
      type: "FIRE",
      x: 4,
      y: 7,
    },
    {
      type: "FIRE",
      x: 4,
      y: 8,
    },
    {
      type: "FIRE",
      x: 4,
      y: 9,
    },
    {
      type: "FIRE",
      x: 6,
      y: 4,
    },
    {
      type: "FIRE",
      x: 6,
      y: 5,
    },
    {
      type: "FIRE",
      x: 6,
      y: 3,
    },
    {
      type: "WALL",
      x: 2,
      y: 7,
    },
    {
      type: "WALL",
      x: 3,
      y: 9,
    },
    {
      type: "WALL",
      x: 10,
      y: 6,
    },
    {
      type: "WALL",
      x: 12,
      y: 7,
    },
    {
      type: "WALL",
      x: 13,
      y: 7,
    },
    {
      type: "GROUND_ENEMY",
      x: 10,
      y: 7,
      initialDirection: "LEFT",
    },
    {
      type: "WALL",
      x: 11,
      y: 7,
    },
    {
      type: "FLOUR",
      x: 13,
      y: 6,
    },
    {
      type: "SWITCH",
      x: 12,
      y: 6,
    },
  ],
};

export default data;
