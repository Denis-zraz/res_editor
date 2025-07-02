import { useState } from 'react';
import { EducationValueState } from '../../interface';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import EditEducation from '../EditEducation';
import { deleteSection } from '../../slices/SectionsDataSlices';
import { Draggable } from 'react-beautiful-dnd';

// import React from 'react'
interface TaskEducationProps {
    elem: EducationValueState;
    preview: boolean;
    index: number;
}

export default function TaskEducation({ elem, preview, index }: TaskEducationProps) {
    const { id, institution, specialization, periodWith, periodFor } = elem;
    const [editState, setEditState] = useState(false);
    const dispatch = useDispatch();
    const formatDateWith = format(periodWith, 'dd.MM.yyyy');
    const formatDateFor = format(periodFor, 'dd.MM.yyyy');
    const handleChangeEditActive = () => {
        setEditState(false);
    };

    const styles = preview
        ? 'w-full h-auto flex flex-col bg-white p-3 mb-3'
        : 'w-full h-auto flex flex-col shadow-md border border-[#202F55] bg-white rounded-md p-3 mb-3';

    return !editState ? (
        <Draggable draggableId={id} index={index} isDragDisabled={preview}>
            {(provided) => (
                <div
                    className={styles}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <h3 className="text-[#202F55] font-['Days_One'] border-b border-[#202F55] mb-1">
                        Образование
                    </h3>
                    <h4 className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                        Учебное заведение -
                        <p className='font-sans ml-2'>
                            {institution[0].toUpperCase() +
                                institution.slice(1)}
                            ,
                        </p>
                    </h4>
                    <h4 className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                        Период учебы -
                        <p className='font-sans ml-2'>
                            c {formatDateWith} по {formatDateFor},
                        </p>
                    </h4>
                    <h4 className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                        Специальность -
                        <p className='font-sans ml-2'>
                            {specialization[0].toUpperCase() +
                                specialization.slice(1)}
                            ,
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
            )}
        </Draggable>
    ) : (
        <EditEducation elem={elem} setEditState={handleChangeEditActive} />
    );
}
