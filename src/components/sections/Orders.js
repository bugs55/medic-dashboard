import React from 'react'
import SectionHeader from '../SectionHeader'
import Table from './Table'
import 'css.gg/icons/css/file-add.css'
import 'css.gg/icons/css/trash.css'
import 'css.gg/icons/css/search.css'
import dataOrders from '../../data/data-orders.json'
import Modal, {ModalInput} from '../Modal'

export default function Orders() {

    const data = React.useMemo(() => dataOrders, []);

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const columns = React.useMemo(() => [
        {Header: 'Tytuł', accessor: 'title'},
        {Header: 'Pacjent', accessor: 'patient'},
        {Header: 'Lekarz', accessor: 'doctor'},
        {Header: 'Projekt', accessor: 'project'},
        {Header: 'Data wystawienia', accessor: 'date'},
        {id: 'icComplete', Header: 'Status', accessor: row => row.isComplete ? <div className="statusDone">Wykonany</div> : <div className="statusNotDone">Niewykonany</div>},
        {id: 'actions', Header: 'Akcje', accessor: row => {
            return(
                <div className='actionIcons' style={{color: row.isComplete && 'grey'}}>
                    <i className='gg-pen' id={row.id}></i>
                    <i className='gg-trash' id={row.id}></i>
                </div>
            )
        }}
    ], []);

    const ModalAddProject = (props) => {
        return (
            <Modal title='Dodaj zlecenie' {...props}>
                <ModalInput label="Tytuł" type="text" name="title" />
                <ModalInput label="Pacjent" type="text" name="patient" />
                <ModalInput label="Lekarz" type="text" name="doctor" />
                <ModalInput label="Projekt" type="text" name="project" />
            </Modal>
        )
    };

    const handleClick = () => {
        setIsModalOpen(prevState => !prevState)
    }

    return (
        <>
            <SectionHeader title='Zlecenia badań' showButton={false} />
            <div className="sectionContent">
                <div className="sectionControls">
                    <div className="buttonWrapper">
                        <button className="primaryButton" onClick={handleClick}><i className='gg-file-add'></i>Nowe zlecenie</button>
                        <button className="secondaryButton"><i className='gg-trash'></i>Usuń zlecenie</button>
                    </div>
                    <div className="inputWrapper">
                        <input type="text" name="searchField" id="searchField" className='searchField' placeholder='Wyszukaj zlecenie' />
                        <i className="gg-search"></i>
                    </div> 
                </div>
                <div className="tableWrapper sectionStyling">
                    <Table columns={columns} data={data} />
                </div>
            </div>
            {isModalOpen && <ModalAddProject handleClick={handleClick}/>}
        </>
    )
}
