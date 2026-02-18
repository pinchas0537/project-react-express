import React from 'react'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { useState } from 'react'
import { useEffect } from 'react'

export default function AdminComplaintsPage() {
    const [allData, setalldata] = useState([])
    const { currentUser } = useContext(UserContext)
    async function allDataf() {
        const data = await fetch("http://localhost:3000/api/complaints", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": currentUser.token
            }
        })
        const res = await data.json()
        setalldata(res)
    }
    useEffect(() => {
        allDataf()
    }, [])

    return (
        <>
            <table>
                <tr>
                    <th>קטגוריה</th>
                    <th>תוכן התלונה</th>
                    <th>נשלח ב</th>
                </tr>
                    {allData.map((message) => (
                        <tr>
                            <td>{message.category}</td>
                            <td>{message.message}</td>
                            <td>{message.createedAt}</td>
                        </tr >
                    ))}
            </table>
        </>

    )
}
