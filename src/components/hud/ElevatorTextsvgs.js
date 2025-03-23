import styles from "./ElevatorLevelSelectSvgs.module.css";
import PixelNumber from "./PixelNumber";

export const CreateButtonSvg = () => {
  return (
    <svg
      style={{
        display: "block",
        width: `calc(48px * var(--elevator-menu-pixel-size)`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 48 11"
      shapeRendering="crispEdges"
    >
      <path stroke="#3b1857" d="M1 0h46" />
      <path
        stroke="#160034"
        d="M0 1h1M47 1h1M0 2h1M47 2h1M0 3h1M47 3h1M0 4h1M47 4h1M0 5h1M47 5h1M0 6h1M47 6h1M0 7h1M47 7h1M0 8h1M47 8h1M0 9h1M47 9h1M1 10h46"
      />
      <path stroke="#7727b9" d="M1 1h46" />
      <path
        stroke="#580f93"
        d="M1 2h46M1 3h11M15 3h1M19 3h1M23 3h1M27 3h1M31 3h1M35 3h12M1 4h11M13 4h3M19 4h1M21 4h3M27 4h2M30 4h2M33 4h14M1 5h11M13 5h3M18 5h2M23 5h1M27 5h2M30 5h2M35 5h12M1 6h11M13 6h3M17 6h1M19 6h1M21 6h3M25 6h1M27 6h2M30 6h2M33 6h14M1 7h11M15 7h1M17 7h1M19 7h1M23 7h1M25 7h1M27 7h2M30 7h2M35 7h12M1 8h46"
      />
      <path
        stroke="#ffffff"
        d="M12 3h3M16 3h3M20 3h3M24 3h3M28 3h3M32 3h3M12 4h1M16 4h1M18 4h1M20 4h1M24 4h1M26 4h1M29 4h1M32 4h1M12 5h1M16 5h2M20 5h3M24 5h3M29 5h1M32 5h3M12 6h1M16 6h1M18 6h1M20 6h1M24 6h1M26 6h1M29 6h1M32 6h1M12 7h3M16 7h1M18 7h1M20 7h3M24 7h1M26 7h1M29 7h1M32 7h3"
      />
      <path stroke="#651d87" d="M17 4h1M25 4h1" />
      <path stroke="#470974" d="M1 9h46" />
    </svg>
  );
};

export const TitleButtonSvg = () => {
  return (
    <svg
      style={{
        display: "block",
        width: `calc(48px * var(--elevator-menu-pixel-size)`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 48 11"
      shapeRendering="crispEdges"
    >
      <path
        stroke="#18123b"
        d="M1 0h46M0 1h1M47 1h1M0 2h1M47 2h1M0 3h1M14 3h3M18 3h1M20 3h3M24 3h1M28 3h3M47 3h1M0 4h1M15 4h1M18 4h1M21 4h1M24 4h1M28 4h1M47 4h1M0 5h1M15 5h1M18 5h1M21 5h1M24 5h1M28 5h3M47 5h1M0 6h1M15 6h1M18 6h1M21 6h1M24 6h1M28 6h1M47 6h1M0 7h1M15 7h1M18 7h1M21 7h1M24 7h3M28 7h3M47 7h1M0 8h1M47 8h1M0 9h1M47 9h1M1 10h46"
      />
      <path stroke="#c5c1dd" d="M1 1h46" />
      <path
        stroke="#a09cb8"
        d="M1 2h46M1 3h13M17 3h1M19 3h1M23 3h1M25 3h3M31 3h16M1 4h14M16 4h2M19 4h2M22 4h2M25 4h3M29 4h18M1 5h14M16 5h2M19 5h2M22 5h2M25 5h3M31 5h16M1 6h14M16 6h2M19 6h2M22 6h2M25 6h3M29 6h18M1 7h14M16 7h2M19 7h2M22 7h2M27 7h1M31 7h16M1 8h46"
      />
      <path stroke="#908ca3" d="M1 9h46" />
    </svg>
  );
};

const BUTTON_COLOR_MAP = {
  F1: {
    border: "#0b1d3e",
    base: "#a5bae0",
    highlight: "#c8dff8",
    detail: "#c8dff8",
    shade: "#7ca7d9",
  },
  F2: {
    border: "#1d430c",
    base: "#83d44a",
    highlight: "#9fe56e",
    detail: "#9fe56e",
    shade: "#79b743",
  },
  F3: {
    border: "#680b5d",
    base: "#e0a5d3",
    highlight: "#f9bceb",
    detail: "#f9bceb",
    shade: "#e095d7",
  },
  F4: {
    border: "#2d293e",
    base: "#dee6e7",
    highlight: "#e6eeef",
    detail: "#e6eeef",
    shade: "#b2d2d6",
  },
  F5: {
    border: "#2f2808",
    base: "#e5d084",
    highlight: "#ffe586",
    detail: "#ffe586",
    shade: "#b3993a",
  },
};

export const ElevatorButtonSvg = ({ isActive, floor, number, isCompleted }) => {
  const theme = BUTTON_COLOR_MAP[floor];
  return (
    <>

      <svg
        style={{
          display: "block",
          position: 'absolute',
          width: `calc(14px * var(--elevator-menu-pixel-size)`,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -0.5 14 14"
        shapeRendering="crispEdges"
      >
        <path
          className={isActive ? styles.borderPath : ""}
          stroke={theme.border}
          d="M1 0h12M0 1h1M13 1h1M0 2h1M13 2h1M0 3h1M13 3h1M0 4h1M13 4h1M0 5h1M13 5h1M0 6h1M13 6h1M0 7h1M13 7h1M0 8h1M13 8h1M0 9h1M13 9h1M0 10h1M13 10h1M0 11h1M13 11h1M0 12h1M13 12h1M1 13h12"
        />
        <path
          stroke={theme.highlight}
          d="M1 1h11M1 2h1M1 3h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1M1 10h1M1 11h1M1 12h1"
        />
        <path
          stroke={theme.shade}
          d="M12 1h1M12 2h1M12 3h1M12 4h1M12 5h1M12 6h1M12 7h1M12 8h1M12 9h1M12 10h1M12 11h1M2 12h11"
        />
        <path stroke={theme.detail} d="M2 2h1M2 3h1M9 10h2" />
        <path
          stroke={theme.base}
          d="M3 2h9M3 3h9M2 4h10M2 5h10M2 6h10M2 7h10M2 8h10M2 9h10M2 10h7M11 10h1M2 11h10"
        />
      </svg>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: `calc(14px * var(--elevator-menu-pixel-size))`,
        height: "calc(14px * var(--elevator-menu-pixel-size))"
      }}>
        <PixelNumber number={number} toScale />
      </div>
      {isCompleted && <SmallCheckmarkSvg />}
    </>
  );
};

export const SmallCheckmarkSvg = () => {
  return (
    <svg
      style={{
        display: "block",
        width: `calc(5px * var(--elevator-menu-pixel-size)`,
        position: 'absolute',
        zIndex: '50',
        top: 'calc(9px * var(--elevator-menu-pixel-size)',
        left: 'calc(9px * var(--elevator-menu-pixel-size)',
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 5 5"
      shapeRendering="crispEdges"
    >
      <path
        stroke="#104516"
        d="M0 0h5M0 1h4M0 2h1M2 2h1M4 2h1M0 3h2M3 3h2M0 4h5"
      />
      <path stroke="#48ff5d" d="M4 1h1M1 2h1M3 2h1M2 3h1" />
    </svg>
  );
};

export const ElevatorButtonUp = () => {
  return (
    <svg
      style={{
        display: "block",
        width: `calc(9px * var(--elevator-menu-pixel-size)`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 9 6"
      shapeRendering="crispEdges"
    >
      <path
        stroke="#251e05"
        d="M4 0h1M3 1h1M5 1h1M2 2h1M6 2h1M1 3h1M7 3h1M0 4h1M8 4h1M0 5h9"
      />
      <path stroke="#f8c200" d="M4 1h1M5 2h1M6 3h1M7 4h1" />
      <path stroke="#fbf005" d="M3 2h2M3 3h3M2 4h5" />
      <path stroke="#fff4cc" d="M2 3h1M1 4h1" />
    </svg>
  );
};

export const ElevatorButtonDown = () => {
  return (
    <svg
      style={{
        display: "block",
        width: `calc(9px * var(--elevator-menu-pixel-size)`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 9 6"
      shapeRendering="crispEdges"
    >
      <path
        stroke="#251e05"
        d="M0 0h9M0 1h1M8 1h1M1 2h1M7 2h1M2 3h1M6 3h1M3 4h1M5 4h1M4 5h1"
      />
      <path stroke="#fff4cc" d="M1 1h1M2 2h1" />
      <path stroke="#fbf005" d="M2 1h5M3 2h3M3 3h2" />
      <path stroke="#f8c200" d="M7 1h1M6 2h1M5 3h1M4 4h1" />
    </svg>
  );
};

export const ElevatorBackplate = () => {
  return (
    <svg
      style={{
        display: "block",
        width: `calc(58px * var(--elevator-menu-pixel-size)`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 58 124"
      shapeRendering="crispEdges"
    >
      <path
        stroke="#0b1d3e"
        d="M1 0h56M0 1h1M57 1h1M0 2h1M57 2h1M0 3h1M57 3h1M0 4h1M57 4h1M0 5h1M57 5h1M0 6h1M57 6h1M0 7h1M57 7h1M0 8h1M57 8h1M0 9h1M57 9h1M0 10h1M57 10h1M0 11h1M57 11h1M0 12h1M57 12h1M0 13h1M57 13h1M0 14h1M57 14h1M0 15h1M57 15h1M0 16h1M57 16h1M0 17h1M57 17h1M0 18h1M57 18h1M0 19h1M57 19h1M0 20h1M57 20h1M0 21h1M57 21h1M0 22h1M57 22h1M1 23h56M0 24h1M57 24h1M0 25h1M57 25h1M0 26h1M57 26h1M0 27h1M57 27h1M0 28h1M57 28h1M0 29h1M57 29h1M0 30h1M57 30h1M0 31h1M57 31h1M0 32h1M57 32h1M0 33h1M57 33h1M0 34h1M57 34h1M0 35h1M57 35h1M0 36h1M57 36h1M0 37h1M57 37h1M0 38h1M57 38h1M0 39h1M57 39h1M0 40h1M57 40h1M0 41h1M57 41h1M0 42h1M57 42h1M0 43h1M57 43h1M0 44h1M57 44h1M0 45h1M57 45h1M0 46h1M57 46h1M0 47h1M57 47h1M0 48h1M57 48h1M0 49h1M57 49h1M0 50h1M57 50h1M0 51h1M57 51h1M0 52h1M57 52h1M0 53h1M57 53h1M0 54h1M57 54h1M0 55h1M57 55h1M0 56h1M57 56h1M0 57h1M57 57h1M0 58h1M57 58h1M0 59h1M57 59h1M0 60h1M57 60h1M0 61h1M57 61h1M0 62h1M57 62h1M0 63h1M57 63h1M0 64h1M57 64h1M0 65h1M57 65h1M0 66h1M57 66h1M0 67h1M57 67h1M0 68h1M57 68h1M0 69h1M57 69h1M0 70h1M57 70h1M0 71h1M57 71h1M0 72h1M57 72h1M0 73h1M57 73h1M0 74h1M57 74h1M0 75h1M57 75h1M0 76h1M57 76h1M0 77h1M57 77h1M0 78h1M57 78h1M0 79h1M57 79h1M0 80h1M57 80h1M0 81h1M57 81h1M0 82h1M57 82h1M0 83h1M57 83h1M0 84h1M57 84h1M0 85h1M57 85h1M0 86h1M57 86h1M0 87h1M57 87h1M0 88h1M57 88h1M0 89h1M57 89h1M0 90h1M57 90h1M0 91h1M57 91h1M0 92h1M57 92h1M0 93h1M57 93h1M0 94h1M57 94h1M0 95h1M57 95h1M0 96h1M57 96h1M0 97h1M57 97h1M0 98h1M57 98h1M0 99h1M57 99h1M0 100h1M57 100h1M0 101h1M57 101h1M0 102h1M57 102h1M0 103h1M57 103h1M0 104h1M57 104h1M0 105h1M57 105h1M0 106h1M57 106h1M0 107h1M57 107h1M0 108h1M57 108h1M0 109h1M57 109h1M0 110h1M57 110h1M0 111h1M57 111h1M0 112h1M57 112h1M0 113h1M57 113h1M0 114h1M57 114h1M0 115h1M57 115h1M0 116h1M57 116h1M0 117h1M57 117h1M0 118h1M57 118h1M0 119h1M57 119h1M0 120h1M57 120h1M0 121h1M57 121h1M0 122h1M57 122h1M1 123h56"
      />
      <path
        stroke="#533d73"
        d="M1 1h56M1 2h1M1 3h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1M1 10h1M1 11h1M1 12h1M1 13h1M1 14h1M1 15h1M1 16h1M1 17h1M1 18h1M1 19h1M1 20h1M1 21h1M1 24h56M1 25h1M1 26h1M1 27h1M1 28h1M1 29h1M1 30h1M1 31h1M1 32h1M1 33h1M1 34h1M1 35h1M1 36h1M1 37h1M1 38h1M1 39h1M1 40h1M1 41h1M1 42h1M1 43h1M1 44h1M1 45h1M1 46h1M1 47h1M1 48h1M1 49h1M1 50h1M1 51h1M1 52h1M1 53h1M1 54h1M1 55h1M1 56h1M1 57h1M1 58h1M1 59h1M1 60h1M1 61h1M1 62h1M1 63h1M1 64h1M1 65h1M1 66h1M1 67h1M1 68h1M1 69h1M1 70h1M1 71h1M1 72h1M1 73h1M1 74h1M1 75h1M1 76h1M1 77h1M1 78h1M1 79h1M1 80h1M1 81h1M1 82h1M1 83h1M1 84h1M1 85h1M1 86h1M1 87h1M1 88h1M1 89h1M1 90h1M1 91h1M1 92h1M1 93h1M1 94h1M1 95h1M1 96h1M1 97h1M1 98h1M1 99h1M1 100h1M1 101h1M1 102h1M1 103h1M1 104h1M1 105h1M1 106h1M1 107h1M1 108h1M1 109h1M1 110h1M1 111h1M1 112h1M1 113h1M1 114h1M1 115h1M1 116h1M1 117h1M1 118h1M1 119h1M1 120h1M1 121h1"
      />
      <path
        stroke="#64567a"
        d="M2 2h55M2 3h55M2 4h2M20 4h37M2 5h1M21 5h2M26 5h1M28 5h1M32 5h1M34 5h2M38 5h19M2 6h1M21 6h3M25 6h2M28 6h2M31 6h2M34 6h2M38 6h19M2 7h1M21 7h3M25 7h2M28 7h2M31 7h2M35 7h1M38 7h19M2 8h1M21 8h36M2 9h1M21 9h36M2 10h1M21 10h36M2 11h1M21 11h36M2 12h1M21 12h36M2 13h1M21 13h36M2 14h1M21 14h36M2 15h1M21 15h36M2 16h1M21 16h36M2 17h1M21 17h2M55 17h2M2 18h1M21 18h2M55 18h2M2 19h2M20 19h37M2 20h55M2 21h55M2 25h55M2 26h55M2 27h55M2 28h55M2 29h55M2 30h55M2 31h55M2 32h55M2 33h55M2 34h55M2 35h55M2 36h55M2 37h55M2 38h55M2 39h55M2 40h55M2 41h55M2 42h55M2 43h55M2 44h55M2 45h55M2 46h55M2 47h55M2 48h55M2 49h55M2 50h55M2 51h55M2 52h55M2 53h55M2 54h55M2 55h55M2 56h55M2 57h55M2 58h55M2 59h55M2 60h55M2 61h55M2 62h55M2 63h55M2 64h55M2 65h55M2 66h55M2 67h55M2 68h55M2 69h55M2 70h55M2 71h55M2 72h55M2 73h55M2 74h55M2 75h55M2 76h55M2 77h55M2 78h55M2 79h55M2 80h55M2 81h55M2 82h55M2 83h55M2 84h55M2 85h55M2 86h55M2 87h55M2 88h55M2 89h55M2 90h55M2 91h55M2 92h55M2 93h55M2 94h55M2 95h4M52 95h5M2 96h3M53 96h4M2 97h3M53 97h4M2 98h3M53 98h4M2 99h3M53 99h4M2 100h3M53 100h4M2 101h3M53 101h4M2 102h3M53 102h4M2 103h3M53 103h4M2 104h3M53 104h4M2 105h4M52 105h5M2 106h55M2 107h55M2 108h4M52 108h5M2 109h3M53 109h4M2 110h3M53 110h4M2 111h3M53 111h4M2 112h3M53 112h4M2 113h3M53 113h4M2 114h3M53 114h4M2 115h3M53 115h4M2 116h3M53 116h4M2 117h3M53 117h4M2 118h4M52 118h5M2 119h55M2 120h55M2 121h55"
      />
      <path
        stroke="#2d0400"
        d="M4 4h16M3 5h1M20 5h1M3 6h1M7 6h2M10 6h2M13 6h2M16 6h2M20 6h1M3 7h1M6 7h1M9 7h1M12 7h1M15 7h1M18 7h1M20 7h1M3 8h1M6 8h1M17 8h1M20 8h1M3 9h1M6 9h1M17 9h1M20 9h1M3 10h1M5 10h1M18 10h1M20 10h1M3 11h1M20 11h1M3 12h1M20 12h1M3 13h1M20 13h1M3 14h1M20 14h1M3 15h1M20 15h1M3 16h1M20 16h1M3 17h1M20 17h1M3 18h1M20 18h1M4 19h16"
      />
      <path
        stroke="#e2f0b2"
        d="M4 5h16M4 6h3M9 6h1M12 6h1M15 6h1M18 6h2M4 7h2M19 7h1M4 8h2M18 8h2M4 9h2M18 9h2M4 10h1M19 10h1M4 11h1M19 11h1M4 12h1M19 12h1M4 13h1M19 13h1M4 14h1M18 14h2M4 15h1M18 15h2M4 16h2M18 16h2M4 17h3M17 17h3M4 18h4M16 18h4"
      />
      <path
        stroke="#000000"
        d="M23 5h3M27 5h1M29 5h3M33 5h1M36 5h2M24 6h1M27 6h1M30 6h1M33 6h1M36 6h1M24 7h1M27 7h1M30 7h1M33 7h2M36 7h2"
      />
      <path stroke="#5d2822" d="M37 6h1" />
      <path
        stroke="#85261c"
        d="M7 7h1M7 8h2M7 9h1M6 10h1M6 11h1M6 12h1M6 13h1M6 14h1M6 15h1"
      />
      <path stroke="#ae4f46" d="M8 7h1M10 7h2M13 7h2M16 7h2M11 8h3M15 8h2" />
      <path
        stroke="#8c3a31"
        d="M9 8h2M14 8h1M8 9h9M8 10h8M17 10h1M7 11h3M15 11h3M7 12h1M17 12h1"
      />
      <path stroke="#eeff61" d="M7 10h1M16 10h1M13 11h1" />
      <path
        stroke="#000101"
        d="M5 11h1M18 11h1M5 12h1M18 12h1M5 13h1M18 13h1M5 14h1M7 14h1M5 15h1"
      />
      <path stroke="#700e05" d="M10 11h2M14 11h1M8 12h2M15 12h2M7 13h1" />
      <path stroke="#fffcfd" d="M12 11h1" />
      <path
        stroke="#c28b63"
        d="M10 12h5M8 13h2M15 13h2M16 14h1M16 15h1M16 16h1M10 18h2"
      />
      <path
        stroke="#f4d4b5"
        d="M10 13h1M12 13h2M8 14h3M12 14h2M15 14h1M8 15h2M12 15h2M8 16h8M8 17h8"
      />
      <path stroke="#0c0834" d="M11 13h1M14 13h1M11 14h1M14 14h1" />
      <path stroke="#393603" d="M17 13h1M6 16h1" />
      <path
        stroke="#341b08"
        d="M17 14h1M17 15h1M17 16h1M7 17h1M16 17h1M8 18h2M14 18h2"
      />
      <path stroke="#e8c18e" d="M7 15h1M7 16h1" />
      <path stroke="#fffcf9" d="M10 15h1M15 15h1" />
      <path stroke="#2819be" d="M11 15h1M14 15h1" />
      <path stroke="#21273d" d="M23 17h32" />
      <path stroke="#810000" d="M12 18h2" />
      <path stroke="#2c303f" d="M23 18h32" />
      <path stroke="#736589" d="M1 22h56M1 122h56" />
      <path
        stroke="#6e5d8a"
        d="M6 95h46M5 96h48M5 97h48M5 98h48M5 99h48M5 100h48M5 101h48M5 102h48M5 103h48M5 104h48M6 105h46M6 108h46M5 109h48M5 110h48M5 111h48M5 112h48M5 113h48M5 114h48M5 115h48M5 116h48M5 117h48M6 118h46"
      />
    </svg>
  );
};

export const JobTitle_InternSvg = () => {
  return (
    <svg
      style={{
        display: "block",
        width: `calc(23px * var(--elevator-menu-pixel-size)`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 23 5"
      shapeRendering="crispEdges"
    >
      <path
        stroke="#ffffff"
        d="M0 0h3M4 0h2M8 0h3M12 0h3M16 0h3M20 0h2M1 1h1M4 1h1M6 1h1M9 1h1M12 1h1M16 1h1M18 1h1M20 1h1M22 1h1M1 2h1M4 2h1M6 2h1M9 2h1M12 2h2M16 2h2M20 2h1M22 2h1M1 3h1M4 3h1M6 3h1M9 3h1M12 3h1M16 3h1M18 3h1M20 3h1M22 3h1M0 4h3M4 4h1M6 4h1M9 4h1M12 4h3M16 4h1M18 4h1M20 4h1M22 4h1"
      />
    </svg>
  );
};

export const JobTitle_JuniorSvg = () => {
  return (
    <svg
      style={{
        display: "block",
        width: `calc(25px * var(--elevator-menu-pixel-size)`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 25 5"
      shapeRendering="crispEdges"
    >
      <path
        stroke="#ffffff"
        d="M2 0h1M4 0h1M6 0h1M8 0h2M12 0h3M16 0h3M20 0h3M2 1h1M4 1h1M6 1h1M8 1h1M10 1h1M13 1h1M16 1h1M18 1h1M20 1h1M22 1h1M2 2h1M4 2h1M6 2h1M8 2h1M10 2h1M13 2h1M16 2h1M18 2h1M20 2h2M0 3h1M2 3h1M4 3h1M6 3h1M8 3h1M10 3h1M13 3h1M16 3h1M18 3h1M20 3h1M22 3h1M0 4h3M4 4h3M8 4h1M10 4h1M12 4h3M16 4h3M20 4h1M22 4h1"
      />
    </svg>
  );
};

export const JobTitle_DirectorSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        width: `calc(31px * var(--elevator-menu-pixel-size)`,
      }}
      viewBox="0 -0.5 31 5"
    >
      <path
        stroke="#ffffff"
        d="M0 0h2M4 0h3M8 0h3M12 0h3M16 0h3M20 0h3M24 0h3M28 0h3M0 1h1M2 1h1M5 1h1M8 1h1M10 1h1M12 1h1M16 1h1M21 1h1M24 1h1M26 1h1M28 1h1M30 1h1M0 2h1M2 2h1M5 2h1M8 2h2M12 2h2M16 2h1M21 2h1M24 2h1M26 2h1M28 2h2M0 3h1M2 3h1M5 3h1M8 3h1M10 3h1M12 3h1M16 3h1M21 3h1M24 3h1M26 3h1M28 3h1M30 3h1M0 4h2M4 4h3M8 4h1M10 4h1M12 4h3M16 4h3M21 4h1M24 4h3M28 4h1M30 4h1"
      />
    </svg>
  );
};

export const JobTitle_CeoSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 11 5"
      style={{
        display: "block",
        width: `calc(11px * var(--elevator-menu-pixel-size)`,
      }}
    >
      <path
        stroke="#ffffff"
        d="M0 0h3M4 0h3M8 0h3M0 1h1M4 1h1M8 1h1M10 1h1M0 2h1M4 2h2M8 2h1M10 2h1M0 3h1M4 3h1M8 3h1M10 3h1M0 4h3M4 4h3M8 4h3"
      />
    </svg>
  );
};

export const FloorTextSvg = ({ floor }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'calc(4px * var(--elevator-menu-pixel-size))'
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -0.5 25 7"
        style={{
          display: "block",
          width: `calc(25px * var(--elevator-menu-pixel-size)`,
          marginTop: '1px'
        }}
      >
        <path
          stroke="#000000"
          d="M0 0h8M9 0h16M0 1h1M5 1h1M7 1h1M9 1h1M14 1h1M19 1h1M24 1h1M0 2h1M2 2h4M7 2h1M9 2h1M11 2h2M14 2h1M16 2h2M19 2h1M21 2h2M24 2h1M0 3h1M5 3h1M7 3h1M9 3h1M11 3h2M14 3h1M16 3h2M19 3h1M23 3h2M0 4h1M2 4h4M7 4h3M11 4h2M14 4h1M16 4h2M19 4h1M21 4h2M24 4h1M0 5h1M2 5h1M5 5h1M9 5h1M14 5h1M19 5h1M21 5h2M24 5h1M0 6h3M5 6h20"
        />
        <path stroke="#fff4cc" d="M1 1h4M6 1h1M10 1h4M15 1h4M20 1h4" />
        <path
          stroke="#fbf005"
          d="M1 2h1M6 2h1M10 2h1M13 2h1M15 2h1M18 2h1M20 2h1M23 2h1M1 3h4M6 3h1M10 3h1M13 3h1M15 3h1M18 3h1M20 3h3M1 4h1M6 4h1M10 4h1M13 4h1M15 4h1M18 4h1M20 4h1M23 4h1"
        />
        <path stroke="#f8c200" d="M1 5h1M6 5h3M10 5h4M15 5h4M20 5h1M23 5h1" />
      </svg>
      <PixelNumber number={floor[1]} toScale />
    </div>
  );
};

export const CustomTextSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 31 7"
      style={{
        display: "block",
        width: `calc(31px * var(--elevator-menu-pixel-size)`,
      }}
    >
      <path
        stroke="#000000"
        d="M0 0h30M0 1h1M5 1h1M7 1h2M10 1h1M15 1h1M19 1h1M24 1h1M27 1h1M29 1h2M0 2h1M2 2h4M7 2h2M10 2h1M12 2h5M18 2h2M21 2h2M24 2h1M26 2h1M28 2h1M30 2h1M0 3h1M2 3h1M5 3h1M7 3h2M10 3h1M15 3h2M18 3h2M21 3h2M24 3h1M26 3h1M28 3h1M30 3h1M0 4h1M2 4h4M7 4h2M10 4h4M15 4h2M18 4h2M21 4h2M24 4h1M26 4h1M28 4h1M30 4h1M0 5h1M5 5h1M10 5h1M15 5h2M18 5h2M24 5h1M26 5h1M28 5h1M30 5h1M0 6h31"
      />
      <path
        stroke="#fff4cc"
        d="M1 1h4M6 1h1M9 1h1M11 1h4M16 1h3M20 1h4M25 1h2M28 1h1"
      />
      <path
        stroke="#fbf005"
        d="M1 2h1M6 2h1M9 2h1M11 2h1M17 2h1M20 2h1M23 2h1M25 2h1M27 2h1M29 2h1M1 3h1M6 3h1M9 3h1M11 3h4M17 3h1M20 3h1M23 3h1M25 3h1M27 3h1M29 3h1M1 4h1M6 4h1M9 4h1M14 4h1M17 4h1M20 4h1M23 4h1M25 4h1M27 4h1M29 4h1"
      />
      <path
        stroke="#f8c200"
        d="M1 5h4M6 5h4M11 5h4M17 5h1M20 5h4M25 5h1M27 5h1M29 5h1"
      />
    </svg>
  );
};

/* These are copied over from the other file, but with dedicated menu css var for sizing */
/* YOLO. */
/* I am the worst software engineer ever. */

export const OneSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 5 7"
      shapeRendering="crispEdges"
      style={{
        display: "block",
        width: `calc(5px * var(--elevator-menu-pixel-size)`,
      }}
    >
      <path
        stroke="#000000"
        d="M1 0h3M0 1h2M3 1h1M0 2h1M3 2h1M1 3h1M3 3h1M0 4h2M3 4h2M0 5h1M4 5h1M0 6h5"
      />
      <path stroke="#fff4cc" d="M2 1h1" />
      <path stroke="#fbf005" d="M1 2h2M2 3h1M2 4h1" />
      <path stroke="#f8c200" d="M1 5h3" />
    </svg>
  );
};

export const TwoSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 5 7"
      shapeRendering="crispEdges"
      style={{
        display: "block",
        width: `calc(5px * var(--elevator-menu-pixel-size)`,
      }}
    >
      <path
        stroke="#000000"
        d="M0 0h5M0 1h1M4 1h1M0 2h3M4 2h1M0 3h1M4 3h1M0 4h1M2 4h3M0 5h1M4 5h1M0 6h5"
      />
      <path stroke="#fff4cc" d="M1 1h3" />
      <path stroke="#fbf005" d="M3 2h1M1 3h3M1 4h1" />
      <path stroke="#f8c200" d="M1 5h3" />
    </svg>
  );
};

export const ThreeSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 5 7"
      shapeRendering="crispEdges"
      style={{
        display: "block",
        width: `calc(5px * var(--elevator-menu-pixel-size)`,
      }}
    >
      <path
        stroke="#000000"
        d="M0 0h5M0 1h1M4 1h1M0 2h3M4 2h1M0 3h1M4 3h1M0 4h3M4 4h1M0 5h1M4 5h1M0 6h5"
      />
      <path stroke="#fff4cc" d="M1 1h3" />
      <path stroke="#fbf005" d="M3 2h1M1 3h3M3 4h1" />
      <path stroke="#f8c200" d="M1 5h3" />
    </svg>
  );
};

export const FourSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 5 7"
      shapeRendering="crispEdges"
      style={{
        display: "block",
        width: `calc(5px * var(--elevator-menu-pixel-size)`,
      }}
    >
      <path
        stroke="#000000"
        d="M0 0h5M0 1h1M2 1h1M4 1h1M0 2h1M2 2h1M4 2h1M0 3h1M4 3h1M0 4h3M4 4h1M2 5h1M4 5h1M2 6h3"
      />
      <path stroke="#fff4cc" d="M1 1h1M3 1h1" />
      <path stroke="#fbf005" d="M1 2h1M3 2h1M1 3h3M3 4h1" />
      <path stroke="#f8c200" d="M3 5h1" />
    </svg>
  );
};

