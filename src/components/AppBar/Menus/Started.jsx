import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import React from 'react'

function Started() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button
        sx={{ color: 'white' }}
        id="basic-button-started"
        aria-controls={open ? 'basic-menu-started' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        Started
      </Button>
      <Menu
        id="basic-menu-started"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-started'
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <StarBorderIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Started Board 01</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <StarBorderIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Started Board 02</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>View all started boards</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Started
