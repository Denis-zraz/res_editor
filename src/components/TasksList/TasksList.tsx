import { useSelector } from 'react-redux';
import { DataSectionsStore, Data } from '../../interface';
import { useEffect, useState } from 'react';
import TaskExperience from '../TaskExperience/TaskExperience';
import TaskEducation from '../TaskEducation';

export default function TasksList() {
    const [tasks, setTasks] = useState<Data[]>([]);
    const dataSlices = useSelector(
        (state: DataSectionsStore) => state.data.data
    );

    useEffect(() => {
        setTasks(dataSlices);
    }, [dataSlices]);
    return (
        <div className='w-full h-auto mt-3 mb-3'>
            <h2 className="text-[#202F55] font-['Days_One']">Части резюме</h2>
            {!tasks.length ? (
                <p className='font-serif text-xs'>Пока ничего нет</p>
            ) : (
                tasks.map((elem: Data) => {
                    if ('company' in elem) {
                        return <TaskExperience elem={elem} key={elem.id} />;
                    }
                    if ('institution' in elem) {
                        return <TaskEducation key={elem.id} />;
                    }
                })
            )}
        </div>
    );
}
