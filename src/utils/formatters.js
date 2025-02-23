/**
 * Capitalize the first letter of a string
 */
const capitalizeFirstLetter = val => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}

const generatePlaceholderCard = column => {
  return {
    _id: `${column?._id}-placeholder-card`,
    boardId: column?.boardId,
    columnId: column?._id,
    FE_PlaceholderCard: true
  }
}

export { capitalizeFirstLetter, generatePlaceholderCard }
