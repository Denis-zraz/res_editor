import React, { useState } from 'react';
import { ExperienceValueState } from '../../interface';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { toggleActiveSections } from '../../slices/SectionSlices';
import { addNewSection } from '../../slices/SectionsDataSlices';

export default function Experience() {
    const dispatch = useDispatch();
    const value = {
        id: '',
        company: '',
        periodWith: '',
        periodFor: '',
        post: '',
        description: '',
    };
    const [experienceValue, setExperienceValue] =
        useState<ExperienceValueState>(value);

    const { company, periodWith, periodFor, post, description } =
        experienceValue;

    const handleChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = evt.target;
        setExperienceValue((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        dispatch(addNewSection({ ...experienceValue, id: uuidv4() }));
        dispatch(toggleActiveSections('Experience'));
        setExperienceValue(value);
    };

    return (
        <section className='fixed inset-0 w-full h-full items-center justify-center z-50'>
            <form
                className='flex flex-col absolute top-20 left-[14%] w-3/4 min-h-[400px] bg-white shadow-2xl rounded-md p-4'
                onSubmit={(evt) => handleSubmit(evt)}
            >
                <h2 className="text-center text-xl font-['Days_One'] text-[#202F55]">
                    Опыт
                </h2>
                <label
                    htmlFor=''
                    className="font-['Days_One'] text-[#202F55] text-base"
                >
                    Компания
                </label>
                <input
                    type='text'
                    placeholder='Введите название компании'
                    className='h-9 p-2 outline-none font-sans border border-[#202F5] mt-1 mb-2'
                    name='company'
                    value={company}
                    onChange={handleChange}
                    required
                />
                <h2 className="font-['Days_One'] text-[#202F55] text-base">
                    Период работы
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
                    Должность
                </label>
                <input
                    type='text'
                    placeholder='Введите название должности'
                    className='h-9 p-2 outline-none font-sans border border-[#202F5] mt-1 mb-2'
                    name='post'
                    onChange={handleChange}
                    value={post}
                    required
                />
                <label
                    htmlFor=''
                    className="font-['Days_One'] text-[#202F55] text-base"
                >
                    Описание должностных обязанностей
                </label>
                <textarea
                    name='description'
                    placeholder='Описание'
                    className='w-full p-2 outline-none font-sans border border-[#202F5]'
                    onChange={handleChange}
                    value={description}
                    required
                ></textarea>
                <button
                    type='submit'
                    className="w-44 h-10 text-white rounded-md bg-[#202F55] font-['Days_One'] font-normal cursor-pointer mt-2"
                >
                    Добавить
                </button>
                <button
                    type='button'
                    className="absolute top-[357px] left-[650px] w-44 h-10 text-white rounded-md bg-[#d80e0e] font-['Days_One'] font-normal cursor-pointer"
                    onClick={() => dispatch(toggleActiveSections('Experience'))}
                >
                    Отмена
                </button>
            </form>
        </section>
    );
}
