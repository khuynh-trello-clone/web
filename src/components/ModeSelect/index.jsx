import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = event => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl
      size="small"
      sx={{
        minWidth: '120px',
        maxWidth: '200px'
      }}
    >
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center'
          }
        }}
      >
        <MenuItem value="light" sx={{ display: 'flex', alignItems: 'center' }}>
          <LightModeIcon sx={{ mr: 1 }} /> Light
        </MenuItem>
        <MenuItem value="dark" sx={{ display: 'flex', alignItems: 'center' }}>
          <DarkModeIcon sx={{ mr: 1 }} /> Dark
        </MenuItem>
        <MenuItem value="system" sx={{ display: 'flex', alignItems: 'center' }}>
          <SettingsBrightnessIcon sx={{ mr: 1 }} /> System
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
