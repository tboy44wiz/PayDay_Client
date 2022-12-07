import { useContext } from "react";
import { Link } from "react-router-dom";
import { BiMoon, BiSun } from 'react-icons/bi';
import { IoLogOutOutline } from 'react-icons/io5';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../contexts/AppContextProvider";

/*==== Import _AppHeader_Comp SCSS ====*/
import './_AppHeader_Comp.scss';

const AppHeaderComp = () => {

    const { isLightTheme, toggleTheme, handleLogoutUser } = useContext(AppStoreContext);

    return (
        <div className="AppHeaderComp p-0">

            <nav className="navbar navbar-expand-lg navbar-light nav__wrapper">
                <div className="container-fluid p-0">

                    
                    <i className="bi bi-list hamburger__icon"></i>
                    <h3 className="dashboard__Text">IPPIS Payroll Analytics</h3>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/*<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <form className="search-box__wrapper" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <i className="bi bi-search"></i>
                        </form>
                        <Link to="#" onClick={ toggleTheme } className="nav-link">
                            <span className="theme__toggle">
                                {(isLightTheme) ? (<BiMoon/>) : (<BiSun/>)}
                            </span>
                        </Link>
                    </div>*/}


                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <button className="logout__button  d-flex align-items-center" onClick={handleLogoutUser}>
                            <IoLogOutOutline size={20} />
                            <span>Logout</span>
                        </button>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default AppHeaderComp;



/*

            <div className="user-name__wrapper">
                <p className="home__menu"><Link to="/staff_dashboard" >Home</Link></p>
                <span onClick={ handleShowHideProfileOption } className="dropdown-toggle profile__dropdown">
                    <img src={ ProfileAvatar } alt="Profile User" className="rounded-avatar"/>
                </span>
                <h3 className="admin__name">{state.staffName.split(" ")[0]}</h3>
            </div>
            {
                (state.isShowHideProfileDropdown) ? (
                    <div className="drop-down-menu dropdown-menu-right">
                        <Link to="/staff_profile" className="profile-dropdown__item has-icon">
                            <RiUser6Line className="dropdown__icon" /> Profile
                        </Link>
                        <Link to="#" onClick={ logoutUser } className="profile-dropdown__item has-icon">
                            <RiLogoutCircleRLine className="dropdown__icon" /> Logout
                        </Link>
                    </div>
                ) : (
                    <></>
                )
            }
* */
