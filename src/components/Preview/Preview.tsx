// import React from 'react'

import TasksList from '../TasksList';

export default function Preview() {
    return (
        <section className='w-1/2 h-full bg-slate-200 p-8 pb-3 pt-3'>
            <div className='w-full h-full bg-white p-4'>
                <TasksList title={'Ваше резюме'} preview={true}/>
            </div>
        </section>
    );
}