export const FiveSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 5 7"
      shapeRendering="crispEdges"
      style={{
        display: "block",
        width: `calc(5px * var(--elevator-menu-pixel-size)`,
      }}
    >
      <path
        stroke="#000000"
        d="M0 0h5M0 1h1M4 1h1M0 2h1M2 2h3M0 3h1M4 3h1M0 4h3M4 4h1M0 5h1M4 5h1M0 6h5"
      />
      <path stroke="#fff4cc" d="M1 1h3" />
      <path stroke="#fbf005" d="M1 2h1M1 3h3M3 4h1" />
      <path stroke="#f8c200" d="M1 5h3" />
    </svg>
  );
};

export const SixSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 5 7"
      shapeRendering="crispEdges"
      style={{
        display: "block",
        width: `calc(5px * var(--elevator-menu-pixel-size)`,
      }}
    >
      <path
        stroke="#000000"
        d="M0 0h5M0 1h1M4 1h1M0 2h1M2 2h3M0 3h1M4 3h1M0 4h1M2 4h1M4 4h1M0 5h1M4 5h1M0 6h5"
      />
      <path stroke="#fff4cc" d="M1 1h3" />
      <path stroke="#fbf005" d="M1 2h1M1 3h3M1 4h1M3 4h1" />
      <path stroke="#f8c200" d="M1 5h3" />
    </svg>
  );
};

