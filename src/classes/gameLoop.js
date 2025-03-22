import soundsManager from "./Sounds";

export class GameLoop {
  constructor(onStep) {
    this.onStep = onStep;
    this.refCallback = null
    this.start();
    this.isStopped = false;
  }

  start() {
    let previousMS;
    const step = 1 / 60;
    const tick = (timestampMs) => {
      if (previousMS === undefined) {
        previousMS = timestampMs
      }

      let delta = (timestampMs - previousMS) / 1000;
      while (delta >= step) {
        this.onStep();
        delta -= step;
      }

      previousMS = timestampMs - delta * 1000;
      if (this.isStopped) return;
      this.refCallback = requestAnimationFrame(tick)
    }
    if (this.isStopped) return;

    this.refCallback = requestAnimationFrame(tick)
  }

  stop() {
    this.isStopped = true;
    
    cancelAnimationFrame(this.refCallback)
  }
}
