import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddModulesButton = () => {
  return (
    <IconButton 
      sx={{ position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)'
      }}
      color="primary"
      size="large"
    >
      <AddIcon sx={{ width: '80px', height: '80px'}}/>
    </IconButton>
  );
}

export default AddModulesButton