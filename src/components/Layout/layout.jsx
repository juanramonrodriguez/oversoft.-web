import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { MainContent } from './layoutStyle'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
    <Header/>
    <MainContent>
        <Outlet/>
    </MainContent>
    <Footer/>
      
    </>
  )
}

export default layout
