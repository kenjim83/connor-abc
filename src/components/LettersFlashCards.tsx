import { Box, Button, Typography } from "@mui/material";
import { lettersAtom, isRandomAtom } from "../atoms/letters";
import { useAtom } from "jotai";
import { useState } from "react";

function getRandomIndex(letters: string = '', currIndex: number): number {
   const length = letters.length;
   const newIndex = Math.floor( Math.random() * length );
   return newIndex === currIndex ? getRandomIndex(letters, currIndex) : newIndex;
}

function LettersFlashCards() {
  const [isRandomMode] = useAtom(isRandomAtom);
  const [selectedLetters] = useAtom(lettersAtom);
  const [currIndex, setCurrIndex] = useState(0);
  const currLetter = selectedLetters[currIndex];

  const onNextClick = () => {
    if (isRandomMode) {
      setCurrIndex(getRandomIndex(selectedLetters, currIndex));
      return;
    }

    if (currIndex + 1 >= selectedLetters.length) {
      // restart at 0
      setCurrIndex(0);
    } else {
      // increment
      setCurrIndex(currIndex + 1);
    }
  }

  return (
    <>
      <Typography fontSize={230}>{currLetter?.toUpperCase()}{currLetter}</Typography>
      <Box sx={{ width: '100%' }}>
        <Button sx={{ width: '100%' }} size="large" variant="contained" onClick={onNextClick}>Next</Button>
      </Box>
    </>
  )
}

export default LettersFlashCards;