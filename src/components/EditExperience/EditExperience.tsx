import { useState } from 'react';
import { ExperienceValueState } from '../../interface';
import { useDispatch } from 'react-redux';
import { editSection } from '../../slices/SectionsDataSlices';

interface ExperienceProps {
    elem: ExperienceValueState;
    setEditState: () => void;
}

export default function EditExperience({
    elem,
    setEditState,
}: ExperienceProps) {
    const [experienceValue, setExperienceValue] =
        useState<ExperienceValueState>({
            id: elem.id,
            company: elem.company,
            periodWith: elem.periodWith,
            periodFor: elem.periodFor,
            post: elem.post,
            description: elem.description,
        });
    const dispatch = useDispatch();

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

        dispatch(editSection(experienceValue));
        setEditState()
    };

    return (
        <form
            onSubmit={(evt) => handleSubmit(evt)}
            className='w-full h-auto flex flex-col shadow-md border border-[#202F55] bg-white rounded-md p-3 mb-3'
        >
            <h3 className="text-[#202F55] font-['Days_One'] border-b border-[#202F55] mb-1">
                Опыт
            </h3>
            <label className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Компания -
                <input
                    type='text'
                    name='company'
                    className='font-sans ml-2 outline-none border border-[#202F5]'
                    value={company[0].toUpperCase() + company.slice(1)}
                    onChange={handleChange}
                />
            </label>
            <label className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Должность -
                <input
                    type='text'
                    className='font-sans ml-2 outline-none border border-[#202F5]'
                    value={post[0].toUpperCase() + post.slice(1)}
                    name='post'
                    onChange={handleChange}
                />
            </label>
            <label className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Период работы - c
                <input
                    type='date'
                    className='font-sans ml-2 outline-none border border-[#202F5]'
                    value={periodWith}
                    onChange={handleChange}
                    name='periodWith'
                />
                по
                <input
                    type='date'
                    className='font-sans ml-2 outline-none border border-[#202F5]'
                    value={periodFor}
                    onChange={handleChange}
                    name='periodFor'
                />
            </label>
            <label className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Описание
                <textarea
                    value={description}
                    name='description'
                    className='w-full font-sans ml-2 outline-none border border-[#202F5]'
                    onChange={handleChange}
                />
            </label>
            <div className=' flex flex-row justify-between mt-3'>
                <button
                    type='submit'
                    className="w-32 h-8 text-white text-[12px] rounded-md bg-green-800 font-['Days_One'] cursor-pointer mt-2"
                    // onClick={() => setEditState(true)}
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
