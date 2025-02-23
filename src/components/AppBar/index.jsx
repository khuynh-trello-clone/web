import AppsIcon from '@mui/icons-material/Apps'
import CloseIcon from '@mui/icons-material/Close'
import HelpOutline from '@mui/icons-material/HelpOutline'
import LibaryAddIcon from '@mui/icons-material/LibraryAdd'
import NotificationsNone from '@mui/icons-material/NotificationsNone'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import SvgIcon from '@mui/material/SvgIcon'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { ReactComponent as TrelloLogo } from '~/assets/trello.svg'
import ModeSelect from '~/components/ModeSelect'
import Profiles from './Menus/Profiles'
import Recent from './Menus/Recent'
import Started from './Menus/Started'
import Templates from './Menus/Templates'
import Workspaces from './Menus/Workspaces'

function AppBar() {
  const [search, setSearch] = useState('')

  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: theme => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: theme =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1265c0'
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <AppsIcon
          sx={{
            color: 'white'
          }}
        />

        <Box display="flex" alignItems="center" gap={0.5} color="white">
          <SvgIcon
            component={TrelloLogo}
            inheritViewBox
            fontSize="small"
            sx={{
              color: 'white'
            }}
          />
          <Typography variant="h6">Trello</Typography>
        </Box>

        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex'
            },
            gap: 1
          }}
        >
          <Workspaces />
          <Recent />
          <Started />
          <Templates />
        </Box>

        <Button
          sx={{
            color: 'white'
          }}
          startIcon={<LibaryAddIcon />}
        >
          Create
        </Button>
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          id="outlined-search"
          label="Search ..."
          type="text"
          size="small"
          value={search}
          onChange={e => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <CloseIcon
                  size="small"
                  sx={{
                    color: search ? 'white' : 'transparent',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSearch('')}
                />
              </InputAdornment>
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
        />
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNone
              sx={{
                color: 'white'
              }}
            />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: 'pointer', color: 'white' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
