import { useKeyPress } from "@/hooks/useKeyPress";
import { useEffect, useState } from "react";
import { capitalLetterComponents } from "./PixelLetters";
import styles from './PixelSentence.module.css';

export default function PixelSentence({
  centeredText = false,
  textString = "This is the default text.",
  onDone,
  preDelayMs = 10,
  isDone,
}) {
  const totalLength = textString.split(" ").join("").length;
  const [revealedCount, setRevealedCount] = useState(-1);
  const [canStart, setCanStart] = useState(false);

  useEffect(() => {
    setCanStart(false);
    setRevealedCount(-1)
    const timeout = setTimeout(() => {
      setCanStart(true);
    }, preDelayMs);
    return () => {
      clearTimeout(timeout);
    };
  }, [textString, preDelayMs]);

  useEffect(() => {

    if (!canStart) {
      setRevealedCount(-1);
      return;
    }
    if (revealedCount >= totalLength - 1 || isDone) { // Check if isDone
      return;
    }

    const delay = 80;
    const timeout = setTimeout(() => {
      setRevealedCount(revealedCount + 1);
      // sounds.playSfx(SFX.TALK_BLIP);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [revealedCount, totalLength, canStart, isDone]); // Add isDone to dependencies

  const handleUserInteractWithPrompt = () => {
    if (revealedCount >= totalLength - 1) {
      setRevealedCount(-1);
      onDone();
      return;
    }
    setRevealedCount(totalLength);
  };

  useKeyPress("Enter", () => {
    handleUserInteractWithPrompt();
  });

  const words = textString.toUpperCase().split(" ");
  let globalCount = 0;

  return (
    <div className={styles.sentence} onClick={handleUserInteractWithPrompt}>
      <div
        className={styles.wordsContainer}
        style={{
          justifyContent: centeredText ? "center" : 'flex-start',
        }}
      >
        {words.map((wordString, i) => {
          return (
            <span className={styles.word} key={i}>
              {wordString.split("").map((char, i) => {
                globalCount += 1;
                return (
                  <span
                    style={{
                      opacity: revealedCount >= globalCount - 1 ? 1 : 0
                    }}
                    key={i}>
                    {capitalLetterComponents[char]}
                  </span>
                );
              })}
            </span>
          );
        })}
      </div>
    </div>
  );
}

