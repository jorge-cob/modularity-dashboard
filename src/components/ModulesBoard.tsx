
import { Module } from "../types";
import ModuleCard from "./ModuleCard";
import AddIcon from '@mui/icons-material/Add';
import ModuleInputModal from "./ModuleInputModal";
import { useState } from "react";

export default function ModulesBoard({modules, modulesRef, button}: {modules: Module[], modulesRef: React.RefObject<HTMLUListElement>, button?: boolean}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-container">
      <ul ref={modulesRef} className="module-list" >
        {modules.map((module) => (
          <ModuleCard key={module.id}>
            <p>{module.name}</p>
          </ModuleCard>
        ))}
        {button && 
          <ModuleCard id="no-drag" key="no-drag" onClick={() => setOpen(!open)}>
            <AddIcon  sx={{height: '80px', width: '80px' }} />
          </ModuleCard>
        }
      </ul>
      <ModuleInputModal open={open} setOpen={setOpen} />

    </div>
    
  );
};