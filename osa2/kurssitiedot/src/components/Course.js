import React from 'react'

const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Total = (props) => {
    const Total =
      props.exercises.reduce( (s, p) => s + p.exercises, 0)
    return (
      <b>
        Total of {Total} exercises
      </b>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = (props) => {
    return (
        <ul>
          {props.parts.map((part, i) => 
            <Part key={i} part={part} />
          )}
        </ul>
    )
  }

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total exercises={course.parts}/>
      </div>
    );
  }

  export default Course