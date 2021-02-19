import React, {useState} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
// import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
// import Drawer from "../../components/Navigation/Drawer/Drawer";
import { connect } from "react-redux"

const Main = styled.main`
    margin: 0 auto;
    width: 80%;
`

type Tprops = {
  children: React.ReactNode
}

const MainLayout: React.FC<Tprops> = (props: Tprops) => {

  return (
      <Main>
          <Navbar></Navbar>
        { props.children }
      </Main>
  )
}

export default MainLayout