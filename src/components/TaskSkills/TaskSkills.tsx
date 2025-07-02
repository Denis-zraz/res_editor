import { useState } from 'react';
import { SkillsValueState } from '../../interface';
import { useDispatch } from 'react-redux';
import { deleteSection } from '../../slices/SectionsDataSlices';
import EditSkills from '../EditSkills';

interface TaskSkillsProps {
    elem: SkillsValueState;
    preview: boolean;
}

export default function TaskSkills({ elem, preview }: TaskSkillsProps) {
    const { id, skills, personalSkills } = elem;
    const [editState, setEditState] = useState(false);
    const dispatch = useDispatch();
    const handleChangeEditActive = () => {
        setEditState(false);
    };

    const styles = preview
        ? 'w-full h-auto flex flex-col bg-white p-3 mb-3'
        : 'w-full h-auto flex flex-col shadow-md border border-[#202F55] bg-white rounded-md p-3 mb-3';
    
    return !editState ? (
            <div className={styles}>
                <h3 className="text-[#202F55] font-['Days_One'] border-b border-[#202F55] mb-1">
                    Навыки
                </h3>
                <h4 className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                    Профессиональные качества -
                    <p className='font-sans ml-2'>
                        {skills[0].toUpperCase() + skills.slice(1)},
                    </p>
                </h4>
                <h4 className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                    Личные качества -
                    <p className='font-sans ml-2'>
                        {personalSkills[0].toUpperCase() + personalSkills.slice(1)},
                    </p>
                </h4>
                {!preview && (
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
                )}
            </div>
        ) : (
            <EditSkills elem={elem} setEditState={handleChangeEditActive} />
        );
}
