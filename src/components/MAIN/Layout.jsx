import React from 'react'
import classes from './Layout.module.css'
import MainNavigation from '../../Layout/MainNavigation';
function Layout(props) {
  return (
    <div>
         <MainNavigation />
         <main className={classes.main}>
       {props.children}
         </main>
    </div>
  )
}

export default Layout;