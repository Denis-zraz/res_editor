import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Preview from '../Preview';
import Experience from '../Experience';
import { toggleActiveSections } from '../../slices/SectionSlices';
import { SectionStore } from '../../interface';

export default function Main() {
    const [selectValue, setSelectValue] = useState<string>('');
    const [errorValue, setErrorValue] = useState<boolean>(false);
    const sections = useSelector((store: SectionStore) => store.sections);
    const dispatch = useDispatch();
    const { Experience: experience } = sections;

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        !selectValue.length
            ? setErrorValue(true)
            : dispatch(toggleActiveSections(selectValue));
    };

    return (
        <main className='w-full h-full flex flex-row'>
            <section className='flex flex-col w-1/2 p-6 border-r-1 border-[#202F55]'>
                <form
                    className='flex flex-col relative'
                    onSubmit={(evt) => handleSubmit(evt)}
                >
                    <label className="text-[#202F55] font-['Days_One']">
                        Секции резюме
                    </label>
                    <select
                        className='w-3/5 mt-1.5 border border-[#202F5] p-2 outline-none font-sans'
                        onChange={(evt) => {
                            setErrorValue(false);
                            setSelectValue(evt.target.value);
                        }}
                    >
                        <option value=''>Выбрать секцию</option>
                        <option value='Experience'>Опыт</option>
                        <option value='Education'>Образование</option>
                        <option value='Skills'>Навыки</option>
                        <option value='AboutMe'>О себе</option>
                    </select>
                    {errorValue && (
                        <p className='text-[10px] font-sans text-red-700'>
                            Ой, надо что-то выбрать
                        </p>
                    )}
                    <button
                        type='submit'
                        className="absolute left-84 top-[30px] w-44 h-10 text-white rounded-md bg-[#202F55] font-['Days_One'] font-normal cursor-pointer"
                    >
                        Добавить секцию
                    </button>
                </form>
                {experience && <Experience />}
            </section>
            <Preview />
        </main>
    );
}
