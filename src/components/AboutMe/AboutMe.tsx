import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewSection } from '../../slices/SectionsDataSlices';
import { toggleActiveSections } from '../../slices/SectionSlices';

export default function AboutMe() {
    const dispatch = useDispatch();
    const [valueAbout, setValueAbout] = useState({
        id: '',
        about: '',
    });
    const { about } = valueAbout;

    const handleChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValueAbout((prev) => ({ ...prev, about: evt.target.value }));
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        dispatch(addNewSection({ ...valueAbout, id: uuidv4() }));
        dispatch(toggleActiveSections('AboutMe'));
        setValueAbout({
            id: '',
            about: '',
        });
    };
    return (
        <section className='fixed inset-0 w-full h-full items-center justify-center z-50'>
            <form
                className='flex flex-col absolute top-20 left-[14%] w-3/4 h-auto bg-white shadow-2xl rounded-md p-4'
                onSubmit={(evt) => handleSubmit(evt)}
            >
                <h2 className="text-center text-xl font-['Days_One'] text-[#202F55]">
                    О себе
                </h2>
                <label
                    htmlFor=''
                    className="font-['Days_One'] text-[#202F55] text-base"
                >
                    Дополнительные сведения
                </label>
                <textarea
                    placeholder='Профессиональные качества'
                    className='h-40 p-2 outline-none font-sans border border-[#202F5] mt-1 mb-2 overflow-hidden resize-none'
                    name='skills'
                    value={about}
                    onChange={handleChange}
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
                    className="absolute top-[250px] left-[650px] w-44 h-10 text-white rounded-md bg-[#d80e0e] font-['Days_One'] font-normal cursor-pointer"
                    onClick={() => dispatch(toggleActiveSections('AboutMe'))}
                >
                    Отмена
                </button>
            </form>
        </section>
    );
}
