
const Card = ({children}: {children: React.ReactNode} ) => {
  return (
    <li className="card" >
      {children}
    </li>
  );  
}

export default Card;