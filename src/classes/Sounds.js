import { imagePath } from '@/helpers/consts';
import { Howl } from 'howler'

export class Sounds {
  constructor() {
    this.howls = {};
    this.sfxVolume = 0.5;
  }

  init() {
    Object.keys(SFX_FILES).forEach(key => {
      const file = SFX_FILES[key];
      this.howls[key] = new Howl({
        src: imagePath([file])
      })
    })
  }
  stopSfx(key) {
    const howl = this.howls[key]
    howl.stop()
  }
  changeMusicVolume(volume) {
    Object.values(this.howls).map(howl => {
      if (howl._src === SFX_FILES[SFX.MUSIC_WORLD1] ||
        howl._src === SFX_FILES[SFX.MUSIC_WORLD2] ||
        howl._src === SFX_FILES[SFX.MUSIC_WORLD3] ||
        howl._src === SFX_FILES[SFX.MUSIC_WORLD4] ||
        howl._src === SFX_FILES[SFX.MUSIC_BATTLE]) {
        howl.volume(volume)
      }
    })
  }
  changeSfxVolume(volume) {
    Object.values(this.howls).map(howl => {
      if (howl._src != SFX_FILES[SFX.MUSIC_WORLD1] &&
        howl._src != SFX_FILES[SFX.MUSIC_WORLD2] &&
        howl._src != SFX_FILES[SFX.MUSIC_WORLD3] &&
        howl._src != SFX_FILES[SFX.MUSIC_WORLD4] &&
        howl._src != SFX_FILES[SFX.MUSIC_BATTLE]) {
        howl.volume(volume)
      }
    })
  }
  playSfx(key) {
    const howl = this.howls[key];
    if (!howl.playing()) {
      howl.volume(this.sfxVolume);
      howl.play();
    }
  }
}
export const SFX = {
  COLLECT: "COLLECT",
  MUSIC_WORLD1: "MUSIC_WORLD1",
  MUSIC_WORLD2: "MUSIC_WORLD2",
  MUSIC_WORLD3: "MUSIC_WORLD3",
  MUSIC_WORLD4: "MUSIC_WORLD4",
  MUSIC_BATTLE: "MUSIC_BATTLE",
  WIN: "WIN",
  ICE: "ICE",
  THUMP: "THUMP",
  UNLOCK: "UNLOCK",
  TELEPORT: "TELEPORT"
}
export const SFX_FILES = {
  [SFX.COLLECT]: "/sfx/collect.mp3",
  [SFX.MUSIC_WORLD1]: "/song-potential-bounce2.mp3",
  [SFX.MUSIC_WORLD2]: "/song-tunnels-export2.mp3",
  [SFX.MUSIC_WORLD3]: "/song-promotion-export2.mp3",
  [SFX.MUSIC_WORLD4]: "/song-jump-the-shark-export2.mp3",
  [SFX.MUSIC_BATTLE]: "/song-ciabatta-battle-bounce2.mp3",
  [SFX.WIN]: "/sfx/win.mp3",
  [SFX.ICE]: "/sfx/ice.mp3",
  [SFX.THUMP]: "/sfx/thump.mp3",
  [SFX.UNLOCK]: "/sfx/unlock.mp3",
  [SFX.TELEPORT]: "/sfx/teleport.mp3"
}

const soundsManager = new Sounds();

export default soundsManager
