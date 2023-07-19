import './App.css'
import SkillList from './SkilList';
import NewSkillForm from './NewSkillForm';
import { useState } from "react";

const initialSkills = [
  {name: "HTML", level:5},
  {name: "CSS", level:3},
  {name: "JavaScript", level:4},
  {name: "Python", level:2}
];



function App() {

  const [skill, setSkill] = useState(initialSkills);

  const handdleSkills = () => {
    setSkill(skill)
  }


  return (
    <div className='App'>
      <h1>React Dev Skills</h1>
      <SkillList skills={skill} />
      <hr />
      <NewSkillForm />
    </div>
  );
}

export default App;
