import React from 'react'
import { Link } from 'react-router'

export default function HomePage() {
  return (
    <div id="home">
      <header>Home Page</header>
        <div className='card'>
          <h2>תיבת תלונות אנונימיות בבסיס צבאי</h2>
        <Link to="/submit">שליחת תלונה</Link><br/>
        </div>
        <div className='card'>
        <h2>מפקדים בלבד.</h2>
        <Link to="/admin/login">כניסה למפקד</Link>
        </div>
    </div>
  )
}