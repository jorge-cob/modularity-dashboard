
import { Module } from "../types";
import Card from "./Card";
import AddIcon from '@mui/icons-material/Add';
import ModuleInputModal from "./ModuleInputModal";
import { useState } from "react";
export default function ModulesBoard({modules, modulesRef, button}: {modules: Module[], modulesRef: React.RefObject<HTMLUListElement>, button?: boolean}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-container">
      <ul ref={modulesRef} className="module-list" >
        {modules.map((module) => (
          <Card key={module.id}>
            {module.name}
          </Card>
        ))}
        {button && 
          <Card id="no-drag" key="no-drag" onClick={() => setOpen(!open)}>
            <AddIcon  sx={{height: '80px', width: '80px' }} />
          </Card>
        }
      </ul>
      <ModuleInputModal open={open} setOpen={setOpen} />

    </div>
    
  );
};