import { Box, Container, Typography } from '@mui/material'
import ModeSelect from './components/ModeSelect'

function App() {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: 'background.default',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <ModeSelect />
        <Typography variant="h4">Trello Clone App</Typography>
      </Box>
    </Container>
  )
}

export default App
