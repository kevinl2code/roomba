import { roomDimensions,
         initialRoombaLocation, 
         dirtLocations, 
         drivingInstructions } from './data.json'

let loc = initialRoombaLocation
let wallHits = 0
let distance = 0
let action = ''
let collected = 0
const dimensions = roomDimensions
const moves = drivingInstructions
const dirt =  dirtLocations



const checkForDirt = (roombaLoc, dirtLocs) => {
    const roombaLocStr = JSON.stringify(roombaLoc)
    const found = dirtLocs.some((loc) => {
      return JSON.stringify(loc) === roombaLocStr
    })
    if (found) {
      return collected += 1
    }
  }
     
  
  const makeMove = {
      moveNorth(location, direction) {
          let x = location[0]
          let y = location[1]
          if (y + 1 > dimensions[1]) {
              wallHits += 1
              action = ''
              return loc = [x, y]
          }
          y += 1
          checkForDirt([x, y], dirt)
          distance += 1
          action = direction
          return loc = [x, y]
      },
      moveSouth(location, direction) {
          let x = location[0]
          let y = location[1]
          if (y - 1 < 0) {
              wallHits += 1
              action = ''
              return loc = [x, y]
          }
          y -= 1
          checkForDirt([x, y], dirt) 
          distance += 1
          action = direction
          return loc = [x, y]
      },
      moveEast(location, direction) {
          let x = location[0]
          let y = location[1]
          if (x + 1 > dimensions[0]) {
              wallHits += 1
              action = ''
              return loc = [x, y]
          }
          x += 1
          checkForDirt([x, y], dirt)
          distance += 1
          action = direction
          return loc = [x, y]
      },
      moveWest(location, direction) {
          let x = location[0]
          let y = location[1]
          if (x - 1 < 0) {
              wallHits += 1
              action = ''
              return loc = [x, y]
          }
          x -= 1
          checkForDirt([x, y], dirt)
          distance += 1
          action = direction
          return loc = [x, y]
      }
  }
  
  export default moves.map((move, i) => {
      if (move === 'N') {
          return {
            location: makeMove.moveNorth(loc, move),
            wallHits: wallHits,
            action: action,
            dirtCollected: collected,
            step: i + 2,
            distance: distance
          }
      } else if (move === 'S') {
          return {
            location: makeMove.moveSouth(loc, move),
            wallHits: wallHits,
            action: action,
            dirtCollected: collected,
            step: i + 2,
            distance: distance
          }
      } else if (move === 'E') {
          return {
            location: makeMove.moveEast(loc, move),
            wallHits: wallHits,
            action: action,
            dirtCollected: collected,
            step: i + 2,
            distance: distance
          }
      } else if (move === 'W') {
          return {
            location: makeMove.moveWest(loc, move),
            wallHits: wallHits,
            action: action,
            dirtCollected: collected,
            step: i + 2,
            distance: distance
          }
      }
  })