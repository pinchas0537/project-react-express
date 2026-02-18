import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext.js';

export default function AdminLoginPage() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [password, setPassword] = useState("")
  const [respons, setRespons] = useState("")
  async function adminLogin(e) {
    debugger
    e.preventDefault()
    const res = await fetch("http://localhost:3000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    })
    const data = await res.json()
    setRespons(data)
    setCurrentUser({ token: res.headers.get("Authorization") })
    console.log(res.headers);
    


  }

  return (
    <div>
      <form onSubmit={adminLogin}>
        <h3>
          כניסה למפקדים בלבד.
        </h3>
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='הכנס סיסמא של מפקד' required />
        <button type='submit'>כניסת מפקד</button>
        {respons && <p>{respons.message}</p>}
      </form>
    </div>
  )
}
