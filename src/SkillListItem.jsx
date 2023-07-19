const SkillListItem = ({ skill }) => {
    return (
      <li>
        <div className="skill-item">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-level">{`Level: ${skill.level}`}</div>
        </div>
      </li>
    );
  };
  
  export default SkillListItem;
