import React from 'react'
import 'css.gg/icons/css/bell.css'
import 'css.gg/icons/css/user-add.css'
import 'css.gg/icons/css/arrow-left-r.css'
import 'css.gg/icons/css/profile.css'
import userImage from '../assets/user-image.png'
import { Link } from 'react-router-dom'

export default function SectionHeader(props) {

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
                    <button className='primaryButton' style={props.showButton ? {display: 'flex'} : {display: 'none'}}><i className='gg-user-add'></i> Nowy pacjent</button>
                    <i className='gg-bell'></i>
                    <p>Mateusz</p>
                    <img src={userImage} className='sectionHeaderUserImg' alt="user" />
                </div>
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
