const data = {
  title: "Floor 5-6",
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
      x: 1,
      y: 7,
    },
    {
      type: "FIRE",
      x: 6,
      y: 1,
    },
    {
      type: "FIRE",
      x: 6,
      y: 2,
    },
    {
      type: "FIRE",
      x: 6,
      y: 3,
    },
    {
      type: "FIRE",
      x: 6,
      y: 5,
    },
    {
      type: "FIRE",
      x: 7,
      y: 5,
    },
    {
      type: "FIRE",
      x: 7,
      y: 3,
    },
    {
      type: "FIRE",
      x: 7,
      y: 2,
    },
    {
      type: "FIRE",
      x: 7,
      y: 1,
    },
    {
      type: "CONVEYOR",
      x: 6,
      y: 4,
      direction: "RIGHT",
    },
    {
      type: "CONVEYOR",
      x: 7,
      y: 4,
      direction: "RIGHT",
    },
    {
      type: "CONVEYOR",
      x: 7,
      y: 7,
      direction: "LEFT",
    },
    {
      type: "CONVEYOR",
      x: 6,
      y: 7,
      direction: "LEFT",
    },
    {
      type: "WALL",
      x: 7,
      y: 6,
    },
    {
      type: "WALL",
      x: 6,
      y: 6,
    },
    {
      type: "WATER",
      x: 10,
      y: 3,
    },
    {
      type: "WATER",
      x: 10,
      y: 4,
    },
    {
      type: "WATER",
      x: 10,
      y: 5,
    },
    {
      type: "WATER",
      x: 10,
      y: 6,
    },
    {
      type: "WATER",
      x: 10,
      y: 7,
    },
    {
      type: "WATER",
      x: 11,
      y: 7,
    },
    {
      type: "WATER",
      x: 11,
      y: 6,
    },
    {
      type: "WATER",
      x: 11,
      y: 5,
    },
    {
      type: "WATER",
      x: 11,
      y: 4,
    },
    {
      type: "WATER",
      x: 11,
      y: 3,
    },
    {
      type: "WATER",
      x: 11,
      y: 2,
    },
    {
      type: "WATER",
      x: 10,
      y: 2,
    },
    {
      type: "TELEPORT",
      x: 9,
      y: 2,
    },
    {
      type: "TELEPORT",
      x: 18,
      y: 7,
    },
    {
      type: "WATER",
      x: 10,
      y: 1,
    },
    {
      type: "WATER",
      x: 11,
      y: 1,
    },
    {
      type: "LOCK",
      x: 16,
      y: 2,
      color: "BLUE",
    },
    {
      type: "WALL",
      x: 15,
      y: 1,
    },
    {
      type: "WALL",
      x: 17,
      y: 1,
    },
    {
      type: "LOCK",
      x: 18,
      y: 6,
      color: "GREEN",
    },
    {
      type: "WALL",
      x: 17,
      y: 6,
    },
    {
      type: "WALL",
      x: 16,
      y: 7,
    },
    {
      type: "FLOUR",
      x: 16,
      y: 1,
    },
    {
      type: "FLOUR",
      x: 9,
      y: 7,
    },
    {
      type: "ROAMING_ENEMY",
      x: 18,
      y: 3,
    },
    {
      type: "ROAMING_ENEMY",
      x: 14,
      y: 5,
    },
    //{
    //  type: "CLOWN_DEFENSE_PICKUP",
    //  x: 15,
    //  y: 7,
    //},
    {
      type: "KEY",
      x: 5,
      y: 1,
      color: "GREEN",
    },
    {
      type: "KEY",
      x: 9,
      y: 1,
      color: "BLUE",
    },
    {
      type: "FLYING_ENEMY",
      x: 8,
      y: 1,
      initialDirection: "DOWN",
    },
    {
      type: "WALL",
      x: 2,
      y: 1,
    },
    {
      type: "ROAMING_ENEMY",
      x: 1,
      y: 1,
    },
    {
      type: "SWITCH",
      x: 8,
      y: 7,
    },
    {
      type: "SWITCH_DOOR",
      x: 1,
      y: 2,
      isRaised: true,
    },
    {
      type: "WALL",
      x: 2,
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
      x: 1,
      y: 4,
      direction: "RIGHT",
    },
    {
      type: "CONVEYOR",
      x: 2,
      y: 4,
      direction: "RIGHT",
    },
    {
      type: "WALL",
      x: 4,
      y: 1,
    },
    {
      type: "ICE",
      x: 13,
      y: 4,
    },
    {
      type: "ICE",
      x: 15,
      y: 4,
    },
    {
      type: "ICE",
      x: 14,
      y: 4,
    },
    {
      type: "ICE",
      x: 14,
      y: 3,
    },
    {
      type: "ICE",
      x: 14,
      y: 5,
    },
    {
      type: "ICE",
      x: 15,
      y: 5,
    },
    {
      type: "ICE",
      x: 15,
      y: 3,
    },
    {
      type: "ICE",
      x: 13,
      y: 5,
    },
    {
      type: "ICE",
      x: 13,
      y: 3,
    },
    {
      type: "FLOUR",
      x: 14,
      y: 4,
    },
    {
      type: "WALL",
      x: 2,
      y: 3,
    },
    {
      type: "WALL",
      x: 2,
      y: 5,
    },
    {
      type: "WALL",
      x: 1,
      y: 5,
    },
    {
      type: "FIRE",
      x: 4,
      y: 6,
    },
    {
      type: "FIRE_PICKUP",
      x: 12,
      y: 1,
    },
  ],
};

export default data;
