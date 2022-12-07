import React, {useContext, useEffect} from "react";
import { Link, Navigate } from "react-router-dom";

/*==== Import React Icons ====*/
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../../contexts/AppContextProvider";

/*==== Import _Login_Comp SCSS ====*/
import "./_Login_Comp.scss";

import CoatOfArmLogo from "../../../../assets/images/coat_of_arm_logo.png";
import IPPISLogo from "../../../../assets/images/app_logo.png";

const LoginComp = () => {

    // Global State
    const { email, password, isLoading, showPassword, isAuthenticated,
        handleShowPassword, handleInputChange, updateAuthAndLoggedUser, handleLoginUser } = useContext(AppStoreContext);

    const checkLoginStatus = () => {
        //  Get users data from the local storage.
        const userData = sessionStorage.getItem("userData");

        if (userData !== null) {
            const parsedUserData = JSON.parse(userData);
            return updateAuthAndLoggedUser(true, parsedUserData);
        }
        else {
            //  Set state
            updateAuthAndLoggedUser(false, {});
        }
    };

    useEffect(() => {
        checkLoginStatus();
    }, []);


    if (isAuthenticated) {
        return <Navigate to="/dashboard" />
    }


  return (
    <section className="LoginComp container-fluid p-0">
        {/*=== Hide on Large screen ===*/}
        <div className="row d-lg-none">
            <div className="col">
                <div className="logo__wrapper">
                    <img src={ CoatOfArmLogo } className="logos" alt="CoatOfArmLogo" />
                </div>
            </div>
            <div className="col">
                <div className="logo__wrapper">
                    <img src={ IPPISLogo } className="logos" alt="IPPISLogo" />
                </div>
            </div>
        </div>


        <div className="row h-100 m-0">

            {/*==== Left Aside ====*/}
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-end">
                <div className="login__wrapper">
                    <h1 className="form_title">Login</h1>
                    <small>Enter your credential to access your account.</small>

                    <br />
                    <br />
                    <br />


                    <form onSubmit={ event => handleLoginUser(event) } className="form__wrapper">
                        <div className="form-group form-group__wrapper">
                            <div className="label-link__wrapper">
                                <label htmlFor="email" className="form__label">Email address</label>
                                <Link to="#">Forgot Password?</Link>
                            </div>
                            <div className="input-box__wrapper">
                                <input type="email" id="email" name="email" value={email}
                                       onChange={(event => handleInputChange(event))}
                                       className="form-control form__input"
                                       onFocus={(event) => event.target.placeholder = ""}
                                       onBlur={(event) => event.target.placeholder = "email@domain.com"}
                                       placeholder="email@domain.com"
                                />
                            </div>
                        </div>

                        <div className="form-group form-group__wrapper">
                            <label htmlFor="password" className="form__label">Password</label>
                            <div className="input-box__wrapper">
                                <input type={ (showPassword) ? "text" : "password" } id="password" name="password" value={password}
                                       onChange={(event => handleInputChange(event))}
                                       className="form-control form__input"
                                       onFocus={(event) => event.target.placeholder = ""}
                                       onBlur={(event) => event.target.placeholder = "Password"}
                                       placeholder="Password"
                                />

                                <span onClick={ handleShowPassword } className="input--icons--suffix">
                                    { (showPassword) ? <FaRegEye/> : <FaRegEyeSlash/> }
                                </span>
                            </div>
                        </div>

                        <button type="submit" className="login__button">
                            { (isLoading) ? ("Please wait...") : ("Login") }
                        </button>

                        <div className="register-text__wrapper">
                            Don’t have an account? &nbsp;
                            <Link to="#">Register here</Link>
                        </div>
                    </form>


                </div>
            </div>

            {/*==== Right Aside ====*/}
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-start right__aside">

                <div className="logo__wrapper">
                    <img src={ CoatOfArmLogo } className="logos" alt="CoatOfArmLogo" />
                    <img src={ IPPISLogo } className="logos" alt="IPPISLogo" />
                </div>
            </div>
        </div>



        {/*<div className="row m-0 h-100 align-items-center justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 d-none d-lg-block">
                <div className="logo__wrapper">
                    <img src={ CoatOfArmLogo } className="logos" alt="CoatOfArmLogo" />
                </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4">
                <div className="login__wrapper">
                    <h1 className="form_title">Login</h1>
                    <small>Enter your credential to access your account.</small>

                    <br />
                    <br />
                    <br />


                    <form onSubmit={ event => handleLoginUser(event) } className="form__wrapper">
                        <div className="form-group form-group__wrapper">
                            <div className="label-link__wrapper">
                                <label htmlFor="email" className="form__label">Email address</label>
                                <Link to="#">Forgot Password?</Link>
                            </div>
                            <div className="input-box__wrapper">
                                <input type="email" id="email" name="email" value={email}
                                    onChange={(event => handleInputChange(event))}
                                    className="form-control form__input"
                                    onFocus={(event) => event.target.placeholder = ""}
                                    onBlur={(event) => event.target.placeholder = "email@domain.com"}
                                    placeholder="email@domain.com"
                                />
                            </div>
                        </div>

                        <div className="form-group form-group__wrapper">
                            <label htmlFor="password" className="form__label">Password</label>
                            <div className="input-box__wrapper">
                                <input type={ (showPassword) ? "text" : "password" } id="password" name="password" value={password}
                                    onChange={(event => handleInputChange(event))}
                                    className="form-control form__input"
                                    onFocus={(event) => event.target.placeholder = ""}
                                    onBlur={(event) => event.target.placeholder = "Password"}
                                    placeholder="Password"
                                />

                                <span onClick={ handleShowPassword } className="input--icons--suffix">
                                    { (showPassword) ? <FaRegEye/> : <FaRegEyeSlash/> }
                                </span>
                            </div>
                        </div>

                        <button type="submit" className="login__button">
                            { (isLoading) ? ("Please wait...") : ("Login") }
                        </button>

                        <div className="register-text__wrapper">
                            Don’t have an account? &nbsp;
                            <Link to="#">Register here</Link>
                        </div>
                    </form>
                    

                </div>
                
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-none d-lg-block">
                <div className="logo__wrapper">
                    <img src={ IPPISLogo } className="logos" alt="IPPISLogo" />
                </div>
            </div>
        </div>*/}
    </section>
  )
}

export default LoginComp;