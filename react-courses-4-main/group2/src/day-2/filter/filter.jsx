import React from 'react'

// Render only the even numbers

const EvenNumbers = () => {
  const nums = [1, 2, 3, 4, 5, 6];

  return (
    <div>
    </div>
  )
}

// filter out for only completed todos, only show learn react, cook dinner

const CompletedTodos = () => {
  const todos = [
    { id: 1, task: "Learn React", completed: true },
    { id: 2, task: "Do laundry", completed: false },
    { id: 3, task: "Cook dinner", completed: true }
  ];

  return (
  )
}

// if it includes a letter (decide this later) return any word that contains that letter

const SearchFilter = () => {
  const fruit = ["apple", "banana", "grape", "orange"];
  return (
  )

}

const Filter = () => {
  return (
    <div>
      {/* <EvenNumbers />
      <CompletedTodos />
      <SearchFilter /> */}
    </div>
  )
}

export default Filter;