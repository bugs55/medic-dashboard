import React from 'react'
import SectionHeader from '../SectionHeader'
import Table from './Table'
import 'css.gg/icons/css/file-add.css'
import 'css.gg/icons/css/trash.css'
import 'css.gg/icons/css/search.css'
import dataResults from '../../data/results-data.json'
import Modal, {ModalInput} from '../Modal'

export default function Results() {

    const data = React.useMemo(() => dataResults, []);

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const columns = React.useMemo(() => [
        {Header: 'Tytuł', accessor: 'title'},
        {Header: 'Pacjent', accessor: 'patient'},
        {Header: 'Projekt', accessor: 'project'},
        {Header: 'Data wystawienia', accessor: 'date'}
    ], []);

    const ModalAddProject = (props) => {
        return (
            <Modal title='Dodaj projekt' {...props}>
                <ModalInput label="Tytuł" type="text" name="title" />
                <ModalInput label="Pacjent" type="text" name="patient" />
                <ModalInput label="Projekt" type="text" name="project" />
            </Modal>
        )
    };

    const handleClick = () => {
        setIsModalOpen(prevState => !prevState)
    }

    return (
        <>
            <SectionHeader title='Wyniki badań' showButton={false} />
            <div className="sectionContent">
                <div className="sectionControls">
                    <div className="buttonWrapper">
                        <button className="primaryButton" onClick={handleClick}><i className='gg-file-add'></i>Nowy wynik</button>
                        <button className="secondaryButton"><i className='gg-trash'></i>Usuń wynik</button>
                    </div>
                    <div className="inputWrapper">
                        <input type="text" name="searchField" id="searchField" className='searchField' placeholder='Wyszukaj wynik' />
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
