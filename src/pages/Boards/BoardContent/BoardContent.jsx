import Box from '@mui/material/Box'
import mapOrder from '~/utils/sorts'
import ListColumns from './ListColumns/ListColumns'

import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

import { useEffect, useState } from 'react'

function BoardContent({ board }) {
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     // required move 10px to activate drag
  //     distance: 10
  //   }
  // })
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      // required move 10px to activate drag
      distance: 10
    }
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  })

  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])

  const handleDragEnd = event => {
    const { active, over } = event

    // Check if there is no over column
    if (!over) return

    // Check if active column is different from over column
    if (active.id !== over.id) {
      // old column index
      const oldIndex = orderedColumns.findIndex(
        column => column._id === active.id
      )

      // new column index
      const newIndex = orderedColumns.findIndex(
        column => column._id === over.id
      )

      // Reorder column in orderedColumns
      const dnOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)

      // Get new column order ids list | prepare for update to db
      const dndOrderedColumnIds = dnOrderedColumns.map(column => column._id)

      // Update state with new ordered
      setOrderedColumns(dnOrderedColumns)
    }
  }

  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      '_id'
    )
    setOrderedColumns(orderedColumns)
  }, [board])

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: theme =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: theme => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
