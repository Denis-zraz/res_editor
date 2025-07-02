import { useSelector } from 'react-redux';
import { DataSectionsStore, Data } from '../../interface';
import { useEffect, useState } from 'react';
import TaskExperience from '../TaskExperience/TaskExperience';
import TaskEducation from '../TaskEducation';
import TaskSkills from '../TaskSkills';
import TaskAboutMe from '../TaskAboutMe';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

interface TasksListProps {
    title: string;
    preview: boolean;
}

export default function TasksList({ title, preview }: TasksListProps) {
    const [tasks, setTasks] = useState<Data[]>([]);
    const dataSlices = useSelector(
        (state: DataSectionsStore) => state.data.data
    );

    useEffect(() => {
        setTasks(dataSlices);
    }, [dataSlices]);

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;
        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const itemsCopy = Array.from(tasks); // Копируем массив, чтобы избежать мутации состояния
        const [reorderedItem] = itemsCopy.splice(result.source.index, 1); // Извлекаем перемещённый элемент
        if (result.destination !== null && result.destination !== undefined) {
            itemsCopy.splice(result.destination.index, 0, reorderedItem); // Вставляем элемент в новое положение
        }
        

        setTasks(itemsCopy); // Обновляем состояние

        // const column = boardData.columns[source.droppableId];
        // const newTaskIds = Array.from(column.taskIds);
        // newTaskIds.splice(source.index, 1);
        // newTaskIds.splice(destination.index, 0, draggableId);

        // const newColumn = {
        //     ...column,
        //     taskIds: newTaskIds,
        // };

        // const newBoardData = {
        //     ...boardData,
        //     columns: {
        //         ...boardData.columns,
        //         [newColumn.id]: newColumn,
        //     },
        // };
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={uuidv4()}>
                {(provided) => (
                    <div
                        className='w-full h-auto mt-3 mb-3'
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <h2 className="text-[#202F55] font-['Days_One']">
                            {title}
                        </h2>

                        {!tasks.length ? (
                            <p className='font-serif text-xs'>
                                Пока ничего нет
                            </p>
                        ) : (
                            tasks.map((elem: Data, index) => {
                                if ('company' in elem) {
                                    return (
                                        <TaskExperience
                                            elem={elem}
                                            key={elem.id}
                                            preview={preview}
                                            index={index}
                                        />
                                    );
                                }
                                if ('institution' in elem) {
                                    return (
                                        <TaskEducation
                                            elem={elem}
                                            key={elem.id}
                                            preview={preview}
                                            index={index}
                                        />
                                    );
                                }
                                if ('skills' in elem) {
                                    return (
                                        <TaskSkills
                                            elem={elem}
                                            key={elem.id}
                                            preview={preview}
                                            index={index}
                                        />
                                    );
                                }
                                if ('about' in elem) {
                                    return (
                                        <TaskAboutMe
                                            elem={elem}
                                            key={elem.id}
                                            preview={preview}
                                            index={index}
                                        />
                                    );
                                }
                            })
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
