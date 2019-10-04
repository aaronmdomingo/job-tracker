import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      currentStudent: null
    };
    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.updateStudentID = this.updateStudentID.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
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
  submitEdit(student) {
    fetch(`/api/grades/${student.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(student) })
      .then(result => result.json())
      .then(result => {
        let newArray = this.state.grades.map(element => {
          if (element.id === result.id) {
            element.name = result.name;
            element.course = result.course;
            element.grade = result.grade;
          }
          return element;
        });
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
  updateStudentID(student) {
    this.setState({ currentStudent: student });
  }
  render() {
    const average = this.getAverageGrades();
    return (
      <div className = "container-fluid">
        <Header text = "Student Grade Table" average = { average } />
        <div className="d-flex">
          <GradeTable grades = { this.state.grades } onDelete = { this.deleteStudent } onUpdate = { this.updateStudentID }/>
          <GradeForm onSubmit = { this.addStudent } currentStudent = { this.state.currentStudent } onUpdate = { this.submitEdit }/>
        </div>
      </div>
    );
  }
}

export default App;
