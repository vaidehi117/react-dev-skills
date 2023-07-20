import './App.css'
import SkillList from './SkilList';
import NewSkillForm from './NewSkillForm';
import { useState } from "react";
import SkillListItem from './SkillListItem';

function App() {

  const [skillObject, setSkillObject] = useState([
    {name: "HTML", level:5},
    {name: "CSS", level:3},
    {name: "JavaScript", level:4},
    {name: "Python", level:2}
  ])

  const skillListItem = skillObject.map((skillObj,index) => {
    return <SkillListItem  skillName = {skillObj} key={index} />
  });
  console.log(skillListItem)
  // console.log(skillObject)

  function addSkill(skillFromTheFrom) {
    console.log(skillFromTheFrom, 'skill form the form');
    //when the user hit the form addSkill button 
    setSkillObject([
      ...skillObject,
      skillFromTheFrom
    ]);
  }

  return (
    <div className='App'>
      <h1 className='App'>React Dev Skills</h1>
      <SkillList skills={skillObject}/>
      <hr />
      <NewSkillForm addSkill={addSkill}/>
    </div>
  );
}

export default App;
