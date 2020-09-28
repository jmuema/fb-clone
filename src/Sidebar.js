// import userEvent from '@testing-library/user-event';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import { ExpandMoreOutlined } from "@material-ui/icons";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import StorefrontIcon from "@material-ui/icons/Storefront";
import  VideoLibraryIcon  from '@material-ui/icons/VideoLibrary';
import ChatIcon from "@material-ui/icons/Chat";

function Sidebar() {
    return (
        <div className="sidebar" >
            <SidebarRow src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png " title="Ulemkamba" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />

            
        </div>
    )
}

export default Sidebar
