import "./SkillListItem.css";

const SkillListItem = ({ skill }) => {
    return (
    <div className="SkillListItem">
        <div className="SkillListItem">{skill.name}</div>
        <div className="SkillListItem">{`Level: ${skill.level}`}</div>
    </div>
    );
  };
  
  export default SkillListItem;
