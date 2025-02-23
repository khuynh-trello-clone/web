import AppsIcon from '@mui/icons-material/Apps'
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
import Recent from './Menus/Recent'
import Started from './Menus/Started'
import Templates from './Menus/Templates'
import Workspaces from './Menus/Workspaces'
import HelpOutline from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        // backgroundColor: 'primary.light',
        width: '100%',
        height: theme => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
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
            sx={{
              color: 'primary.main'
            }}
          />
          <Typography variant="h6">Trello</Typography>
        </Box>

        <Workspaces />
        <Recent />
        <Started />
        <Templates />

        <Button variant="outlined">Create</Button>
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          id="outlined-search"
          label="Search ..."
          type="search"
          size="small"
        />
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNone />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: 'pointer' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
