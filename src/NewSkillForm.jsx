export default function NewSkillForm() {
    return (
        <form>
            <label>Skill <input type="text" /></label>
            <label>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </label>
            <button>ADD SKILL</button>
        </form>
    )
}