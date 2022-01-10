import React from 'react'
import SectionHeader from '../SectionHeader'
import 'css.gg/icons/css/chevron-down.css'
import dataPatients from '../../data/data-patients.json'
import dataProjects from '../../data/data-projects.json'
import SummaryChart from './SummaryChart'
import dataResults from '../../data/results-data.json'

export default function Summary() {

    const countPatientsBy = (key, value) => {
        const filteredData = dataPatients.filter(item => item[key] === value);
        return filteredData.length;
    };

    const countProjectsBy = (key, value) => {
        const filteredData = dataProjects.filter(item => item[key] === value);
        return filteredData.length;
    };

    const chartDataPatients = [
        {name: 'Mężczyźni', count: countPatientsBy('gender', 'Male')},
        {name: 'Kobiety', count: countPatientsBy('gender', 'Female')}
    ];

    const chartDataProjects = [
        {name: 'Zakończone', count: countProjectsBy('isComplete', true)},
        {name: 'Trwające', count: countProjectsBy('isComplete', false)}
    ]

    return (
        <>
            <SectionHeader title='Podsumowanie' showButton={true}/>
            <div className="sectionContent">
                <section className='summaryWrapper'>
                    <div className="summary">
                        <div className="summaryHeader">
                            <h2 className="summaryTitle">Pacjenci</h2>
                            <button className="primaryButton">Szczegóły<i className='gg-chevron-down'></i></button>
                        </div>
                        <div className="summaryDetails">
                            <div>
                                <p>Nowi pacjenci</p>
                                <h1>367</h1>
                            </div>
                            <div>
                                <p>Wszyscy</p>
                                <h1>{dataPatients.length}</h1>
                            </div>
                            <div>
                                <p>Bez zgody</p>
                                <h1>{countPatientsBy('approval', false)}</h1>
                            </div>
                        </div>
                        <SummaryChart data={chartDataPatients} />
                    </div>
                    <div className="summary">
                        <div className="summaryHeader">
                                <h2 className="summaryTitle">Projekty</h2>
                                <button className="primaryButton">Szczegóły<i className='gg-chevron-down'></i></button>
                            </div>
                            <div className="summaryDetails">
                                <div>
                                    <p>Ogółem</p>
                                    <h1>{dataProjects.length}</h1>
                                </div>
                                <div>
                                    <p>Ukończone</p>
                                    <h1>{countProjectsBy('isComplete', true)}</h1>
                                </div>
                                <div>
                                    <p>Wykonanych badań</p>
                                    <h1>375</h1>
                                </div>
                            </div>
                        <div className="summaryChart">
                            <SummaryChart data={chartDataProjects} />
                        </div>
                    </div>
                </section>
                <section className="recentResults sectionStyling">
                    <h2>Najnowsze wyniki badań</h2>
                    <table>
                        <tr>
                            <th>Tytuł</th>
                            <th>Pacjent</th>
                            <th>Projekt</th>
                            <th>Data wystawienia</th>
                        </tr>
                        {dataResults.map(item => {
                            return(
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.patient}</td>
                                <td>{item.project}</td>
                                <td>{item.date}</td>
                                <td><button className='primaryButton tableButton' >Szczegóły</button></td>
                            </tr>
                            )
                        })}

                    </table>
                </section>
            </div>
        </>
    )
}
