import React from 'react'
import 'css.gg/icons/css/bell.css'
import 'css.gg/icons/css/user-add.css'
import 'css.gg/icons/css/arrow-left-r.css'
import 'css.gg/icons/css/profile.css'
import userImage from '../assets/user-image.png'
import { Link } from 'react-router-dom'
import Modal, {ModalInput} from './Modal'

export default function SectionHeader(props) {

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const ModalAddPatient = (props) => {
        return (
            <Modal title='Dodaj pacjenta' style={{zIndex: 999999}} {...props}>
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

    const SingleSectionHeader = (props) => {
        return(
            <div className="sectionHeader">
                <div className="sectionBackLinkWrapper">
                    <Link to={props.backLink} className='backLink'> {/*NOWE */}
                        <i className='gg-arrow-left-r'></i>
                        <div>{props.backLinkTitle}</div> {/*NOWE */}
                    </Link>
                    <dvi className="sectionTitleWrapper">
                        <i className='gg-profile'></i>
                        <h1 className="sectionHeaderTitle">{props.title}</h1>
                    </dvi>
                </div>
                <div className="sectionHeaderUser">
                    <button className='primaryButton' style={props.showButton ? {display: 'flex'} : {display: 'none'}}><i className='gg-user-add'></i> Nowy pacjent</button>
                    <i className='gg-bell'></i>
                    <p>Mateusz</p>
                    <img src={userImage} className='sectionHeaderUserImg' alt="user" />
                </div>
            </div>
        )
    }

    const RegularSectionHeader = (props) => {
        return(
            <div className="sectionHeader">
                <h1 className="sectionHeaderTitle">{props.title}</h1>
                <div className="sectionHeaderUser">
                    <button className='primaryButton' onClick={handleClick} style={props.showButton ? {display: 'flex'} : {display: 'none'}}><i className='gg-user-add'></i> Nowy pacjent</button>
                    <i className='gg-bell'></i>
                    <p>Mateusz</p>
                    <img src={userImage} className='sectionHeaderUserImg' alt="user" />
                </div>
                {isModalOpen && <ModalAddPatient handleClick={handleClick}/>}
            </div>
        )
    }

    const renderHeader = (props) => {
        switch(props.headerType){
            case 'single': return <SingleSectionHeader {...props} />
            default: return <RegularSectionHeader {...props} />
        }
    }

    return renderHeader(props);

}
