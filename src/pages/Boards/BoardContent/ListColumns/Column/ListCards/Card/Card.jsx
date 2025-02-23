import AttachmentIcon from '@mui/icons-material/Attachment'
import CommentIcon from '@mui/icons-material/Comment'
import GroupIcon from '@mui/icons-material/Group'
import { Button } from '@mui/material'
import { default as CardMUI } from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Card({ card }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: card._id, data: { ...card } })

  const dndKitCardStyles = {
    touchAction: 'none', // Prevent scrolling on touch devices
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '2px dashed #4dabf5' : undefined
  }

  const members = card?.memberIds || []
  const comments = card?.comments || []
  const attachments = card?.attachments || []

  const shouldShowCardActions =
    !!members?.length || !!comments?.length || !!attachments?.length

  return (
    <CardMUI
      ref={setNodeRef}
      style={dndKitCardStyles}
      {...attributes}
      {...listeners}
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}
    >
      {card?.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={card?.cover}
          title="green iguana"
        />
      )}

      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardActions && (
        <CardActions sx={{ p: '0 4px 8px' }}>
          {!!members?.length && (
            <Button size="small" startIcon={<GroupIcon />}>
              {members?.length}
            </Button>
          )}
          {!!comments?.length && (
            <Button size="small" startIcon={<CommentIcon />}>
              {comments?.length}
            </Button>
          )}
          {!!attachments?.length && (
            <Button size="small" startIcon={<AttachmentIcon />}>
              {attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </CardMUI>
  )
}

export default Card
