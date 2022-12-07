import React, { useContext } from "react";

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../contexts/AppContextProvider";

/*==== Import ProtectedRoute HOC ====*/
import ProtectedRouteHOC from "../../pages/auth/ProtectedRoute_HOC";


/*==== Import Components ====*/
import AppSideDrawerComp from "../AppSideDrawer_Comp/AppSideDrawer_Comp";
import AppHeaderComp from "../AppHeader_Comp/AppHeader_Comp";
import AppFooterComp from "../AppFooter_Comp/AppFooter_Comp";

/*==== Import _AppLayout_HOC SCSS ====*/
import './_AppLayout_HOC.scss';


const AppLayoutHOC = (props) => {

    const { isLightTheme } = useContext(AppStoreContext);

    return (
        <ProtectedRouteHOC>
            <div className="AppLayoutComp">


                {/*==== App Left Side Drawer ====*/}
                <aside className={(isLightTheme) ? "aside-light__theme" : "aside-dark__theme"}>
                    <AppSideDrawerComp />
                </aside>


                {/*==== Header ====*/}
                <header className={(isLightTheme) ? "header-light__theme" : "header-dark__theme"}>
                    <AppHeaderComp />
                </header>

                {/*==== Body ====*/}
                <div className={(isLightTheme) ? "body body-light__theme" : "body body-dark__theme"}>
                    { props.children }
                </div>

                {/*==== Footer ====*/}
                <footer className={(isLightTheme) ? "footer-light__theme" : "footer-dark__theme"}>
                    <AppFooterComp />
                </footer>
            </div>
        </ProtectedRouteHOC>
    );
};

export default AppLayoutHOC;
