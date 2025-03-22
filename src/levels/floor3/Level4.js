const data = {
  title: "Floor 3-4",
  musicTrack: "MUSIC_WORLD3",
  theme: "PINK",
  tilesWidth: 11,
  tilesHeight: 5,
  placements: [
    {
      type: "HERO",
      x: 2,
      y: 3
    },
    {
      type: "GOAL",
      x: 10,
      y: 3
    },
    {
      type: "FIRE",
      x: 6,
      y: 1
    },
    {
      type: "FIRE",
      x: 6,
      y: 2
    },
    {
      type: "FIRE",
      x: 6,
      y: 3
    },
    {
      type: "GROUND_ENEMY",
      x: 10,
      y: 1,
      initialDirection: "LEFT",
    },
    {
      type: "GROUND_ENEMY",
      x: 10,
      y: 5,
      initialDirection: "LEFT",
    },
    {
      type: "FIRE",
      x: 6,
      y: 4
    },
    {
      type: "FIRE",
      x: 6,
      y: 5
    },
    {
      type: "FIRE_PICKUP",
      x: 4,
      y: 3
    }
  ]
};

export default data;
