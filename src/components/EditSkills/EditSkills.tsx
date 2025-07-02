import { useState } from 'react';
import { SkillsValueState } from '../../interface';
import { useDispatch } from 'react-redux';
import { editSection } from '../../slices/SectionsDataSlices';

// import React from 'react'
interface EditSkillsProps {
    elem: SkillsValueState;
    setEditState: () => void;
}

export default function EditSkills({ elem, setEditState }: EditSkillsProps) {
    const [skillsValue, setSkillsValue] = useState<SkillsValueState>({
        id: elem.id,
        skills: elem.skills,
        personalSkills: elem.personalSkills,
    });
    const { skills, personalSkills } = skillsValue;
    const dispatch = useDispatch();
    const handleChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = evt.target;
        setSkillsValue((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        dispatch(editSection(skillsValue));
        setEditState();
    };
    return (
        <form
            onSubmit={(evt) => handleSubmit(evt)}
            className='w-full h-auto flex flex-col shadow-md border border-[#202F55] bg-white rounded-md p-3 mb-3'
        >
            <h3 className="text-[#202F55] font-['Days_One'] border-b border-[#202F55] mb-1">
                Навыки
            </h3>
            <label className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Профессиональные качества -
                <textarea
                    name='skills'
                    className='font-sans ml-2 outline-none border border-[#202F5]'
                    value={skills}
                    onChange={handleChange}
                />
            </label>
            <label className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Личные качесва -
                <textarea
                    className='font-sans ml-2 outline-none border border-[#202F5]'
                    value={personalSkills}
                    name='personalSkills'
                    onChange={handleChange}
                />
            </label>
            <div className=' flex flex-row justify-between mt-3'>
                <button
                    type='submit'
                    className="w-32 h-8 text-white text-[12px] rounded-md bg-green-800 font-['Days_One'] cursor-pointer mt-2"
                    // onClick={handleClick}
                >
                    Изменить
                </button>
                <button
                    type='button'
                    className="w-32 h-8 text-white text-[12px] rounded-md bg-red-800 font-['Days_One'] cursor-pointer mt-2"
                    onClick={() => setEditState()}
                >
                    Отмена
                </button>
            </div>
        </form>
    );
}
