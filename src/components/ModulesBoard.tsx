
import { Module } from "../types";
import Card from "./Card";
import AddIcon from '@mui/icons-material/Add';
export default function ModulesBoard({modules, modulesRef, button}: {modules: Module[], modulesRef: React.RefObject<HTMLUListElement>, button?: boolean}) {


  return (
    <div className="card-container">
      <ul ref={modulesRef} className="module-list" >
        {modules.map((module) => (
          <Card key={module.id}>
            {module.name}
          </Card>
        ))}
        {button && 
          <Card id="no-drag" key="no-drag" onClick={() => console.log("click")}>
            <AddIcon  sx={{height: '80px', width: '80px' }} />
          </Card>
        }
      </ul>
 
    </div>
    
  );
};