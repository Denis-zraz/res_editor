import { useState } from 'react';
import { AboutMeState } from '../../interface';
import { useDispatch } from 'react-redux';
import { editSection } from '../../slices/SectionsDataSlices';

// import React from 'react'
interface EditAboutProps {
    elem: AboutMeState;
    setEditState: () => void;
}

export default function EditAbout({ elem, setEditState }: EditAboutProps) {
    const [aboutValue, setAboutValue] = useState<AboutMeState>({
        id: elem.id,
        about: elem.about,
    });
    const { about } = aboutValue;

    const dispatch = useDispatch();
    const handleChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setAboutValue((prev) => ({ ...prev, about: evt.target.value }));
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        dispatch(editSection(aboutValue));
        setEditState();
    };
    return (
        <form
            onSubmit={(evt) => handleSubmit(evt)}
            className='w-full h-auto flex flex-col shadow-md border border-[#202F55] bg-white rounded-md p-3 mb-3'
        >
            <h3 className="text-[#202F55] font-['Days_One'] border-b border-[#202F55] mb-1">
                О себе
            </h3>
            <label className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Дополнительные сведения -
                <textarea
                    name='about'
                    className='font-sans ml-2 outline-none border border-[#202F5]'
                    value={about}
                    onChange={handleChange}
                />
            </label>
            <div className=' flex flex-row justify-between mt-3'>
                <button
                    type='submit'
                    className="w-32 h-8 text-white text-[12px] rounded-md bg-green-800 font-['Days_One'] cursor-pointer mt-2"
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
