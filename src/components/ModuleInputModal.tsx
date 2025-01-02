import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { useSetAtom } from "jotai";
import { availableModulesAtom } from '../atoms';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'lightgray',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModuleInputModal({open, setOpen}: {open: boolean, setOpen: (open: boolean) => void}) {
  const handleClose = () => setOpen(false);
  const setAvailableModules = useSetAtom(availableModulesAtom);
  const [newModuleName, setNewModuleName] = useState('');

  const handleNewModule = () => {
    const newModule = {
      id: crypto.randomUUID(),
      name: newModuleName
    }
    setAvailableModules((prev) => [...prev, newModule]);
    handleClose();
  }
    
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField
          required
          id="outlined-required"
          label="Module name"
          onChange={(e) => setNewModuleName(e.target.value)}
        />
        <Button onClick={handleNewModule}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}