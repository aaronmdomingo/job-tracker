import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  componentDidMount() {
    this.getAllGrades();
  }
  getAllGrades() {
    fetch('/api/grades')
      .then(result => result.json())
      .then(result => {
        this.setState({ grades: result });
      });
  }
  addStudent(newStudent) {
    fetch('/api/grades', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newStudent) })
      .then(result => result.json())
      .then(result => {
        let newArray = [...this.state.grades];
        newArray.push(result);

        this.setState({ grades: newArray });
      });
  }
  deleteStudent(id) {
    fetch(`/api/grades/${id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
      .then(result => result.json())
      .then(result => {
        let newArray = this.state.grades.filter(element => element.id !== id);
        this.setState({ grades: newArray });
      });
  }
  getAverageGrades() {
    let totalGrade = 0;
    if (!this.state.grades.length) {
      return 'N/A';
    } else {
      this.state.grades.forEach(e => {
        totalGrade += e.grade;
      });
      return Math.round(totalGrade / this.state.grades.length);
    }
  }
  render() {
    const average = this.getAverageGrades();
    return (
      <div className = "container-fluid">
        <Header text = "Student Grade Table" average = { average } />
        <div className="d-flex">
          <GradeTable grades = { this.state.grades } onDelete = { this.deleteStudent }/>
          <GradeForm onSubmit = { this.addStudent } />
        </div>
      </div>
    );
  }
}

export default App;
