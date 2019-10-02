import React from 'react';
import Header from './header';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
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
  getAverageGrades() {
    let totalGrade = 0;
    this.state.grades.forEach(e => {
      totalGrade += e.grade;
    });
    return Math.round(totalGrade / this.state.grades.length);
  }
  render() {
    const average = this.getAverageGrades();
    return (
      <div className = "container-fluid">
        <Header text = "Student Grade Table" average = { average } />
        <GradeTable grades = { this.state.grades } />
      </div>
    );
  }
}

export default App;
