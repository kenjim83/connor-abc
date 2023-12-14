import { Box, Button } from "@mui/material";

import { lettersAtomLocalStorage, ALL_LETTERS, isDrawerOpenAtom } from "../atoms/letters";
import { useAtom } from "jotai";
import useKeyPress from "../hooks/useKeyPress";
import { useEffect } from "react";

function SelectLetters() {
  const [selectedLetters, setSelectedLetters] = useAtom(lettersAtomLocalStorage);
  const isDownPressed = useKeyPress('ArrowDown');
  const [_, setIsDrawerOpen] = useAtom(isDrawerOpenAtom);

  useEffect(() => {
    if (isDownPressed) {
      setIsDrawerOpen(false);
      return;
    }
  }, [isDownPressed]);

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '10px',
    }}>
      {ALL_LETTERS.split('').map(letter => {
        return (
          <Button
            disableElevation
            key={letter}
            color='primary'
            variant={selectedLetters.includes(letter) ? 'contained' : 'outlined'}
            onClick={() => {
              let newLetters = selectedLetters + '';
              const foundIndex = newLetters.indexOf(letter);
              if (foundIndex > -1) {
                // If in selected letters, remove
                newLetters = newLetters.replace(letter, '');
              } else {
                // If not in selected letters, add it and alphabetize
                newLetters = newLetters + letter;
                newLetters = newLetters.split('').sort().join('');
              }
              setSelectedLetters(newLetters);
            }}
          >
            {letter}
          </Button>
          )
      })}
      <Button onClick={() => setSelectedLetters(ALL_LETTERS)}>All</Button>
      <Button onClick={() => setSelectedLetters('')}>None</Button>
    </Box>
    )
}

export default SelectLetters;