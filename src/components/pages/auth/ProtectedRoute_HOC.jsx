import React, { useCallback, useContext, useEffect } from 'react';
import { GridLoader } from "react-spinners";
import { css } from "@emotion/react";

/*==== Import AppStoreContext HOC ====*/
import {AppStoreContext} from "../../../contexts/AppContextProvider";
import secureLocalStorage from "react-secure-storage";

//  Custom @emotion/core CSS
const customEmotionCSS = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`;


const ProtectedRouteHOC = (props) => {

    //  Global State.
    const { isAuthenticated, updateAuthAndLoggedUser } = useContext(AppStoreContext);


    const checkLoginStatus = useCallback( () => {
        //  Get users data from the local storage.
        const userData = secureLocalStorage.getItem("userData");

        if (userData !== null) {
            return updateAuthAndLoggedUser(true, userData);
        }
        else {
            //  Set state
            updateAuthAndLoggedUser(false, {});
            return window.open("/login", "_self");
        }
    }, []);

    useEffect(() => {
        (async () => {
            await checkLoginStatus()
        })();
    }, [isAuthenticated]);


    return (isAuthenticated) ? (
        props.children
    ) : (
        <div style={{
            height: "100vh",
            width: "100%",
            background: "rgba(13, 36, 2, 0.87)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000
        }}>
            <GridLoader
                size={20}
                color={"#FFFFFF"}
            />
        </div>
    );

    // return (
    //     props.children
    // )
};

export default ProtectedRouteHOC;