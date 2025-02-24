import Box from '@mui/material/Box'
import Card from './Card/Card'

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function ListCards({ cards }) {
  const orderedCards = cards.map(card => card._id)

  return (
    <SortableContext
      items={orderedCards}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          p: '0 5px 5px 5px',
          m: '0 5px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: theme =>
            `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${
              theme.trello.columnHeaderHeight
            } - ${theme.trello.columnFooterHeight})`,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da'
          },
          '&::-webkit-scrollbar-thumb: hover': {
            backgroundColor: '#bfc2cf'
          }
        }}
      >
        {cards?.map((_, index) => (
          <Card key={index} card={_} />
        ))}
      </Box>
    </SortableContext>
  )
}

export default ListCards
