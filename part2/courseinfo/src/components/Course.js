const Header = ({name}) => {
  return(
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return(
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Total = ({parts}) => {
  return(
    <div>
      <p><strong>total of {parts.map(part => part.exercises).reduce((a, b) => a + b)} exercises</strong></p>
    </div>
  )
}

const Course = ({course}) => {
  return(
    <div>
      <Header name={course.name}  />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course