
import { Module } from "../types";
import Card from "./Card";

export default function ModulesBoard({modules, modulesRef, button}: {modules: Module[], modulesRef: React.RefObject<HTMLUListElement>, button?: React.ReactNode}) {


  return (
    <div className="card-container">
      <ul ref={modulesRef} >
        {modules.map((module) => (
          <Card key={module.id}>
            {module.name}
          </Card>
        ))}
       
      </ul>
      {button && button}
    </div>
    
  );
};