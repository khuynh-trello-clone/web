import { Box, Button, Typography } from '@mui/material'

import { useColorScheme } from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <Box sx={{ p: 2 }}>
      <ModeToggle />
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>

      <Box sx={{ mt: 2 }}>
        <Button variant="contained" sx={{ mr: 1 }}>
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
      </Box>
    </Box>
  )
}

export default App
