import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
// import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="https://material-tailwind.com?ref=mtk"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <NavbarBrand>KULTURE 808'S STUDIO</NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            <NavLink
                                href="https://material-tailwind.com/documentation/quick-start?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                {/* <Icon name="description" size="2xl" /> */}
                                <i  className="fa fa-address-card fa-2x"></i>
                                &nbsp;About US
                            </NavLink>
                            <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            {/* <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            /> */}
                                            <i className="fa fa-concierge-bell fa-2x"></i>
                                            <span className="ml-2">
                                                SERVICES
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Audio Recording
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Beats Purchase/Lease
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Photography
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Videography
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Videography
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Podcasts
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Interviews
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Freestyles
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
                            <NavLink
                                href="https://material-tailwind.com/components?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <i className="fa fa-images fa-2x"></i>
                                &nbsp;GALLERY
                            </NavLink>
                            <NavLink
                                href="https://github.com/creativetimofficial/material-tailwind?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                {/* <Icon
                                    family="font-awesome"
                                    name="fab fa-github"
                                    size="xl"
                                /> */}
                                <i className="fa fa-blog fa-2x"></i>
                                &nbsp;BLOGS
                            </NavLink>
                            <NavLink
                                href="https://github.com/creativetimofficial/material-tailwind/issues?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <i className="fa fa-at fa-2x"></i>
                                CONTACTS
                            </NavLink>
                            <a
                                href="https://www.creative-tim.com/product/material-tailwind-kit-react"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button
                                    color="transparent"
                                    className="bg-white text-black ml-4 hover:bg-black hover:text-white"
                                    ripple="dark"
                                >
                                    <i className="fa fa-calendar-check fa-lg mr-1"></i>
                                    BOOKINGS
                                </Button>
                            </a>
                            <a
                                href="https://www.creative-tim.com/product/material-tailwind-kit-react"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button
                                    color="transparent"
                                    className="bg-white text-black ml-4 hover:bg-black hover:text-white"
                                    ripple="dark"
                                >
                                    <i className="fa fa-drum fa-lg mr-1"></i>
                                    BEATS
                                </Button>
                            </a>
                            <a
                                href="https://www.creative-tim.com/product/material-tailwind-kit-react"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button
                                    color="transparent"
                                    className="bg-white text-black ml-4 hover:bg-black hover:text-white"
                                    ripple="dark"
                                >
                                    <i className="fa fa-tshirt fa-lg mr-1"></i>
                                    MERCH
                                </Button>
                            </a>
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
