const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part =>
      <Part key={part.id} part={part} />
    )}   
  </>

const Total = ({ parts }) => {
  const sum = parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)
  return (
    <p>total of {sum} exercises</p>
  )
}

const Course = (props) =>
  <>
    <Header course={props.course.name} />
    <Content parts={props.course.parts} />
    <Total parts={props.course.parts}/>
  </>

export default Course