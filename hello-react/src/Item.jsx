import 
{ 
    ListItem,
     IconButton,
      ListItemText,
       ListItemIcon 
} from "@mui/material";

import 
{
  Delete as DeleteIcon,
  SquareOutlined as TodoIcon,
  Check as DoneIcon,
} from "@mui/icons-material";

export default function Item({ item, del, toggle }) {
  return <ListItem
  secondaryAction={
    <IconButton onClick={() => del(item.id)}>
      <DeleteIcon color="error"/>
    </IconButton>
  }
  >
    <ListItemIcon>
      <IconButton onClick={() => {toggle(item.id)}}>
        {item.done ? <DoneIcon/> : <TodoIcon/> }
      </IconButton>
    </ListItemIcon>
    <ListItemText>
      {item.name}
    </ListItemText>
  </ListItem>
}