import { atom } from 'jotai';

export const countAtom = atom(0);

countAtom.debugLabel = 'Count';
