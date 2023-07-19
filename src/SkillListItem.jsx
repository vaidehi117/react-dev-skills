import "./SkillListItem.css";

const SkillListItem = ({ skill }) => {
    return (
      <li>
        <div className="SkillListItem">
          <div className="SkillListItem">{skill.name}</div>
          <div className="SkillListItem">{`Level: ${skill.level}`}</div>
        </div>
      </li>
    );
  };
  
  export default SkillListItem;
