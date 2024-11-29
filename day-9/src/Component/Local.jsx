import React, { useEffect, useState } from 'react'

export default function Local() {
  return (

    useEffect(() => {
        let existingData = JSON.parse(localStorage.getItem("Students")) || [];
        setData(existingData)
    }, [])

    const [name, setName] = useEffect("");
    const [sub ,setSub] = useEffect("");
    const [editIndex,setEditIndex]=useState(null)

    const [data, setData] = useState([]);

    const handleSubmit = () => {
        let obj = {
            name: name,
            subject: sub
        }
        setData([...data, obj])
        localStorage.setItem("Students", JSON.stringify([...data, obj]))

        setName("")
        setData("")
    }
    const handleDelete = (index) => {
        let remainingData = data.filter((e, i) => i !== index);
        setData(remainingData);
        localStorage.setItem("Students", JSON.stringify(remainingData))
    }
    return (
        <div>
            {/* Crud - create read upadate delete*/}

            <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target)}/>
            <input type="text" placeholder='Enter Subject' value={name} onChange={(e) => setSub(e.target)}/>
            <button onClick={handleSubmit}Submit></button>
        </div>   
    )
  )
}