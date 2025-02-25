import CloseIcon from '@mui/icons-material/Close'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Column from './Column/Column'

import {
  SortableContext,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable'
import { useState } from 'react'
import { toast } from 'react-toastify'

function ListColumns({ columns, boardId, createNewColumn, createNewCard }) {
  const [newColumnTitle, setNewColumnTitle] = useState('')

  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)

  const toggleNewColumnForm = () => {
    setOpenNewColumnForm(!openNewColumnForm)
  }

  const addNewColumn = async () => {
    if (!newColumnTitle) {
      toast.error('Please enter column title')
      return
    }

    const newColumnData = {
      title: newColumnTitle,
      boardId
    }

    await createNewColumn(newColumnData)

    toggleNewColumnForm()
    setNewColumnTitle('')
  }

  const orderedColumns = columns.map(column => column._id)

  return (
    <SortableContext
      items={orderedColumns}
      strategy={horizontalListSortingStrategy}
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
        {columns?.map((column, index) => (
          <Column
            key={column._id}
            column={column}
            createNewCard={createNewCard}
          />
        ))}

        {/* Box Add Column */}

        {!openNewColumnForm ? (
          <Box
            onClick={toggleNewColumnForm}
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d'
            }}
          >
            <Button
              startIcon={<NoteAddIcon />}
              sx={{
                color: 'white',
                width: '100%',
                justifyContent: 'flex-start',
                pl: 2.5,
                py: 1
              }}
            >
              Add new column
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              p: 1,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d',
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <TextField
              label="Enter column title"
              variant="outlined"
              autoFocus
              type="text"
              size="small"
              value={newColumnTitle}
              onChange={e => setNewColumnTitle(e.target.value)}
              sx={{
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
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Button
                variant="contained"
                color="success"
                size="small"
                sx={{
                  boxShadow: 'none',
                  border: '0.5px solid',
                  borderColor: theme => theme.palette.success.main,
                  '&:hover': {
                    bgcolor: theme => theme.palette.success.main,
                    boxShadow: 'none'
                  }
                }}
                onClick={addNewColumn}
              >
                Add Column
              </Button>
              <CloseIcon
                size="small"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': { color: theme => theme.palette.warning.light }
                }}
                onClick={() => {
                  setNewColumnTitle('')
                  toggleNewColumnForm()
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </SortableContext>
  )
}

export default ListColumns
