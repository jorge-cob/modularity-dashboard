
const Card = ({id, onClick, children}: {id?: string , onClick?: () => void, children: React.ReactNode} ) => {
  return (
    <li className="card" id={id} onClick={onClick}>
 
        {children}
      
      
    </li>
  );  
}

export default Card;