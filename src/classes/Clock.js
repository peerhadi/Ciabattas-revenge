import { DEATH_TYPE_CLOCK } from "@/helpers/consts";

const TIME_PER_TICK = 16.6
const WARNING_SOUND_SECONDS = 10;

export class Clock {
  constructor(secondsRemaining, level) {
    this.secondsRemaining = secondsRemaining;
    this.level = level;
    this.msRemainingInSecond = 1000;
  }

  tick() {
    this.msRemainingInSecond -= TIME_PER_TICK;
    if (this.msRemainingInSecond <= 0) {
      this.msRemainingInSecond = 1000;

      if (this.secondsRemaining <= 0) {
        this.level.setDeathOutcome(DEATH_TYPE_CLOCK);
        return;
      } else {
        this.secondsRemaining -= 1;
      }

      if (this.secondsRemaining <= 10) {

      }
    }
  }
}
