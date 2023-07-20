import "./NewSkillForm.css"
import { useState } from "react";

export default function NewSkillForm({addSkill}) {
    const [skill, setSkill] = useState({
        name:"",
        level:"3"
    });
    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(s) {
        console.log(s.target.value);

        setSkill({
            ...skill,
            [s.target.name]: s.target.value
        })
    }

    function formatUserObj(skill){
        return {
            ...skill,
            name: skill.name[0].toUpperCase() + skill.name.slice(1).toLowerCase()
        }
      }

    function handleSubmit(s) {
        s.preventDefault();

        if(skill.name === '' || skill.level === '') {
            return setErrorMessage("Please fill out each input before you submit");
        }

        addSkill(skill);
        // everything was good make sure you clear any previous errorMessages
        setErrorMessage('');
        //clear out the form 
        setSkill({
            name: '',
            level:'3'
        })
        console.log(skill)
    }

    function handleDropDown(s) {
        s.preventDefault();

        setSkill({
            ...skill,
            level: s.target.value
        })


    }

    return (
        <>
        <span>{errorMessage ? errorMessage : ''}</span>
        <form className="NewSkillForm" onSubmit={handleSubmit}>
            <label>Skill <input className="NewSkillForm" type="text" value={skill.name} name="name" onChange={handleChange} />
            </label>
            <label>Level
                <select className="NewSkillForm" onChange={handleDropDown}>
                    <option value ={1}>1</option>
                    <option value ={2}>2</option>
                    <option value ={3}>3</option>
                    <option value ={4}>4</option>
                    <option value ={5}>5</option>
                </select>
            </label>
            <button className="NewSkillForm">ADD SKILL</button>
        </form>
        </>
    )
}