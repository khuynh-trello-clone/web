import AppsIcon from '@mui/icons-material/Apps'
import HelpOutline from '@mui/icons-material/HelpOutline'
import LibaryAddIcon from '@mui/icons-material/LibraryAdd'
import NotificationsNone from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SvgIcon from '@mui/material/SvgIcon'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { ReactComponent as TrelloLogo } from '~/assets/trello.svg'
import ModeSelect from '~/components/ModeSelect'
import Profiles from './Menus/Profiles'
import Recent from './Menus/Recent'
import Started from './Menus/Started'
import Templates from './Menus/Templates'
import Workspaces from './Menus/Workspaces'

function AppBar() {
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
        overflowX: 'auto'
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <AppsIcon
          sx={{
            color: 'primary.main'
          }}
        />

        <Box display="flex" alignItems="center" gap={0.5} color="primary.main">
          <SvgIcon
            component={TrelloLogo}
            inheritViewBox
            fontSize="small"
            sx={{
              color: 'primary.main'
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

        <Button variant="outlined" startIcon={<LibaryAddIcon />}>
          Create
        </Button>
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          id="outlined-search"
          label="Search ..."
          type="search"
          size="small"
          sx={{
            minWidth: '120px'
          }}
        />
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNone
              sx={{
                color: 'primary.main'
              }}
            />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
