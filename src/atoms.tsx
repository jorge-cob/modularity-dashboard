import { atom } from 'jotai';
import { Module } from "./types";

export const availableModulesAtom = atom<Module[]>([]);
export const activeModulesAtom = atom<Module[]>([]);
