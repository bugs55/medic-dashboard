import React from 'react'
import SectionHeader from '../SectionHeader'
import Table from './Table'
import 'css.gg/icons/css/user-add.css'
import 'css.gg/icons/css/trash.css'
import 'css.gg/icons/css/search.css'
import 'css.gg/icons/css/check-r.css'
import 'css.gg/icons/css/pen.css'
import dataPatients from '../../data/data-patients.json'
import Modal, {ModalInput} from '../Modal'
import { Link } from 'react-router-dom'

export default function Patients() {

    const data = React.useMemo(() => dataPatients, []);
    
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const columns = React.useMemo(() => [
        {Header: 'Imię', accessor: 'first_name'},
        {Header: 'Nazwisko', accessor: 'last_name'},
        {Header: 'Numer telefonu', accessor: 'phone_number'},
        {Header: 'E-mail', accessor: 'email'},
        {id: 'approval', Header: 'Zgoda', accessor: (row) => row.approval && <i className='gg-check-r'></i>},
        {Header: 'Adres zamieszkania', accessor: 'address'},
        {id: 'link', Header: 'Link', accessor: () => <Link to='/patients/single' className='patientLink'>Szczegóły</Link>},
        {id: 'actions', Header: 'Akcje', accessor: row => {
            return(
                <div className='actionIcons'>
                    <i className='gg-pen' id={row.id}></i>
                    <i className='gg-trash' id={row.id}></i>
                </div>
            )
        }},
    ], []);

    const ModalAddPatient = (props) => {
        return (
            <Modal title='Dodaj pacjenta' {...props}>
                <ModalInput label="Imię" type="text" name="first-name" />
                <ModalInput label="Nazwisko" type="text" name="last-name" />
                <ModalInput label="Numer telefonu" type="number" name="phone-number" />
                <ModalInput label="E-mail" type="email" name="email" />
                <ModalInput label="Płeć" type="text" name="gender" />
                <ModalInput label="PESEL" type="number" name="pesel" />
                <ModalInput label="Adres zamieszkania" type="text" name="address" />
                <ModalInput label="Czy pacjent wyraża zgodę na udział w projekcie?" type="checkbox" name="approval" style={{display: 'flex', flexDirection: 'row-reverse', gap: 10}}/>
            </Modal>
        )
    };

    const handleClick = () => {
        setIsModalOpen(prevState => !prevState)
    }

    return (
        <>
            <SectionHeader title='Pacjenci' showButton={false} />
            <div className="sectionContent">
                <div className="sectionControls">
                    <div className="buttonWrapper">
                        <button className="primaryButton" onClick={handleClick}><i className='gg-user-add'></i>Nowy pacjent</button>
                        <button className="secondaryButton"><i className='gg-trash'></i>Usuń pacjenta</button>
                    </div>
                    <div className="inputWrapper">
                        <input type="text" name="searchField" id="searchField" className='searchField' placeholder='Wyszukaj pacjenta' />
                        <i className="gg-search"></i>
                    </div> 
                </div>
                <div className="tableWrapper sectionStyling">
                    <Table columns={columns} data={data} />
                </div>
            </div>
            {isModalOpen && <ModalAddPatient handleClick={handleClick}/>}
        </>
    )
}
