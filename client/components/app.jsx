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
  render() {
    return (
      <div className = "container-fluid">
        <Header text = "Student Grade Table" />
        <GradeTable grades = { this.state.grades } />
      </div>
    );
  }
}

export default App;
