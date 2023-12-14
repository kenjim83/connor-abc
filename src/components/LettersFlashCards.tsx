import { Box, Button, Typography } from "@mui/material";
import { lettersAtomLocalStorage, isRandomAtom, isDrawerOpenAtom } from "../atoms/letters";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useKeyPress from "../hooks/useKeyPress";

enum Direction {
  Next,
  Prev,
}

function getRandomIndex(letters: string = '', currIndex: number): number {
   const length = letters.length;
   const newIndex = Math.floor( Math.random() * length );
   return newIndex === currIndex ? getRandomIndex(letters, currIndex) : newIndex;
}

function LettersFlashCards() {
  const isRightPressed = useKeyPress('ArrowRight');
  const isLeftPressed = useKeyPress('ArrowLeft');
  const isUpPressed = useKeyPress('ArrowUp');
  const [isRandomMode] = useAtom(isRandomAtom);
  const [selectedLetters] = useAtom(lettersAtomLocalStorage);
  const [_, setIsDrawerOpen] = useAtom(isDrawerOpenAtom);
  const [currIndex, setCurrIndex] = useState(0);
  const currLetter = selectedLetters[currIndex];

  const onArrowClick = (direction: Direction) => {
    if (isRandomMode) {
      setCurrIndex(getRandomIndex(selectedLetters, currIndex));
      return;
    }

    switch(direction) {
      case Direction.Next:
        if (currIndex + 1 >= selectedLetters.length) {
          // restart at 0
          setCurrIndex(0);
        } else {
          // increment
          setCurrIndex(currIndex + 1);
        }
        break;
      case Direction.Prev:
        if (currIndex <= 0) {
          // go to end
          setCurrIndex(selectedLetters.length - 1);
        } else {
          // decrement
          setCurrIndex(currIndex - 1);
        }
    }
  }

  useEffect(() => {
    if (isRightPressed) {
      onArrowClick(Direction.Next);
      return;
    }
    if (isLeftPressed) {
      onArrowClick(Direction.Prev);
      return;
    }
    if (isUpPressed) {
      setIsDrawerOpen(true);
      return;
    }
  }, [isRightPressed, isLeftPressed, isUpPressed]);

  return (
    <>
      <Box mb={10}>
        <Typography fontSize={230}>{currLetter?.toUpperCase()}{currLetter}</Typography>
      </Box>
      <Box display="flex" justifyContent="center" sx={{ width: '100%' }}>
      <Button
        disableElevation
        // sx={{ width: '100%' }}
        size="large"
        variant="contained"
        onClick={() => onArrowClick(Direction.Prev)}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        disableElevation
        sx={{ ml: 5 }}
        size="large"
        variant="contained"
        onClick={() => onArrowClick(Direction.Next)}
      >
        <ChevronRightIcon />
      </Button>
      </Box>
    </>
  )
}

export default LettersFlashCards;