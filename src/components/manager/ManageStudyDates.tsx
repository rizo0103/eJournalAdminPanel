import React, { useState } from 'react';
import './ManageStudyDates.css';
import Sidebar from '../temps/Sidebar';

interface StudyDate {
    id: number;
    date: string;
    description: string;
}

const ManageStudyDates: React.FC = () => {
    const [studyDates, setStudyDates] = useState<StudyDate[]>([
        { id: 1, date: '2024-01-01', description: 'New Year Study Session' },
        { id: 2, date: '2024-02-14', description: 'Valentine\'s Day Special' },
    ]);

    const handleAddDate = () => {
        const newDate: StudyDate = {
            id: studyDates.length + 1,
            date: '',
            description: ''
        };
        setStudyDates([...studyDates, newDate]);
    };

    const handleDateChange = (id: number, field: keyof StudyDate, value: string) => {
        const updatedDates = studyDates.map(date =>
            date.id === id ? { ...date, [field]: value } : date
        );
        setStudyDates(updatedDates);
    };

    const handleRemoveDate = (id: number) => {
        setStudyDates(studyDates.filter(date => date.id !== id));
    };

    return (
        <main className='main-content'>
            <Sidebar />
            <div className="manage-study-dates">
                <h2>Manage Study Dates</h2>
                <button className="add-date-button" onClick={handleAddDate}>Add New Date</button>
                <div className="study-dates-list">
                    {studyDates.map(date => (
                        <div key={date.id} className="study-date-item">
                            <input
                                type="date"
                                value={date.date}
                                onChange={e => handleDateChange(date.id, 'date', e.target.value)}
                            />
                            <input
                                type="text"
                                value={date.description}
                                placeholder="Description"
                                onChange={e => handleDateChange(date.id, 'description', e.target.value)}
                            />
                            <button className="remove-date-button" onClick={() => handleRemoveDate(date.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ManageStudyDates;
