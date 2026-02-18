import React, { useState } from 'react'
const path = "http://localhost:3000"

export default function SubmitComplaintPage() {
  const [category, setCategory] = useState("")
  const [message, setMessage] = useState("")
  const [other, setOther] = useState(false);
  const [data, setData] = useState("")

  function updateCategory(e) {
    setCategory(e.target.value)
    if (e.target.value === "אחר") {
      setOther(true);
    } else {
      setOther(false);
    }
  }

  async function send(e) {
    e.preventDefault();
    const res = await fetch(path + "/api/complaints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, message })
    })
    const data = await res.json();
    setData(data)
    setMessage("")
    setCategory("")
  }


  return (
    <div>
      <form onSubmit={send}>
        <select value={category} onChange={updateCategory} required >
          <option value="">בחר את הקטגוריה הרצויה</option>
          <option value="אוכל">אוכל</option>
          <option value="ציוד">ציוד</option>
          <option value="פקודות">פקודות</option>
          <option value="אחר">אחר</option>
        </select><br />
        {other && <input type='text' placeholder='הכנס קטגוריה אחרת'></input>}
        <textarea value={message} placeholder='הכנס בבקשה את פירוט התלונה' minLength={5} onChange={e => setMessage(e.target.value)} required></textarea>
        <button type='submit'>שליחה</button>
        {data && <p>ההודעה נשלחה בהצלחה</p>}
      </form>
    </div>
  )
}
