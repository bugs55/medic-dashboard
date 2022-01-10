import React from 'react'
import SectionHeader from '../SectionHeader'
import singleData from '../../data/data-single.json'
import Table from './Table'
import 'css.gg/icons/css/file-add.css'
import 'css.gg/icons/css/pen.css'
import 'css.gg/icons/css/trash.css'

export default function SinglePatient() {

    const SingleInfo = (props) => {
        return(
            <div>
                <div className="singleInfoTitle">{props.title}</div>
                <h2>{props.value}</h2>
            </div>
        )
    }

    const dataResults = React.useMemo(() => singleData.results, []);
    const dataProjects = React.useMemo(() => singleData.projects, []);
    const dataOrders = React.useMemo(() => singleData.orders, []);

    const columnsResults = React.useMemo(() => [
        {Header: 'Tytuł', accessor: 'title'},
        {Header: 'Projekt', accessor: 'project'},
        {Header: 'Data wystawienia', accessor: 'date'},
        {Header: 'Link', accessor: () => <button className='singleButton'>Szczegóły</button>}
    ], []);

    const columnsProjects = React.useMemo(() => [
        {Header: 'Tytuł', accessor: 'title'},
        {Header: 'Opis', accessor: 'description'},
        {Header: 'Link', accessor: () => <button className='singleButton'>Szczegóły</button>}
    ], []);

    const columnsOrders = React.useMemo(() => [
        {Header: 'Tytuł', accessor: 'title'},
        {Header: 'Lekarz', accessor: 'doctor'},
        {Header: 'Projekt', accessor: 'project'},
        {Header: 'Data wystawienia', accessor: 'date'},
        {Header: 'Link', accessor: () => <button className='singleButton'>Szczegóły</button>}
    ], []);

    return (
        <>
            <SectionHeader title={`${singleData.first_name} ${singleData.last_name}`} showButton={false} headerType='single' backLink='/patients' backLinkTitle='Pacjenci' />
            <div className="singleButtonWrapper">
                <button className="primaryButton"> <i className="gg-file-add"></i> Nowe Zlecenie</button>
                <button className="secondaryButton"> <i className="gg-pen"></i> Edytuj dane</button>
                <button className="secondaryButton"> <i className="gg-trash"></i> Usuń pacjenta</button>
            </div>
            <div className="singleInfoWrapper">
                <SingleInfo title='PESEL' value='676545332434' />
                <SingleInfo title='Numer telefonu' value={singleData.phone_number} />
                <SingleInfo title='Adres e-mail' value={singleData.email} />
                <SingleInfo title='Adres zamieszkania' value={singleData.address} />
                <SingleInfo title='Płeć' value={singleData.gender} />
                <SingleInfo title='Zgoda na udział w projekcie' value={singleData.approval ? 'Tak' : 'Nie'} />
            </div>
            <div className="singleTables">
                <div className="singleTableWrapper">
                    <div className="singleResults sectionStyling">
                        <Table columns={columnsResults} data={dataResults} />
                    </div>
                    <div className="singleProjects sectionStyling">
                        <Table columns={columnsProjects} data={dataProjects} />
                    </div>
                </div>
                <div className="singleOrders sectionStyling">
                    <Table columns={columnsOrders} data={dataOrders} />
                </div>
            </div>
        </>
    )
}
