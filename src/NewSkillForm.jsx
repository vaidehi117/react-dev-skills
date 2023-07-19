import "./NewSkillForm.css"

export default function NewSkillForm() {
    return (
        <form className="NewSkillForm">
            <label>Skill <input  className="NewSkillForm" type="text" /></label>
            <label>Level
                <select className="NewSkillForm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </label>
            <button className="NewSkillForm">ADD SKILL</button>
        </form>
    )
}