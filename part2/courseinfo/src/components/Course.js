const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
}
  
const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
}

const Total = (props) => {
    const total = props.course.parts.reduce((total, part) => total + part.exercises, 0);
    return (
      <p>
        total of {total} exercises
      </p>    
    )
}

const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => 
            <Part key={part.id} part={part} />
        )}
      </div>
    )
}

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }

export default Course;