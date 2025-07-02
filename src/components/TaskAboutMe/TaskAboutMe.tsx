// import React from 'react'

import { useState } from 'react';
import { AboutMeState } from '../../interface';
import { useDispatch } from 'react-redux';
import { deleteSection } from '../../slices/SectionsDataSlices';
import EditAbout from '../EditAbout';
import { Draggable } from 'react-beautiful-dnd';

interface TaskAboutProps {
    elem: AboutMeState;
    preview: boolean;
    index: number;
}

export default function TaskAboutMe({ elem, preview, index }: TaskAboutProps) {
    const { id, about } = elem;
    const [editState, setEditState] = useState(false);
    const dispatch = useDispatch();
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
                        О себе
                    </h3>
                    <h4 className="text-[#202F55] font-['Days_One'] text-xs flex flex-row">
                        Дополнительные сведения -
                        <p className='font-sans ml-2'>
                            {about[0].toUpperCase() + about.slice(1)},
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
        <EditAbout elem={elem} setEditState={handleChangeEditActive} />
    );
}
