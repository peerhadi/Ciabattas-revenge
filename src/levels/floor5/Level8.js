const data = {
  title: "Floor 5-8",
  musicTrack: "MUSIC_WORLD1",
  theme: "YELLOW",
  timeLimitSeconds: 150,
  tilesWidth: 11,
  tilesHeight: 11,
  placements: [
    {
      type: "HERO",
      x: 3,
      y: 3
    },
    {
      type: "GOAL",
      x: 7,
      y: 6
    },
    {
      type: "THIEF",
      x: 6,
      y: 9
    },
    {
      type: "THIEF",
      x: 9,
      y: 3
    },
    {
      type: "THIEF",
      x: 3,
      y: 5
    },
    {
      type: "THIEF",
      x: 8,
      y: 7
    },
    {
      type: "THIEF",
      x: 5,
      y: 2
    },
    {
      type: "THIEF",
      x: 2,
      y: 10
    },
    {
      type: "THIEF",
      x: 7,
      y: 1
    },
    {
      type: "THIEF",
      x: 9,
      y: 10
    },
    {
      type: "ROAMING_ENEMY",
      x: 10,
      y: 6,
    },
    {
      type: "SWITCH_DOOR",
      x: 6,
      y: 3,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 6,
      y: 4,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 8,
      y: 4,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 8,
      y: 3,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 8,
      y: 2,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 7,
      y: 2,
      isRaised: true
    },
    {
      type: "WATER",
      x: 9,
      y: 6
    },
    {
      type: "WATER",
      x: 10,
      y: 7
    },
    {
      type: "WATER",
      x: 11,
      y: 7
    },
    {
      type: "WATER",
      x: 11,
      y: 6
    },
    {
      type: "WATER",
      x: 10,
      y: 5
    },
    {
      type: "SWITCH_DOOR",
      x: 3,
      y: 8,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 3,
      y: 9,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 3,
      y: 10,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 4,
      y: 10,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 5,
      y: 10,
      isRaised: true
    },
    {
      type: "WALL",
      x: 9,
      y: 7
    },
    {
      type: "WALL",
      x: 11,
      y: 5
    },
    {
      type: "KEY",
      x: 5,
      y: 4,
      color: "GREEN"
    },
    {
      type: "FIRE",
      x: 10,
      y: 10
    },
    {
      type: "FIRE",
      x: 6,
      y: 8
    },
    {
      type: "FIRE",
      x: 2,
      y: 5
    },
    {
      type: "FIRE",
      x: 9,
      y: 2
    },
    {
      type: "CONVEYOR",
      x: 8,
      y: 6,
      direction: "RIGHT"
    },
    {
      type: "CONVEYOR",
      x: 7,
      y: 7,
      direction: "RIGHT"
    },
    {
      type: "SWITCH",
      x: 11,
      y: 11
    },
    {
      type: "TELEPORT",
      x: 3,
      y: 11
    },
    {
      type: "TELEPORT",
      x: 6,
      y: 1
    },
    {
      type: "ICE",
      x: 9,
      y: 9
    },
    {
      type: "ICE",
      x: 10,
      y: 9,
      corner: "TOP_RIGHT"
    },
    {
      type: "CONVEYOR",
      x: 10,
      y: 3,
      direction: "UP"
    },
    {
      type: "CONVEYOR",
      x: 11,
      y: 3,
      direction: "UP"
    },
    {
      type: "ICE",
      x: 9,
      y: 4
    },
    {
      type: "SWITCH_DOOR",
      x: 4,
      y: 5,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 7,
      y: 4,
      isRaised: true
    },
    {
      type: "WATER",
      x: 2,
      y: 4
    },
    {
      type: "FLOUR",
      x: 2,
      y: 11
    },
    {
      type: "FLOUR",
      x: 11,
      y: 7
    },
    {
      type: "FLOUR",
      x: 10,
      y: 10
    },
    {
      type: "FLOUR",
      x: 9,
      y: 4
    },
    {
      type: "ICE",
      x: 10,
      y: 4
    },
    {
      type: "ICE",
      x: 5,
      y: 7,
      corner: "BOTTOM_RIGHT"
    },
    {
      type: "ICE",
      x: 5,
      y: 4,
      corner: "TOP_RIGHT"
    },
    {
      type: "ICE",
      x: 5,
      y: 5
    },
    {
      type: "ICE",
      x: 5,
      y: 6
    },
    {
      type: "ICE",
      x: 4,
      y: 6
    },
    {
      type: "ICE",
      x: 3,
      y: 7,
      corner: "BOTTOM_LEFT"
    },
    {
      type: "ICE",
      x: 3,
      y: 6
    },
    {
      type: "ICE",
      x: 2,
      y: 6
    },
    {
      type: "LOCK",
      x: 5,
      y: 1,
      color: "BLUE"
    },
    {
      type: "WALL",
      x: 7,
      y: 10
    },
    {
      type: "CONVEYOR",
      x: 6,
      y: 10,
      direction: "UP"
    },
    {
      type: "WATER_PICKUP",
      x: 5,
      y: 11
    },
    {
      type: "FLOUR",
      x: 2,
      y: 6
    },
    {
      type: "FLOUR",
      x: 5,
      y: 3
    },
    {
      type: "FIRE",
      x: 5,
      y: 3
    },
    {
      type: "TELEPORT",
      x: 9,
      y: 11
    },
    {
      type: "FLOUR",
      x: 6,
      y: 8
    },
    {
      type: "ICE",
      x: 1,
      y: 4
    },
    {
      type: "ICE",
      x: 1,
      y: 1,
      corner: "TOP_LEFT"
    },
    {
      type: "FIRE",
      x: 4,
      y: 1
    },
    {
      type: "SWITCH_DOOR",
      x: 1,
      y: 10,
      isRaised: true
    },
    {
      type: "WATER",
      x: 10,
      y: 11
    },
    {
      type: "WATER",
      x: 11,
      y: 10
    },
    {
      type: "SWITCH_DOOR",
      x: 2,
      y: 7,
      isRaised: false
    },
    {
      type: "SWITCH_DOOR",
      x: 2,
      y: 8,
      isRaised: false
    },
    {
      type: "SWITCH_DOOR",
      x: 2,
      y: 9,
      isRaised: false
    },
    {
      type: "SWITCH_DOOR",
      x: 4,
      y: 7,
      isRaised: false
    },
    {
      type: "KEY",
      x: 1,
      y: 11,
      color: "BLUE"
    },
    {
      type: "LOCK",
      x: 11,
      y: 9,
      color: "BLUE"
    },
    {
      type: "CONVEYOR",
      x: 8,
      y: 5,
      direction: "LEFT"
    },
    {
      type: "CONVEYOR",
      x: 7,
      y: 5,
      direction: "LEFT"
    },
    {
      type: "CONVEYOR",
      x: 6,
      y: 5,
      direction: "LEFT"
    },
    {
      type: "WALL",
      x: 9,
      y: 5
    },
    {
      type: "ICE",
      x: 11,
      y: 4,
      corner: "BOTTOM_RIGHT"
    },
    {
      type: "FIRE",
      x: 11,
      y: 1
    },
    {
      type: "ICE",
      x: 11,
      y: 2
    },
    {
      type: "ICE",
      x: 10,
      y: 2
    },
    {
      type: "WATER",
      x: 10,
      y: 1
    },
    {
      type: "CONVEYOR",
      x: 9,
      y: 1,
      direction: "LEFT"
    },
    {
      type: "SWITCH_DOOR",
      x: 4,
      y: 8,
      isRaised: true
    },
    {
      type: "FIRE_PICKUP",
      x: 8,
      y: 1
    },
    {
      type: "SWITCH_DOOR",
      x: 1,
      y: 9,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 1,
      y: 6,
      isRaised: true
    },
    {
      type: "SWITCH_DOOR",
      x: 1,
      y: 5,
      isRaised: true
    },
    {
      type: "LOCK",
      x: 1,
      y: 3,
      color: "GREEN"
    },
    {
      type: "CLOWN_DEFENSE_PICKUP",
      x: 7,
      y: 11
    },
    {
      type: "WALL",
      x: 2,
      y: 3
    },
    {
      type: "WALL",
      x: 4,
      y: 3
    },
    {
      type: "WALL",
      x: 3,
      y: 2
    },
    {
      type: "WALL",
      x: 4,
      y: 2
    },
    {
      type: "WALL",
      x: 2,
      y: 2
    },
    {
      type: "ICE",
      x: 2,
      y: 1
    },
    {
      type: "THIEF",
      x: 1,
      y: 2
    },
    //{
    //  type: "CLOWN_DEFENSE_PICKUP",
    //  x: 10,
    //  y: 2
    //},
    {
      type: "ICE",
      x: 5,
      y: 11
    },
    {
      type: "ICE",
      x: 6,
      y: 11
    },
    {
      type: "ICE",
      x: 7,
      y: 11
    },
    {
      type: "FLOUR",
      x: 9,
      y: 8
    },
    {
      type: "ICE",
      x: 8,
      y: 8,
      corner: "TOP_LEFT"
    },
    {
      type: "ICE",
      x: 9,
      y: 8
    },
    {
      type: "ICE",
      x: 10,
      y: 8
    },
    {
      type: "ICE",
      x: 7,
      y: 8
    },
    {
      type: "WALL",
      x: 5,
      y: 9
    },
    {
      type: "THIEF",
      x: 1,
      y: 8
    },
    {
      type: "SWITCH_DOOR",
      x: 1,
      y: 7,
      isRaised: true
    },
    {
      type: "WALL",
      x: 5,
      y: 8
    },
    {
      type: "FLOUR",
      x: 2,
      y: 1
    },
    {
      type: "ICE_PICKUP",
      x: 7,
      y: 9
    },
    {
      type: "FLOUR",
      x: 4,
      y: 9
    },
    {
      type: "FIRE",
      x: 8,
      y: 9
    },
    {
      type: "WALL",
      x: 8,
      y: 10
    },
    {
      type: "WATER",
      x: 3,
      y: 1
    },
    {
      type: "WATER",
      x: 7,
      y: 9
    },
    {
      type: "THIEF",
      x: 6,
      y: 6
    },
    {
      type: "CONVEYOR",
      x: 6,
      y: 7,
      direction: "UP"
    },
    {
      type: "ROAMING_ENEMY",
      x: 7,
      y: 3,
    },
    {
      type: "SWITCH_DOOR",
      x: 6,
      y: 2,
      isRaised: true
    }
  ]
};

export default data;
