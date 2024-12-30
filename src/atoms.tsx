import { Atom, atom } from 'jotai';
import { Module } from "./types";

export const availableModulesAtom: Atom<Module[]> = atom([
  {id: "1", name: "Schedule perm"},
  {id: "2", name: "Rewind VHS tapes"},
  {id: "3", name: "Make change for the arcade"},
  {id: "4", name: "Get disposable camera developed"},
  {id: "5", name: "Learn C++"},
  {id: "6", name: "Return Nintendo Power Glove"},

]);
export const activeModulesAtom: Atom<Module[]> = atom([
  {id: "7", name: "active shit nigga"},
]);