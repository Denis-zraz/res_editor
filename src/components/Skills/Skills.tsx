import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleActiveSections } from '../../slices/SectionSlices';
import { addNewSection } from '../../slices/SectionsDataSlices';

export default function Skills() {
    const dispatch = useDispatch();
    const value = {
        id: '',
        skills: '',
        personalSkills: '',
    };

    const [valueSkills, setValueSkills] = useState(value);
    const { skills, personalSkills } = valueSkills;

    const handleChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = evt.target;
        setValueSkills((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        dispatch(addNewSection({ ...valueSkills, id: uuidv4() }));
        dispatch(toggleActiveSections('Skills'));
        setValueSkills(value);
    };

    return (
        <section className='fixed inset-0 w-full h-full items-center justify-center z-50'>
            <form
                className='flex flex-col absolute top-20 left-[14%] w-3/4 h-auto bg-white shadow-2xl rounded-md p-4'
                onSubmit={(evt) => handleSubmit(evt)}
            >
                <h2 className="text-center text-xl font-['Days_One'] text-[#202F55]">
                    Навыки
                </h2>
                <label
                    htmlFor=''
                    className="font-['Days_One'] text-[#202F55] text-base"
                >
                    Профессиональные качества
                </label>
                <textarea
                    placeholder='Профессиональные качества'
                    className='h-24 p-2 outline-none font-sans border border-[#202F5] mt-1 mb-2 overflow-hidden resize-none'
                    name='skills'
                    value={skills}
                    onChange={handleChange}
                    required
                />
                <label
                    htmlFor=''
                    className="font-['Days_One'] text-[#202F55] text-base"
                >
                    Личные качества
                </label>
                <textarea
                    placeholder='Личные качесва'
                    className='h-24 p-2 outline-none font-sans border border-[#202F5] mt-1 mb-2 overflow-hidden resize-none'
                    name='personalSkills'
                    onChange={handleChange}
                    value={personalSkills}
                    required
                />
                <button
                    type='submit'
                    className="w-44 h-10 text-white rounded-md bg-[#202F55] font-['Days_One'] font-normal cursor-pointer mt-2"
                >
                    Добавить
                </button>
                <button
                    type='button'
                    className="absolute top-[317px] left-[650px] w-44 h-10 text-white rounded-md bg-[#d80e0e] font-['Days_One'] font-normal cursor-pointer"
                    onClick={() => dispatch(toggleActiveSections('Skills'))}
                >
                    Отмена
                </button>
            </form>
        </section>
    );
}
