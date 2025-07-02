import { useState } from 'react';
import { EducationValueState } from '../../interface';
import { useDispatch } from 'react-redux';
import { editSection } from '../../slices/SectionsDataSlices';

interface EditEducationProps {
    elem: EducationValueState;
    setEditState: () => void;
}

export default function EditEducation({
    elem,
    setEditState,
}: EditEducationProps) {
    const [educationValue, setEducationValue] = useState<EducationValueState>({
        id: elem.id,
        institution: elem.institution,
        periodWith: elem.periodWith,
        periodFor: elem.periodFor,
        specialization: elem.specialization,
    });

    const { institution, specialization, periodWith, periodFor } =
        educationValue;

    const dispatch = useDispatch();
    const handleChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = evt.target;
        setEducationValue((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        dispatch(editSection(educationValue));
        setEditState();
    };

    return (
        <form
            onSubmit={(evt) => handleSubmit(evt)}
            className='w-full h-auto flex flex-col shadow-md border border-[#202F55] bg-white rounded-md p-3 mb-3'
        >
            <h3 className="text-[#202F55] font-['Days_One'] border-b border-[#202F55] mb-1">
                Образование
            </h3>
            <label className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                Учебное заведение -
                <input
                    type='text'
                    name='institution'
                    className='font-sans ml-2 outline-none border border-[#202F5]'
                    value={institution}
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
                Специальность -
                <input
                    type='text'
                    className='font-sans ml-2 outline-none border border-[#202F5]'
                    value={specialization}
                    name='specialization'
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
