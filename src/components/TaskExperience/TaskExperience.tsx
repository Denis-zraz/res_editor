// import React from 'react'
import { format } from 'date-fns';
// import { ExperienceValueState, SectionStore } from '../../interface';
// import { useDispatch, useSelector } from 'react-redux';
import { ExperienceValueState } from '../../interface';
import { useDispatch } from 'react-redux';
// import { toggleActiveSections } from '../../slices/SectionSlices';
import { deleteSection } from '../../slices/SectionsDataSlices';
// import Experience from '../Experience';
import EditExperience from '../EditExperience';
import { useState } from 'react';

interface TaskExperienceProps {
    elem: ExperienceValueState;
}

export default function TaskExperience({ elem }: TaskExperienceProps) {
    const { id, company, periodWith, periodFor, post, description } = elem;
    const [editState, setEditState] = useState(false);
    const dispatch = useDispatch();
    // const sections = useSelector((store: SectionStore) => store.sections);
    // const { Experience: experience } = sections;
    const formatDateWith = format(periodWith, 'dd.MM.yyyy');
    const formatDateFor = format(periodFor, 'dd.MM.yyyy');

    const handleChangeEditActive = () => {
        setEditState(false);
    }

    return !editState ? (
        <div className='w-full h-auto flex flex-col shadow-md border border-[#202F55] bg-white rounded-md p-3 mb-3'>
            <h3 className="text-[#202F55] font-['Days_One'] border-b border-[#202F55] mb-1">
                Опыт
            </h3>
            <h4 className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Компания -
                <p className='font-sans ml-2'>
                    {company[0].toUpperCase() + company.slice(1)},
                </p>
            </h4>
            <h4 className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Должность -
                <p className='font-sans ml-2'>
                    {post[0].toUpperCase() + post.slice(1)},
                </p>
            </h4>
            <h4 className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Период работы -
                <p className='font-sans ml-2'>
                    c {formatDateWith} по {formatDateFor},
                </p>
            </h4>
            <h4 className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Описание -<p className='font-sans ml-2'>{description}</p>
            </h4>
            <div className='flex flex-row justify-between mt-3'>
                <button
                    type='button'
                    className="w-32 h-8 text-white text-[12px] rounded-md bg-green-800 font-['Days_One'] cursor-pointer mt-2"
                    onClick={() => setEditState(true)}
                >
                    Редактировать
                </button>
                <button
                    type='button'
                    className="w-32 h-8 text-white text-[12px] rounded-md bg-red-800 font-['Days_One'] cursor-pointer mt-2"
                    onClick={() => dispatch(deleteSection(id))}
                >
                    Удалить
                </button>
            </div>
        </div>
    ) : (
        <EditExperience elem={elem} setEditState={handleChangeEditActive} />
    );
}
