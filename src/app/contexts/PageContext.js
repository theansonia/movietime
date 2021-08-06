import React, { createContext, useState } from 'react'

export const PageContext = createContext()

const PageContextProvider = ({ children }) => {
  const [pages, updatePages] = useState(1)

  const fetchMore = () => {
    updatePages(pages + 1)
  }

  const resetPages = () => {
    updatePages(1)
  }

  return (
    <PageContext.Provider value={{ pages, fetchMore, resetPages }}>
      {children}
    </PageContext.Provider>
  )
}

export default PageContextProvider
