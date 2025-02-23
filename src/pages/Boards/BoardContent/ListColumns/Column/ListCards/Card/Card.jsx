import CommentIcon from '@mui/icons-material/Comment'
import GroupIcon from '@mui/icons-material/Group'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Button } from '@mui/material'
import { default as CardMUI } from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function Card() {
  return (
    <CardMUI
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}
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
    </CardMUI>
  )
}

export default Card
