import React, { useState } from "react";
import {
  Box,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField,
  Stack
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

const AddItem = ({ createItem, itemName, btnText }) => {
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function handleClose() {
    setExpanded(false);
    setName("");
  }

  function handleCreate() {
    if (name) {
      createItem(name);
      setExpanded(false);
      setName("");
    }
  }

  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ boxShadow: "0px 1px 0px grey" }}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Button
            startIcon={<AddIcon />}
            sx={{ width:250, height: "fit-content", wordBreak: "break-word" ,
            color:'var(--light-red)'
        }}
          >
            {expanded ? `Enter ${itemName} Name` : `Add  ${itemName}`}
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            autoFocus
            value={name}
            margin="dense"
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <Stack direction='row' spacing={2} padding={2}>
            <Button onClick={handleCreate} variant="contained" sx={{backgroundColor:'var(--light-red)'}}>
              {btnText}
            </Button>
            <Button onClick={handleClose} sx={{color:'grey'}}>X</Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AddItem;
