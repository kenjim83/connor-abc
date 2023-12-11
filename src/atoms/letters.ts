import { atom } from 'jotai';

export const ALL_LETTERS = 'abcdefghijklmnopqrstuvwxyz';

export const lettersAtom = atom(ALL_LETTERS);

export const isRandomAtom = atom(false);