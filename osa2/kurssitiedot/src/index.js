import React from 'react';
import ReactDOM from 'react-dom';

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

const AllCourses = ({ courses }) => (
  <ul>
    {courses.map((course) =>
    <Course key = {course.id} course={course}/>
    )}
  </ul>
)

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <AllCourses courses={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))