import "./SkillListItem.css";

const SkillListItem = ({ skillName }) => {
    return (
    <div className="SkillListItem">
        <div className="SkillListItem">{skillName.name}</div>
        <div className="SkillListItem">{`Level: ${skillName.level}`}</div>
    </div>
    );
  };
  
  export default SkillListItem;
