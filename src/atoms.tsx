import { Module } from "./types";
import { atomWithStorage, createJSONStorage } from 'jotai/utils'


const storage = createJSONStorage<Module[]>(() => sessionStorage);

export const availableModulesAtom = atomWithStorage<Module[]>('availableModules', [], storage)
export const activeModulesAtom = atomWithStorage<Module[]>('activeModules', [], storage)
