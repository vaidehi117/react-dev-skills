import SkillListItem from './SkillListItem';

export default function SkillList({ skills }) {

  // const skillListItem = skillObj.map((skillObj,index) => <SkillListItem skill={skillObj} key={index} /> );
  const skillListItems = skills.map((skillObj,index) => {
    return <SkillListItem  skillName = {skillObj} key={index} />
  });
  return <ul>{skillListItems}</ul>
}