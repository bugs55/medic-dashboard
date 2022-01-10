import React from 'react'
import SectionHeader from '../SectionHeader'
import Table from './Table'
import 'css.gg/icons/css/user-add.css'
import 'css.gg/icons/css/trash.css'
import 'css.gg/icons/css/search.css'
import dataProjects from '../../data/data-projects.json'
import Modal, {ModalInput} from '../Modal'

export default function Projects() {

    const data = React.useMemo(() => dataProjects, []);

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const columns = React.useMemo(() => [
        {Header: 'Tytuł', accessor: 'title'},
        {Header: 'Opis', accessor: 'description'},
        {Header: 'Lekarz prowadzący', accessor: 'doctor_full_name'},
        {id: 'checked_participants', Header: 'Przebadani uczestnicy', accessor: (row) => {
            if(row.participants_num >= row.checked_participants_num){ //zauważyłem, że generator nie zadbał o ten warunek, dlatego nie pokazuje tego tam gdzie jest błąd
                return(
                    <div className="percentageWrapper">
                        <div className="percentageTitle">{`${row.checked_participants_num} z ${row.participants_num}`}</div>
                        <div className='percentageContainer'><div className='percentage' style={{width: `${row.checked_participants_num / row.participants_num * 100}%`}}></div></div>
                    </div>
                )
            }
        }},
        {id: 'actions', Header: 'Akcje', accessor: row => {
            return(
                <div className='actionIcons'>
                    <i className='gg-pen' id={row.id}></i>
                    <i className='gg-trash' id={row.id}></i>
                </div>
            )
        }}
    ], []);

    const ModalAddProject = (props) => {
        return (
            <Modal title='Dodaj projekt' {...props}>
                <ModalInput label="Nazwa" type="text" name="title" />
                <ModalInput label="Opis" type="text" name="description" />
                <ModalInput label="Lekarz prowadzący" type="text" name="doctor_full_name" />
                <ModalInput label="Maksymalna ilość uczestników" type="text" name="participants_num" />
            </Modal>
        )
    };

    const handleClick = () => {
        setIsModalOpen(prevState => !prevState)
    }

    return (
        <>
            <SectionHeader title='Projekty badawcze' showButton={false} className='secHeaderProjects' />
            <div className="sectionContent">
                <div className="sectionControls">
                    <div className="buttonWrapper">
                        <button className="primaryButton" onClick={handleClick}><i className='gg-user-add'></i>Nowy projekt</button>
                        <button className="secondaryButton"><i className='gg-trash'></i>Usuń projekt</button>
                    </div>
                    <div className="inputWrapper">
                        <input type="text" name="searchField" id="searchField" className='searchField' placeholder='Wyszukaj projekt' />
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
