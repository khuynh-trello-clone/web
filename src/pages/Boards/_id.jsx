// Board details
import Container from '@mui/material/Container'

import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'

import { useEffect, useState } from 'react'
import {
  createNewCardAPI,
  createNewColumnAPI,
  deleteColumnDetailsAPI,
  fetchBoardDetailsAPI,
  moveCardToDifferentColumnAPI,
  updateBoardDetailsAPI,
  updateColumnDetailsAPI
} from '~/apis'
import { BOARD_ID } from '~/utils/constants'
import { mockData } from '~/apis/mock-data'
import { isEmpty } from 'lodash'
import { generatePlaceholderCard } from '~/utils/formatters'
import mapOrder from '~/utils/sorts'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { toast } from 'react-toastify'

const boardId = BOARD_ID

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    fetchBoardDetailsAPI(boardId).then(board => {
      // order columns before setting board
      board.columns = mapOrder(board.columns, board.columnOrderIds, '_id')

      board.columns.forEach(column => {
        if (isEmpty(column.cards)) {
          column.cards = [generatePlaceholderCard(column)]
          column.cardOrderIds = [generatePlaceholderCard(column)._id]
        } else {
          column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
        }
      })

      setBoard(board)
    })
  }, [])

  const createNewColumn = async newColumnData => {
    const createdColumn = await createNewColumnAPI(newColumnData)

    const newBoard = { ...board }
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createdColumn._id)

    // Add placeholder card
    createdColumn.cards = [generatePlaceholderCard(createdColumn)]
    createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id]

    setBoard(newBoard)
  }

  const createNewCard = async newCardData => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId
    })

    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(
      column => column._id === createdCard.columnId
    )
    if (columnToUpdate) {
      // fix bug when placeholder card in empty column
      // Remove placeholder card
      if (columnToUpdate.cards.some(card => card.FE_PlaceholderCard)) {
        columnToUpdate.cards = [createdCard]
        columnToUpdate.cardOrderIds = [createdCard._id]
      } else {
        columnToUpdate.cards.push(createdCard)
        columnToUpdate.cardOrderIds.push(createdCard._id)
      }
    }
    setBoard(newBoard)
  }

  const moveColumn = async dndOrderedColumns => {
    const dndOrderedColumnIds = dndOrderedColumns.map(column => column._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnIds
    setBoard(newBoard)

    updateBoardDetailsAPI(newBoard._id, {
      columnOrderIds: dndOrderedColumnIds
    })
  }

  const moveCardInSameColumn = async (
    dndOrderCards,
    dndOrderedCardIds,
    columnId
  ) => {
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(
      column => column._id === columnId
    )
    if (columnToUpdate) {
      columnToUpdate.cards = dndOrderCards
      columnToUpdate.cardOrderIds = dndOrderedCardIds
    }
    setBoard(newBoard)

    updateColumnDetailsAPI(columnId, {
      cardOrderIds: dndOrderedCardIds
    })
  }

  const moveCardToDifferentColumn = async (
    currentCardId,
    prevColumnId,
    nextColumnId,
    dndOrderedColumns
  ) => {
    const dndOrderedColumnIds = dndOrderedColumns.map(column => column._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnIds
    setBoard(newBoard)

    // fix bug when placeholder card in empty column
    let prevCardOrderIds = dndOrderedColumns.find(
      column => column._id === prevColumnId
    )?.cardOrderIds
    if (prevCardOrderIds[0].includes('placeholder-card')) {
      prevCardOrderIds = []
    }

    // Call API to update card
    moveCardToDifferentColumnAPI({
      currentCardId,
      prevColumnId,
      prevCardOrderIds,
      nextColumnId,
      nextCardOrderIds: dndOrderedColumns.find(
        column => column._id === nextColumnId
      )?.cardOrderIds
    })
  }

  const deleteColumnDetails = async columnId => {
    console.log('deleteColumnDetails', columnId)

    const newBoard = { ...board }
    const columnToDelete = newBoard.columns.find(
      column => column._id === columnId
    )
    if (columnToDelete) {
      newBoard.columns = newBoard.columns.filter(
        column => column._id !== columnId
      )
      newBoard.columnOrderIds = newBoard.columnOrderIds.filter(
        id => id !== columnId
      )
    }
    setBoard(newBoard)

    // Call API to delete column
    deleteColumnDetailsAPI(columnId).then(() => {
      toast.success('Column deleted successfully')
    })
  }

  if (!board) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          gap: 2
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: '100vh'
      }}
    >
      <AppBar />
      <BoardBar board={board} />
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
        moveColumn={moveColumn}
        moveCardInSameColumn={moveCardInSameColumn}
        moveCardToDifferentColumn={moveCardToDifferentColumn}
        deleteColumnDetails={deleteColumnDetails}
      />
    </Container>
  )
}

export default Board
