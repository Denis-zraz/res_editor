// import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { toggleActiveSections } from '../../slices/SectionSlices';
import { useDispatch } from 'react-redux';
import { addNewSection } from '../../slices/SectionsDataSlices';

export default function Education() {
    const value = {
        id: '',
        institution: '',
        specialization: '',
        periodWith: '',
        periodFor: '',
    };
    const [education, setEducation] = useState(value);
    const { institution, specialization, periodWith, periodFor } = education;

    const dispatch = useDispatch();

    const handleChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = evt.target;
        setEducation((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        dispatch(addNewSection({ ...education, id: uuidv4() }));
        dispatch(toggleActiveSections('Education'));
        setEducation(value);
    };

    return (
        <section className='fixed inset-0 w-full h-full items-center justify-center z-50'>
            <form
                className='flex flex-col absolute top-20 left-[14%] w-3/4 h-[340px] bg-white shadow-2xl rounded-md p-4'
                onSubmit={(evt) => handleSubmit(evt)}
            >
                <h2 className="text-center text-xl font-['Days_One'] text-[#202F55]">
                    Образование
                </h2>
                <label
                    htmlFor=''
                    className="font-['Days_One'] text-[#202F55] text-base"
                >
                    Учебное заведение
                </label>
                <input
                    type='text'
                    placeholder='Введите название учебного заведения'
                    className='h-9 p-2 outline-none font-sans border border-[#202F5] mt-1 mb-2'
                    name='institution'
                    value={institution}
                    onChange={handleChange}
                    required
                />
                <h2 className="font-['Days_One'] text-[#202F55] text-base">
                    Период учебы
                </h2>
                <div className='flex flex-row w-full h-auto'>
                    <label htmlFor='' className='relative top-2'>
                        c
                    </label>
                    <input
                        type='date'
                        className='h-9 w-1/3 p-2 outline-none font-sans border border-[#202F5] mt-1 m-2'
                        name='periodWith'
                        value={periodWith}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='' className='relative top-2'>
                        по
                    </label>
                    <input
                        type='date'
                        className='h-9 w-1/3 p-2 outline-none font-sans border border-[#202F5] mt-1 mb-2 ml-2'
                        name='periodFor'
                        value={periodFor}
                        onChange={handleChange}
                        required
                    />
                </div>
                <label
                    htmlFor=''
                    className="font-['Days_One'] text-[#202F55] text-base"
                >
                    Специальность
                </label>
                <input
                    type='text'
                    placeholder='Введите название специальности'
                    className='h-9 p-2 outline-none font-sans border border-[#202F5] mt-1 mb-2'
                    name='specialization'
                    onChange={handleChange}
                    value={specialization}
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
                    className="absolute top-[267px] left-[650px] w-44 h-10 text-white rounded-md bg-[#d80e0e] font-['Days_One'] font-normal cursor-pointer"
                    onClick={() => dispatch(toggleActiveSections('Education'))}
                >
                    Отмена
                </button>
            </form>
        </section>
    );
}
