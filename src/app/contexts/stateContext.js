import React, { createContext, useState } from 'react'

export const StateContext = createContext()

const StateContextProvider = ({ children }) => {
  const [movieData, setMovieData] = useState(null)
  const [topic, setCategory] = useState(null)
  const storeMovieData = (movieData) => {
    setMovieData(movieData)
  }
  return (
    <StateContext.Provider
      value={{ movieData, storeMovieData, topic, setCategory }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateContextProvider
