import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';
// import Header from './header';
// import GradeTable from './gradetable';
// import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: null
    };
    // this.addStudent = this.addStudent.bind(this);
    // this.deleteStudent = this.deleteStudent.bind(this);
    // this.updateStudentID = this.updateStudentID.bind(this);
    // this.submitEdit = this.submitEdit.bind(this);
  }
  componentDidMount() {
    // this.getAllGrades();
  }
  // getAllGrades() {
  //   fetch('/api/grades')
  //     .then(result => result.json())
  //     .then(result => {
  //       this.setState({ grades: result });
  //     });
  // }
  // addStudent(newStudent) {
  //   fetch('/api/grades', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newStudent) })
  //     .then(result => result.json())
  //     .then(result => {
  //       let newArray = [...this.state.grades];
  //       newArray.push(result);

  //       this.setState({ grades: newArray });
  //     });
  // }
  // deleteStudent(id) {
  //   fetch(`/api/grades/${id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
  //     .then(result => result.json())
  //     .then(result => {
  //       let newArray = this.state.grades.filter(element => element.id !== id);
  //       this.setState({ grades: newArray });
  //     });
  // }
  // submitEdit(student) {
  //   fetch(`/api/grades/${student.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(student) })
  //     .then(result => result.json())
  //     .then(result => {
  //       let newArray = this.state.grades.map(element => {
  //         return element.id === result.id ? result : element;
  //       });
  //       this.setState({ grades: newArray });
  //     });
  // }
  // getAverageGrades() {
  //   let totalGrade = 0;
  //   if (!this.state.grades.length) {
  //     return 'N/A';
  //   } else {
  //     this.state.grades.forEach(e => {
  //       totalGrade += e.grade;
  //     });
  //     return Math.round(totalGrade / this.state.grades.length);
  //   }
  // }
  // updateStudentID(student) {
  //   this.setState({ currentStudent: student });
  // }
  render() {
    return (
      <div className = "container-fluid h-100">
        {/* <Header /> */}
        {/* <div className="d-flex"> */}
        {/* <GradeTable grades = { this.state.grades } onDelete = { this.deleteStudent } onUpdate = { this.updateStudentID }/> */}
        {/* <GradeForm onSubmit = { this.addStudent } currentStudent = { this.state.currentStudent } onUpdate = { this.submitEdit }/> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
