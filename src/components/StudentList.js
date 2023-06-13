import React from 'react';
import './StudentList.css';
import Student from './Student';

const StudentList = () => {
    const headingClass = 'student-list__heading';
    const listClass = 'student-list';

    return (
        <section>
            <h2 className={headingClass}>Student List</h2>
            <ul className={listClass}>
                <li><Student /></li>
                <li><Student /></li>
                <li><Student /></li>
            </ul>
        </section>
    );
};

export default StudentList;