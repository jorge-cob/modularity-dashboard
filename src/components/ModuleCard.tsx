import Card from '@mui/material/Card';
const ModuleCard = ({id, onClick, children}: {id?: string , onClick?: () => void, children: React.ReactNode} ) => {
  return (
    <li className="card-list-item" id={id} onClick={onClick}>
      <Card className='card'>
        {children}
      </Card>
    </li>
  );  
}

export default ModuleCard;