export const SevenSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 5 7"
      shapeRendering="crispEdges"
      style={{
        display: "block",
        width: `calc(5px * var(--elevator-menu-pixel-size)`,
      }}
    >
      <path
        stroke="#000000"
        d="M0 0h5M0 1h1M4 1h1M0 2h3M4 2h1M2 3h1M4 3h1M2 4h1M4 4h1M2 5h1M4 5h1M2 6h3"
      />
      <path stroke="#fff4cc" d="M1 1h3" />
      <path stroke="#fbf005" d="M3 2h1M3 3h1M3 4h1" />
      <path stroke="#f8c200" d="M3 5h1" />
    </svg>
  );
};

export const EightSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 5 7"
      shapeRendering="crispEdges"
      style={{
        display: "block",
        width: `calc(5px * var(--elevator-menu-pixel-size)`,
      }}
    >
      <path
        stroke="#000000"
        d="M0 0h5M0 1h1M4 1h1M0 2h1M2 2h1M4 2h1M0 3h1M4 3h1M0 4h1M2 4h1M4 4h1M0 5h1M4 5h1M0 6h5"
      />
      <path stroke="#fff4cc" d="M1 1h3" />
      <path stroke="#fbf005" d="M1 2h1M3 2h1M1 3h3M1 4h1M3 4h1" />
      <path stroke="#f8c200" d="M1 5h3" />
    </svg>
  );
};

export const NineSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 5 7"
      shapeRendering="crispEdges"
      style={{
        display: "block",
        width: `calc(5px * var(--elevator-menu-pixel-size)`,
      }}
    >
      <path
        stroke="#000000"
        d="M0 0h5M0 1h1M4 1h1M0 2h1M2 2h1M4 2h1M0 3h1M4 3h1M0 4h3M4 4h1M2 5h1M4 5h1M2 6h3"
      />
      <path stroke="#fff4cc" d="M1 1h3" />
      <path stroke="#fbf005" d="M1 2h1M3 2h1M1 3h3M3 4h1" />
      <path stroke="#f8c200" d="M3 5h1" />
    </svg>
  );
};
