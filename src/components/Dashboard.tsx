import { useRef, useEffect } from "react";
import { useAtom } from "jotai";
import { availableModulesAtom, activeModulesAtom } from "../atoms";
import { animations } from "@formkit/drag-and-drop";
import { dragAndDrop } from "@formkit/drag-and-drop/react";
import ModulesBoard from "./ModulesBoard";

export default function Dashboard() {

  const [availableModules, setAvailableModules] = useAtom(availableModulesAtom);
  const [activeModules, setActiveModules] = useAtom(activeModulesAtom);

  const availableModulesRef = useRef(null);
  const activeModulesRef = useRef(null);

  useEffect(() => {
    if (!availableModulesRef.current) return;
    dragAndDrop({
      parent: availableModulesRef,
      state: [availableModules, setAvailableModules], 
      group: "modulesList",
      plugins: [animations()],
      draggable: (card) => card.id !== "no-drag"
             
    });
  }, [availableModules, setAvailableModules]);

  useEffect(() => {
    if (!activeModulesRef.current) return;
    dragAndDrop({
      parent: activeModulesRef,
      state: [activeModules, setActiveModules], 
      group: "modulesList",
      plugins: [animations()],
      draggable: (card) => card.id !== "no-drag"
    });
  }, [activeModules, setActiveModules]);

  return (
    <div className="kanban-board">
      <ModulesBoard
        modules={activeModules}
        modulesRef={activeModulesRef}
      />
      <ModulesBoard
        modules={availableModules}
        modulesRef={availableModulesRef}
        button
      /> 
    </div>
  );
};
