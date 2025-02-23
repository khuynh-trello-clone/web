import AddCardIcon from '@mui/icons-material/AddCard'
import Cloud from '@mui/icons-material/Cloud'
import CommentIcon from '@mui/icons-material/Comment'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import GroupIcon from '@mui/icons-material/Group'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: theme => theme.trello.boardContentHeight,
        bgcolor: theme =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        p: '10px 0'
      }}
    >
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': {
            m: 2
          }
        }}
      >
        {[...Array(10)].map((_, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '300px',
              maxWidth: '300px',
              bgcolor: theme =>
                theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
              ml: 2,
              borderRadius: '6px',
              height: 'fit-content',
              maxHeight: theme =>
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
            }}
          >
            {/* Header of Column */}
            <Box
              sx={{
                height: COLUMN_HEADER_HEIGHT,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Column Title
              </Typography>
              {/* Dropdown */}
              <Box>
                <Tooltip title="More options">
                  <ExpandMoreIcon
                    id="basic-column-dropdown"
                    aria-controls={
                      open ? 'basic-menu-column-dropdown' : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ color: 'text.primary', cursor: 'pointer' }}
                  />
                </Tooltip>
                <Menu
                  id="basic-menu-column-dropdown"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-column-dropdown'
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add new card</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                  </MenuItem>

                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Archive this column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForeverIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Remove this column</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>

            {/* List Card */}
            <Box
              sx={{
                p: '0 5px',
                m: '0 5px',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                overflowX: 'hidden',
                overflowY: 'auto',
                maxHeight: theme =>
                  `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                    5
                  )} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#ced0da'
                },
                '&::-webkit-scrollbar-thumb: hover': {
                  backgroundColor: '#bfc2cf'
                }
              }}
            >
              {/* Card items */}
              {/* Fake 20 cards */}
              {[...Array(10)].map((_, index) => (
                <Card
                  sx={{
                    cursor: 'pointer',
                    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                    overflow: 'unset'
                  }}
                  key={index}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://trungquandev.com/wp-content/uploads/2024/03/programming-background-with-person-working-with-codes-computer-trungquandev-codetq.jpeg"
                    title="green iguana"
                  />
                  <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                    <Typography>Khuynh Dev</Typography>
                  </CardContent>
                  <CardActions sx={{ p: '0 4px 8px' }}>
                    <Button size="small" startIcon={<GroupIcon />}>
                      20
                    </Button>
                    <Button size="small" startIcon={<CommentIcon />}>
                      36
                    </Button>
                    <Button size="small" startIcon={<VisibilityIcon />}>
                      18
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Box>

            {/* Footer of Column */}
            <Box
              sx={{
                height: COLUMN_FOOTER_HEIGHT,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button startIcon={<AddCardIcon />}>Add new card</Button>
              <Tooltip title="Drag to reorder">
                <DragHandleIcon sx={{ cursor: 'pointer' }} />
              </Tooltip>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default BoardContent
