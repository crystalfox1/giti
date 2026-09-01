import React, { useState } from "react"

interface Student {
  id: number
  name: string
  age: number
}

const StudentList = () => {
  const [studentName, setStudentName] = useState<string>("")
  const [studentAge, setStudentAge] = useState<string>("")
  const [students, setStudents] = useState<Student[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.target.value)
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentAge(e.target.value)
  }

  const addStudent = () => {
    if (!studentName.trim() || !studentAge.trim()) return

    const newStudent: Student = {
      id: Date.now(),
      name: studentName,
      age: Number(studentAge)
    }

    setStudents([...students, newStudent])
    setStudentName("")
    setStudentAge("")
  }

  const removeStudent = (id: number) => {
    setStudents(students.filter((student) => student.id !== id))
  }

  return (
    <div>
      <h2>Student List</h2>
      <input type="text" placeholder="Enter student name" value={studentName} onChange={handleChange} />
      <input type="number" placeholder="Enter student age" value={studentAge} onChange={handleAgeChange} />
      <button onClick={addStudent}>Add Student</button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age}
            <button onClick={() => removeStudent(student.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList
