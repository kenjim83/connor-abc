import { atom } from 'jotai';

export const ALL_LETTERS = 'abcdefghijklmnopqrstuvwxyz';

export const lettersAtom = atom(localStorage.getItem('selectedLetters') ?? ALL_LETTERS);

export const lettersAtomLocalStorage = atom(
  (get) => get(lettersAtom),
  (_, set, newStr: string) => {
    set(lettersAtom, newStr)
    localStorage.setItem('selectedLetters', newStr)
  },
)


export const isRandomAtom = atom(false);

export const isDrawerOpenAtom = atom(false);

