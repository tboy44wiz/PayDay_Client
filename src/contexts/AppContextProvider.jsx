import React, { createContext, useState } from "react";

import  secureLocalStorage  from  "react-secure-storage";

import axios from "axios";
import YupValidator from "../utils/Yup_Validator";
import { toast } from 'react-toastify';

/*==== Import Icons ====*/
import { HiOutlineUserGroup } from 'react-icons/hi';
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi';
import { SiPagerduty,SiAntdesign } from 'react-icons/si';
import { BsBank } from 'react-icons/bs';
import { MdOutlineHomeRepairService } from 'react-icons/md';

import { user_login_url, filters_url,
    get_dashboard_main_table_url, get_dashboard_top_ten_table_url, get_dashboard_segment_one_url, get_dashboard_segment_two_url, get_dashboard_segment_three_url,
    get_all_employee_main_table_url, get_all_employee_segment_one_url, get_all_employee_segment_two_url,
    get_all_financial_main_table_url, get_financial_segment_one_url, get_financial_segment_two_url, get_financial_segment_three_url, get_financial_segment_four_url,
} from "../routes/API_Routes";


const AppStoreContext = createContext();

const AppContextProvider = (props) => {
    const [state, setState] = useState({
        email: "",
        password: "",
        user: {},

        isLoading: false,
        isChartLoading: false,
        isAuthenticated: false,


        sidebarShow: true,
        isLightTheme: true,


        /**
         * ///////////////////////////////////////////////////////////////////////////////
         *  GLOBAL VARIABLES...
         * ///////////////////////////////////////////////////////////////////////////////
         **/
        /////////////////////////////  Get All Filter Data. //////////////////////////////


        /**
         * ///////////////////////////////////////////////////////////////////////////////
         *  DASHBOARD VARIABLES...
         * ///////////////////////////////////////////////////////////////////////////////
         **/
        isDashBoardTableLoading: false,
        isDashBoardTopTenLoading: false,
        isDashBoardSegmentOneLoading: false,
        isDashBoardSegmentTwoLoading: false,
        isDashBoardSegmentThreeLoading: false,
        dashboardSelectedTab: {
            tableTab: true,
            chartTab: false,
        },

        ////////////////////////////  Dashboard Counter Data. ///////////////////////////
        dashboardCounterData: [],

        //////////////////////////  Dashboard Filter Options. ///////////////////////////
        dashboardMinistryFilterOptions: [],
        dashboardServiceProviderFilterOptions: [],
        dashboardPFAFilterOptions: [],
        dashboardStateFilterOptions: [],
        dashboardStatusFilterOptions: [],
        dashboardBankFilterOptions: [],

        dashboardSelectedMinistries: {value: "MDA", label: "MDA"},
        dashboardSelectedServiceProvider: {value: "Service Providers", label: "Service Providers"},
        dashboardSelectedPFA: {value: "PFA", label: "PFA"},
        dashboardSelectedState: {value: "Resident States", label: "Resident States"},
        dashboardSelectedStatus: {value: "Employee Status", label: "Employee Status"},
        dashboardSelectedBank: {value: "Bank", label: "Bank"},
        dashboardSelectedPayrollRange: [],
        dashboardSelectedEnrollmentRange: [],

        dashboardTableData: [],
        dashboardFromPage: 0,
        dashboardToPage: 0,
        dashboardFirstPageURL: "",
        dashboardLastPageURL: "",
        dashboardPrevPageURL: "",
        dashboardNextPageURL: "",
        dashboardTotalData: 0,

        totalEmployeeCount: 0,
        dashboardTopTenBanksTableData: [],
        dashboardTopTenPFAsTableData: [],

        dashboardGenderPieData: [],
        dashboardAgeGroupBarData: {},
        dashboardAnnualPaymentAreaData: [],
        dashboardAmountReceivedByPFAsLineData: {},
        dashboardTopEmployeeByMinistryData: {},
        dashboardMapData: [],
        dashboardEmployeeDistributionRingData: {},
        dashboardMonthlyEmployeePaymentBarData: {},


        /**
         * ///////////////////////////////////////////////////////////////////////////////
         *  EMPLOYEE VARIABLES...
         * ///////////////////////////////////////////////////////////////////////////////
         **/

        isEmployeeTableLoading: false,
        isEmployeeSegmentOneLoading: false,
        isEmployeeSegmentTwoLoading: false,
        isEmployeeSegmentThreeLoading: false,
        isEmployeeSegmentFourLoading: false,

        employeeSelectedTab: {
            tableTab: true,
            chartTab: false,
        },

        //////////////////////////  Employee Filter Options. ///////////////////////////
        employeeMinistryFilterOptions: [],
        employeeServiceProviderFilterOptions: [],
        employeePFAFilterOptions: [],
        employeeStateFilterOptions: [],
        employeeStatusFilterOptions: [],

        employeeSelectedMinistries: {value: "MDA", label: "MDA"},
        employeeSelectedServiceProvider: {value: "Service Providers", label: "Service Providers"},
        employeeSelectedPFA: {value: "PFA", label: "PFA"},
        employeeSelectedState: {value: "States", label: "States"},
        employeeSelectedStatus: {value: "Status", label: "Status"},
        employeeSelectedEnrollmentRange: [],

        ///////////////////////// Employee Table & Charts. ///////////////////////////
        employeeTableData: [],
        employeeFromPage: 0,
        employeeToPage: 0,
        employeeFirstPageURL: "",
        employeeLastPageURL: "",
        employeePrevPageURL: "",
        employeeNextPageURL: "",
        employeeTotalData: 0,

        employeeGenderPieData: [],
        employeeAgeGroup: [],
        employeeRecordsByMinistryTableData: [],
        employeeRecordsByMinistryBarChartData: {},
        employeeDistributionPieRingData: {},
        employeeSalaryRangePieData: {},
        employeeSalaryRangeTableData: [],
        employeeRecordsByStateTableData: [],
        employeeRecordsByAgeGroupTableData2: [],
        employeeRecordsByAgeGroupStackBarData2: {},

        ////////////////////////////  Employee Counter Data. ///////////////////////////
        employeeCounterData: [],


        /**
         * ///////////////////////////////////////////////////////////////////////////////
         *  ENROLLMENT VARIABLES...
         * ///////////////////////////////////////////////////////////////////////////////
         **/
        ////////////////////////////  Enrollment Counter Data. ///////////////////////////
        enrollmentCounterData: [
            {
                title: "Total No. of Employee",
                number: 20000,
                icon: HiOutlineUserGroup
            },
            {
                title: "Total No. Of MDA",
                number: 527,
                icon: MdOutlineHomeRepairService
            },
            {
                title: "Avg. Employee Age",
                number: "50.1",
                icon: HiOutlineUserGroup
            }
        ],


        /**
         * ///////////////////////////////////////////////////////////////////////////////
         *  FINANCIAL VARIABLES...
         * ///////////////////////////////////////////////////////////////////////////////
         **/

        isFinancialTableLoading: false,
        isFinancialSegmentOneLoading: false,
        isFinancialSegmentTwoLoading: false,
        isFinancialSegmentThreeLoading: false,
        isFinancialSegmentFourLoading: false,

        financialSelectedTab: {
            tableTab: true,
            chartTab: false,
        },

        ////////////////////////////  Financial Counter Data. ///////////////////////////
        financialCounterData: [],

        ///////////////////////// Financial Table & Charts. ///////////////////////////
        financialDeductionTableData: [],
        financialDeductionPieWithRadiusData: {},
        financialDistributionTableData: [],
        financialDistributionRingData: {},
        financialTableData: [],
        financialFromPage: 0,
        financialToPage: 0,
        financialFirstPageURL: "",
        financialLastPageURL: "",
        financialPrevPageURL: "",
        financialNextPageURL: "",
        financialTotalData: 0,

        financialEarningDeductionPieData: [],
        financialAnnualEmployeePaymentTableData: [],
        financialMDASalaryDeductionTableData: [],
        financialMDASalaryDeductionData: {},
        financialAmountReceivedByPFAsTableData: [],
        financialAmountReceivedByPFAsLineData: {},
        financialAmountReceivedByBanksTableData: [],
        financialAmountReceivedByBanksLineData: {},

        //////////////////////////  Financial Filter Options. ///////////////////////////
        financialMinistryFilterOptions: [],
        financialServiceProviderFilterOptions: [],
        financialPFAFilterOptions: [],
        financialBankFilterOptions: [],
        financialPayrollFilterOptions: [],

        financialSelectedMinistries: {value: "MDA", label: "MDA"},
        financialSelectedServiceProvider: {value: "Service Providers", label: "Service Providers"},
        financialSelectedPFA: {value: "PFA", label: "PFA"},
        financialSelectedBank: {value: "Bank", label: "Bank"},
        financialSelectedPayrollRange: [],


    });


    // const navigate = useNavigate();


    //  React Toast  Custom Methods.
    const successToast = (message) => {
        return toast.success(message, {hideProgressBar: true});
    };
    // const warningToast = (message) => {
    //     return toast.warning(message, { hideProgressBar: true });
    // }
    const errorToast = (message) => {
        return toast.error(message, {hideProgressBar: true});
    };


    //  Toggle Theme.
    const toggleTheme = () => {
        const {isLightTheme} = state;
        setState({
            ...state,
            isLightTheme: !isLightTheme,
        });
    };

    //  Switch Event Tabs.
    const switchDashboardTabs = (tabName) => {
        switch (tabName) {
            case "tableTab" :
                setState((prevState) => ({
                    ...prevState,
                    dashboardSelectedTab: {
                        tableTab: true,
                        chartTab: false,
                    },
                }));
                break;

            default :
                setState((prevState) => ({
                    ...prevState,
                    dashboardSelectedTab: {
                        tableTab: false,
                        chartTab: true,
                    },
                }));
                break;
        }
    };
    const switchEmployeeTabs = (tabName) => {
        switch (tabName) {
            case "tableTab" :
                setState((prevState) => ({
                    ...prevState,
                    employeeSelectedTab: {
                        tableTab: true,
                        chartTab: false,
                    },
                }));
                break;

            default :
                setState((prevState) => ({
                    ...prevState,
                    employeeSelectedTab: {
                        tableTab: false,
                        chartTab: true,
                    },
                }));
                break;
        }
    };
    const switchFinancialTabs = (tabName) => {
        switch (tabName) {
            case "tableTab" :
                setState((prevState) => ({
                    ...prevState,
                    financialSelectedTab: {
                        tableTab: true,
                        chartTab: false,
                    },
                }));
                break;

            default :
                setState((prevState) => ({
                    ...prevState,
                    financialSelectedTab: {
                        tableTab: false,
                        chartTab: true,
                    },
                }));
                break;
        }
    };

    const updateAuthAndLoggedUser = (value, userData) => {
        setState((prevState) => ({
            ...prevState,
            isAuthenticated: value,
            user: userData
        }));
    };

    //  Input Change Handler.
    const handleInputChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };


    //  Handle Show Password.
    const handleShowPassword = () => {
        setState((prevState) => ({
            ...prevState,
            showPassword: !state.showPassword,
        }));
    };


    //  Handle Login User.
    const handleLoginUser = async (event) => {
        event.preventDefault();

        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isLoading: true,
            showPassword: false,
        }));

        //  Destructure the required form data from the state.
        const {email, password} = state;

        try {
            //  Validate the form data which is the "reqBody" using yup.
            const userData = await YupValidator.userLogin.validate({email, password});

            // console.log("HHHH::: ", userData);

            //  Make Axios call.
            const response = await axios({
                method: "post",
                url: user_login_url,
                data: userData,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (response.data.success) {
                const responseData = response.data;
                const user = responseData.data.user;

                // console.log("HHHH::: ", user);


                //  Save user data to Local Storage.
                // sessionStorage.setItem('userData', JSON.stringify(user));
                secureLocalStorage.setItem("userData", user);

                const successMessage = responseData.message;
                successToast(successMessage);

                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    user: user,
                    isLoading: false,
                    isAuthenticated: true,
                }));
            }
        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isLoading: false,
            }));
            console.log(error);
        }
    };

    //  Handle Logout user.
    const handleLogoutUser = async () => {

        secureLocalStorage.removeItem("userData");

        //  Update the state.
        return setState((prevState) => ({
            ...prevState,
            user: {},
            isAuthenticated: false,
        }));
    };


    /**
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     *  GLOBAL FUCTIONS...
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     **/
        /////////////////////////////  Get All Filter Data. //////////////////////////////
    const handleGetAllFilterData = async () => {

            try {

                //  Get users data from the local storage.
                const userData = secureLocalStorage.getItem("userData");
                let token;
                if (userData !== null) {
                    token = userData.token;
                }

                //  Make Axios call.
                const response = await axios({
                    method: "get",
                    url: filters_url,
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `${token}`
                    }
                });

                if (response.data.success) {
                    const filterData = response.data.data;
                    const {ministries, service_providers, pfa_names, states, status, banks} = filterData;

                    const allMinistries = ministries.map((eachMinistry) => {
                        const titleCaseString = eachMinistry.toLowerCase().split(" ")
                            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                            .join(" ");
                        return {label: titleCaseString, value: titleCaseString};
                    });

                    const serviceProviders = service_providers.map((eachServiceProvider) => {
                        const titleCaseString = eachServiceProvider.toLowerCase().split(" ")
                            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                            .join(" ");
                        return {label: titleCaseString, value: titleCaseString};
                    });

                    const pfaNames = pfa_names.map((eachPfA) => {
                        const titleCaseString = eachPfA.toLowerCase().split(" ")
                            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                            .join(" ");
                        return {label: titleCaseString, value: titleCaseString};
                    });

                    const allStates = states.map((eachState) => {
                        const titleCaseString = eachState.toLowerCase().split(" ")
                            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                            .join(" ");
                        return {label: titleCaseString, value: titleCaseString};
                    });

                    const allStatus = status.map((eachStatus) => {
                        return {label: eachStatus, value: eachStatus};
                    });

                    const allBanks = banks.map((eachBank) => {
                        const titleCaseString = eachBank.toLowerCase().split(" ")
                            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                            .join(" ");
                        return {label: titleCaseString, value: titleCaseString};
                    });

                    // console.log("RESPONSE:::", filterData);


                    //  Update the state.
                    return setState((prevState) => ({
                        ...prevState,

                        //  For Dashboard.
                        dashboardMinistryFilterOptions: allMinistries,
                        dashboardServiceProviderFilterOptions: serviceProviders,
                        dashboardPFAFilterOptions: pfaNames,
                        dashboardStateFilterOptions: allStates,
                        dashboardStatusFilterOptions: allStatus,
                        dashboardBankFilterOptions: allBanks,

                        //  For Employee.
                        employeeMinistryFilterOptions: allMinistries,
                        employeeServiceProviderFilterOptions: serviceProviders,
                        employeePFAFilterOptions: pfaNames,
                        employeeStateFilterOptions: allStates,
                        employeeStatusFilterOptions: allStatus,

                        //  For Financial.
                        financialMinistryFilterOptions: allMinistries,
                        financialServiceProviderFilterOptions: serviceProviders,
                        financialPFAFilterOptions: pfaNames,
                        financialBankFilterOptions: allBanks,
                    }));
                }
            } catch (error) {
                let errorMessage;
                if (error.errors) {
                    errorMessage = error.errors[0];
                    errorToast(errorMessage);
                } else {
                    errorMessage = error;
                    errorToast(errorMessage);
                }
                setState((prevState) => ({
                    ...prevState,
                }));
                console.log(error);
            }
        };


    /**
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     *  DASHBOARD FUCTIONS...
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     **/
        //  Get Dashboard Main Table.
    const handleGetDashboardMainTableData = async () => {
        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isDashBoardTableLoading: true,

        }));

        const {dashboardSelectedMinistries, dashboardSelectedServiceProvider, dashboardSelectedPFA, dashboardSelectedState, dashboardSelectedStatus, dashboardSelectedBank, dashboardSelectedEnrollmentRange} = state;

        const requestBody = {
            ministry: (dashboardSelectedMinistries.value !== "MDA") ? dashboardSelectedMinistries.value : "",
            serviceProvider: (dashboardSelectedServiceProvider.value !== "Service Providers") ? dashboardSelectedServiceProvider.value : "",
            pfa: (dashboardSelectedPFA.value !== "PFA") ? dashboardSelectedPFA.value : "",
            state: (dashboardSelectedState.value !== "Resident States") ? dashboardSelectedState.value : "",
            status: (dashboardSelectedStatus.value !== "Employee Status") ? dashboardSelectedStatus.value : "",
            bank: (dashboardSelectedBank.value !== "Bank") ? dashboardSelectedBank.value : "",
            enrollmentFrom: (dashboardSelectedEnrollmentRange[0] !== undefined) ? dashboardSelectedEnrollmentRange[0].toLocaleDateString() : "",
            enrollmentTo: (dashboardSelectedEnrollmentRange[1] !== undefined) ? dashboardSelectedEnrollmentRange[1].toLocaleDateString() : ""
        };
        // console.log("LLLLL::: ", requestBody.pfa);

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${get_dashboard_main_table_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}
            &pfa=${requestBody.pfa}&state=${requestBody.state}&status=${requestBody.status}&bank=${requestBody.bank}
            &enrollmentFrom=${requestBody.enrollmentFrom}&enrollmentTo=${requestBody.enrollmentTo}`,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {master_records, data_count: dashboardTotalData,} = responseData;
                const {
                    data: dashboardData,
                    from: dashboardFromPage,
                    to: dashboardToPage,
                    first_page_url: dashboardFirstPageURL,
                    prev_page_url: dashboardPrevPageURL,
                    next_page_url: dashboardNextPageURL,
                } = master_records;

                // console.log("RESPONSE::: ", dashboardTotalData);

                //  Tables...
                const dashboardRecord = dashboardData.map((eachDashboardData, index) => {
                    const ministryTitleCaseString = eachDashboardData.ministry.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    const serviceProviderTitleCaseString = eachDashboardData.provider_name.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");

                    return {
                        serialNumber: index + 1,
                        ippis: eachDashboardData.ippis_number,
                        firstName: eachDashboardData.first_name,
                        middleName: eachDashboardData.middle_name,
                        lastName: eachDashboardData.last_name,
                        mda: ministryTitleCaseString,
                        serviceProvider: serviceProviderTitleCaseString,
                        pfa: eachDashboardData.pfa_name,
                        bank: eachDashboardData.bank_name,
                        netSalary: parseFloat(eachDashboardData.total_earnings.toFixed(2)).toLocaleString(),
                        enrollmentPeriod: eachDashboardData.original_date_of_hire,
                        dob: eachDashboardData.date_of_birth,
                    };
                });


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  DASHBOARD SCREEN DATA.
                    dashboardTableData: dashboardRecord,
                    dashboardFromPage: dashboardFromPage,
                    dashboardToPage: dashboardToPage,
                    dashboardFirstPageURL: dashboardFirstPageURL,
                    dashboardPrevPageURL: dashboardPrevPageURL,
                    dashboardNextPageURL: dashboardNextPageURL,
                    dashboardTotalData: dashboardTotalData,

                    isDashBoardTableLoading: false,
                }));
            }
        } catch (error) {
                let errorMessage;
                if (error.errors) {
                    errorMessage = error.errors[0];
                    errorToast(errorMessage);
                } else {
                    errorMessage = error.response.data.message;
                    errorToast(errorMessage);
                }
                setState((prevState) => ({
                    ...prevState,
                    isDashBoardTableLoading: false,
                }));
                console.log(error);
            }
    };

    //  Get the First, Prev, Next and Last Page
    const getDashboardNextAndPrevPage = async (requestType) => {
        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isDashBoardTableLoading: true,
        }));

        const {dashboardSelectedMinistries, dashboardSelectedServiceProvider, dashboardSelectedPFA, dashboardSelectedState, dashboardSelectedStatus, dashboardSelectedBank, dashboardSelectedEnrollmentRange} = state;

        const requestBody = {
            ministry: (dashboardSelectedMinistries.value !== "MDA") ? dashboardSelectedMinistries.value : "",
            serviceProvider: (dashboardSelectedServiceProvider.value !== "Service Providers") ? dashboardSelectedServiceProvider.value : "",
            pfa: (dashboardSelectedPFA.value !== "PFA") ? dashboardSelectedPFA.value : "",
            state: (dashboardSelectedState.value !== "Resident States") ? dashboardSelectedState.value : "",
            status: (dashboardSelectedStatus.value !== "Employee Status") ? dashboardSelectedStatus.value : "",
            bank: (dashboardSelectedBank.value !== "Bank") ? dashboardSelectedBank.value : "",
            enrollmentFrom: (dashboardSelectedEnrollmentRange[0] !== undefined) ? dashboardSelectedEnrollmentRange[0].toLocaleDateString() : "",
            enrollmentTo: (dashboardSelectedEnrollmentRange[1] !== undefined) ? dashboardSelectedEnrollmentRange[1].toLocaleDateString() : ""
        };
        console.log("LLLLL::: ", requestBody.pfa);

        const {dashboardFirstPageURL, dashboardPrevPageURL, dashboardNextPageURL, dashboardLastPageURL} = state;
        const requestURL = (requestType === "firstPage")
            ? (dashboardFirstPageURL)
            : (requestType === "prevPage")
                ? (dashboardPrevPageURL === null) ? (dashboardFirstPageURL) : (dashboardPrevPageURL)
                : (requestType === "nextPage")
                    ? (dashboardNextPageURL)
                    : (dashboardLastPageURL);

        // console.log("RRRRR::: ", requestURL);

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${requestURL}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}
                &pfa=${requestBody.pfa}&state=${requestBody.state}&status=${requestBody.status}&bank=${requestBody.bank}
                &enrollmentFrom=${requestBody.enrollmentFrom}&enrollmentTo=${requestBody.enrollmentTo}`,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {master_records, data_count: dashboardTotalData,} = responseData;
                const {
                    data: dashboardData,
                    from: dashboardFromPage,
                    to: dashboardToPage,
                    first_page_url: dashboardFirstPageURL,
                    last_page_url: dashboardLastPageURL,
                    prev_page_url: dashboardPrevPageURL,
                    next_page_url: dashboardNextPageURL,
                } = master_records;

                //  Tables...
                const dashboardRecord = dashboardData.map((eachDashboardData, index) => {
                    const ministryTitleCaseString = eachDashboardData.ministry.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    const serviceProviderTitleCaseString = eachDashboardData.provider_name.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");

                    return {
                        serialNumber: dashboardFromPage + index,
                        ippis: eachDashboardData.ippis_number,
                        firstName: eachDashboardData.first_name,
                        middleName: eachDashboardData.middle_name,
                        lastName: eachDashboardData.last_name,
                        mda: ministryTitleCaseString,
                        serviceProvider: serviceProviderTitleCaseString,
                        pfa: eachDashboardData.pfa_name,
                        bank: eachDashboardData.bank_name,
                        netSalary: parseFloat(eachDashboardData.total_earnings.toFixed(2)).toLocaleString(),
                        enrollmentPeriod: eachDashboardData.original_date_of_hire,
                        dob: eachDashboardData.date_of_birth,
                    };
                });

                // console.log("RESPONSE::: ", dashboardTotalData);


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  DASHBOARD SCREEN DATA.
                    dashboardTableData: dashboardRecord,
                    dashboardFromPage: dashboardFromPage,
                    dashboardToPage: dashboardToPage,
                    dashboardFirstPageURL: dashboardFirstPageURL,
                    dashboardLastPageURL: dashboardLastPageURL,
                    dashboardPrevPageURL: dashboardPrevPageURL,
                    dashboardNextPageURL: dashboardNextPageURL,
                    dashboardTotalData: dashboardTotalData,

                    isDashBoardTableLoading: false,
                }));
            }
        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isDashBoardTableLoading: false,
            }));
            console.log(error);
        }
    };

    //  Get Dashboard Top Ten Banks & PFAs Table.
    const handleGetDashboardTopTenTableData = async () => {
        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isDashBoardTopTenLoading: true,
        }));

        const {dashboardSelectedMinistries, dashboardSelectedServiceProvider, dashboardSelectedPFA, dashboardSelectedState, dashboardSelectedStatus, dashboardSelectedBank, dashboardSelectedEnrollmentRange} = state;

        const requestBody = {
            ministry: (dashboardSelectedMinistries.value !== "MDA") ? dashboardSelectedMinistries.value : "",
            serviceProvider: (dashboardSelectedServiceProvider.value !== "Service Providers") ? dashboardSelectedServiceProvider.value : "",
            pfa: (dashboardSelectedPFA.value !== "PFA") ? dashboardSelectedPFA.value : "",
            state: (dashboardSelectedState.value !== "Resident States") ? dashboardSelectedState.value : "",
            status: (dashboardSelectedStatus.value !== "Employee Status") ? dashboardSelectedStatus.value : "",
            bank: (dashboardSelectedBank.value !== "Bank") ? dashboardSelectedBank.value : "",
            enrollmentFrom: (dashboardSelectedEnrollmentRange[0] !== undefined) ? dashboardSelectedEnrollmentRange[0].toLocaleDateString() : "",
            enrollmentTo: (dashboardSelectedEnrollmentRange[1] !== undefined) ? dashboardSelectedEnrollmentRange[1].toLocaleDateString() : ""
        };

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${get_dashboard_top_ten_table_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}
                &pfa=${requestBody.pfa}&state=${requestBody.state}&status=${requestBody.status}&bank=${requestBody.bank}
                &enrollmentFrom=${requestBody.enrollmentFrom}&enrollmentTo=${requestBody.enrollmentTo}`,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {top_banks, top_pfas,} = responseData;

                // console.log("RESPONSE::: ", responseData);

                //  Top Ten Banks Table...
                let bankSum = 0.0;
                top_banks.forEach(value => bankSum += parseFloat(value.amount));
                const dashboardTopTenBanksTableData = top_banks.map((eachBank, index) => {
                    const titleCaseString = eachBank.bank_name.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    return {
                        serialNumber: index + 1,
                        name: titleCaseString,
                        amount: parseFloat(eachBank.amount.toFixed(2)).toLocaleString(),
                        percentage: ((eachBank.amount / bankSum) * 100).toFixed(2),
                    };
                });

                //  Top Ten PFAs Table...
                let pfaSum = 0.0;
                top_pfas.forEach(value => pfaSum += parseFloat(value.amount));
                const dashboardTopTenPFAsTableData = top_pfas.map((eachPFA, index) => {
                    const titleCaseString = eachPFA.pfa_name.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    return {
                        serialNumber: index + 1,
                        name: titleCaseString,
                        amount: parseFloat(eachPFA.amount.toFixed(2)).toLocaleString(),
                        percentage: (eachPFA.amount !== 0) ? ((eachPFA.amount / pfaSum) * 100).toFixed(2) : 0,
                    };
                });


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  DASHBOARD SCREEN DATA.
                    dashboardTopTenBanksTableData: dashboardTopTenBanksTableData,
                    dashboardTopTenPFAsTableData: dashboardTopTenPFAsTableData,

                    isDashBoardTopTenLoading: false,
                }));
            }
        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isDashBoardTopTenLoading: false,
            }));
            console.log(error);
        }
    };

    //  Get Dashboard Charts.
    const handleGetDashboardSegmentOneData = async () => {
        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isDashBoardSegmentOneLoading: true,
        }));

        const {dashboardSelectedMinistries, dashboardSelectedServiceProvider, dashboardSelectedPFA, dashboardSelectedState, dashboardSelectedStatus, dashboardSelectedBank, dashboardSelectedEnrollmentRange} = state;

        const requestBody = {
            ministry: (dashboardSelectedMinistries.value !== "MDA") ? dashboardSelectedMinistries.value : "",
            serviceProvider: (dashboardSelectedServiceProvider.value !== "Service Providers") ? dashboardSelectedServiceProvider.value : "",
            pfa: (dashboardSelectedPFA.value !== "PFA") ? dashboardSelectedPFA.value : "",
            state: (dashboardSelectedState.value !== "Resident States") ? dashboardSelectedState.value : "",
            status: (dashboardSelectedStatus.value !== "Employee Status") ? dashboardSelectedStatus.value : "",
            bank: (dashboardSelectedBank.value !== "Bank") ? dashboardSelectedBank.value : "",
            enrollmentFrom: (dashboardSelectedEnrollmentRange[0] !== undefined) ? dashboardSelectedEnrollmentRange[0].toLocaleDateString() : "",
            enrollmentTo: (dashboardSelectedEnrollmentRange[1] !== undefined) ? dashboardSelectedEnrollmentRange[1].toLocaleDateString() : ""
        };

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${get_dashboard_segment_one_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}
                &pfa=${requestBody.pfa}&state=${requestBody.state}&status=${requestBody.status}&bank=${requestBody.bank}
                &enrollmentFrom=${requestBody.enrollmentFrom}&enrollmentTo=${requestBody.enrollmentTo}`,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {
                    total_employee_count, total_mda, total_pfa, no_providers, no_banks, total_salary_paid, total_deductions,
                    employee_gender, age_group
                } = responseData;


                //  Counters...
                const dashboardCounterData = [
                    {
                        title: "Total No. of Employee",
                        number: total_employee_count,
                        icon: HiOutlineUserGroup
                    },
                    {
                        title: "Total No. of MDA",
                        number: total_mda,
                        icon: SiAntdesign
                    },
                    {
                        title: "Total No of PFAs",
                        number: total_pfa,
                        icon: SiPagerduty
                    },
                    {
                        title: "Service Provider",
                        number: no_providers,
                        icon: MdOutlineHomeRepairService
                    },
                    {
                        title: "Total NO. Banks",
                        number: no_banks,
                        icon: BsBank
                    },
                    {
                        title: "Total Salary Paid(NET)",
                        number: `₦${parseFloat(total_salary_paid.toFixed(2)).toLocaleString()}`,
                        icon: GiMoneyStack
                    },
                    {
                        title: "Total Amount Deducted",
                        number: `₦${parseFloat(total_deductions.toFixed(2)).toLocaleString()}`,
                        icon: GiTakeMyMoney
                    },
                ];

                //  Charts.
                let dashboardGenderSeries = [];
                let dashboardGenderLabels = [];
                employee_gender.forEach((eachGender, index) => {
                    dashboardGenderSeries.push(eachGender.count);
                    dashboardGenderLabels.push(eachGender.gender);
                });
                const dashboardGender = { series: dashboardGenderSeries, labels: dashboardGenderLabels }


                let maleList = [];
                let femaleList = [];
                let dashboardAgeGroupCategories = [];
                age_group.forEach((eachAgeGroup) => {
                    maleList.push(eachAgeGroup.male);
                    femaleList.push(eachAgeGroup.female);
                    dashboardAgeGroupCategories.push(eachAgeGroup.ageRange);
                });
                let dashboardAgeGroupSeries = [
                    {
                        name: "Male",
                        data: [...maleList]
                    },
                    {
                        name: "Female",
                        data: [...femaleList]
                    },
                ];
                const dashboardAgeGroup = { series: dashboardAgeGroupSeries, categories: dashboardAgeGroupCategories };

                // console.log("SERIRES & LABEL::: ", dashboardAgeGroup);

                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  DASHBOARD SCREEN DATA.
                    dashboardCounterData: dashboardCounterData,
                    dashboardGenderPieData: dashboardGender,
                    dashboardAgeGroupBarData: dashboardAgeGroup,

                    isDashBoardSegmentOneLoading: false,
                }));
            }
        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isDashBoardSegmentOneLoading: false,
            }));
            console.log(error);
        }
    };
    const handleGetDashboardSegmentTwoData = async () => {
        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isDashBoardSegmentTwoLoading: true,
        }));

        const {dashboardSelectedMinistries, dashboardSelectedServiceProvider, dashboardSelectedPFA, dashboardSelectedState, dashboardSelectedStatus, dashboardSelectedBank, dashboardSelectedEnrollmentRange} = state;

        const requestBody = {
            ministry: (dashboardSelectedMinistries.value !== "MDA") ? dashboardSelectedMinistries.value : "",
            serviceProvider: (dashboardSelectedServiceProvider.value !== "Service Providers") ? dashboardSelectedServiceProvider.value : "",
            pfa: (dashboardSelectedPFA.value !== "PFA") ? dashboardSelectedPFA.value : "",
            state: (dashboardSelectedState.value !== "Resident States") ? dashboardSelectedState.value : "",
            status: (dashboardSelectedStatus.value !== "Employee Status") ? dashboardSelectedStatus.value : "",
            bank: (dashboardSelectedBank.value !== "Bank") ? dashboardSelectedBank.value : "",
            enrollmentFrom: (dashboardSelectedEnrollmentRange[0] !== undefined) ? dashboardSelectedEnrollmentRange[0].toLocaleDateString() : "",
            enrollmentTo: (dashboardSelectedEnrollmentRange[1] !== undefined) ? dashboardSelectedEnrollmentRange[1].toLocaleDateString() : ""
        };

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${get_dashboard_segment_two_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}
                &pfa=${requestBody.pfa}&state=${requestBody.state}&status=${requestBody.status}&bank=${requestBody.bank}
                &enrollmentFrom=${requestBody.enrollmentFrom}&enrollmentTo=${requestBody.enrollmentTo}`,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const { employee_year_payment, amount_received_pfa, employee_records_by_ministry } = responseData;
                // console.log("RESPONSE::: ", responseData);


                //  Charts.
                let annualPaymentSeries = [];
                let annualPaymentLabels = [];
                employee_year_payment.forEach((eachYearPayment) => {
                    annualPaymentSeries.push(eachYearPayment.amount.toFixed(2));
                    annualPaymentLabels.push(eachYearPayment.year);
                });
                const dashboardAnnualPayment = { series: annualPaymentSeries, labels: annualPaymentLabels };


                let pfaData = [];
                let pfaCategories = [];
                amount_received_pfa.forEach((eachPFAsAmount) => {
                    // pfaData.push(parseFloat(eachPFAsAmount.amount.toLocaleString()).toFixed(2));
                    pfaData.push(eachPFAsAmount.amount.toFixed(2));
                    pfaCategories.push(eachPFAsAmount.pfa_name);
                });
                const dashboardAmountReceivedByPFAs = { data: pfaData, categories: pfaCategories };

                let dashboardEmployeeByMinistryData = [];
                let dashboardEmployeeByMinistryCategories = [];
                employee_records_by_ministry.forEach((eachEmployeeByMinistry) => {
                    const titleCaseString = eachEmployeeByMinistry.mda.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    dashboardEmployeeByMinistryData.push(parseFloat(eachEmployeeByMinistry.count.toFixed(2)));
                    dashboardEmployeeByMinistryCategories.push(titleCaseString);
                });
                const dashboardTopEmployeeByMinistry = { data: dashboardEmployeeByMinistryData, categories: dashboardEmployeeByMinistryCategories };
                // console.log("DATA::: ", dashboardTopEmployeeByMinistry);


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  DASHBOARD SCREEN DATA.
                    dashboardAnnualPaymentAreaData: dashboardAnnualPayment,
                    dashboardAmountReceivedByPFAsLineData: dashboardAmountReceivedByPFAs,
                    dashboardTopEmployeeByMinistryData: dashboardTopEmployeeByMinistry,

                    isDashBoardSegmentTwoLoading: false,
                }));
            }
        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isDashBoardSegmentTwoLoading: false,
            }));
            console.log(error);
        }
    };
    const handleGetDashboardSegmentThreeData = async () => {
        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isDashBoardSegmentThreeLoading: true,
        }));

        const {dashboardSelectedMinistries, dashboardSelectedServiceProvider, dashboardSelectedPFA, dashboardSelectedState, dashboardSelectedStatus, dashboardSelectedBank, dashboardSelectedEnrollmentRange} = state;

        const requestBody = {
            ministry: (dashboardSelectedMinistries.value !== "MDA") ? dashboardSelectedMinistries.value : "",
            serviceProvider: (dashboardSelectedServiceProvider.value !== "Service Providers") ? dashboardSelectedServiceProvider.value : "",
            pfa: (dashboardSelectedPFA.value !== "PFA") ? dashboardSelectedPFA.value : "",
            state: (dashboardSelectedState.value !== "Resident States") ? dashboardSelectedState.value : "",
            status: (dashboardSelectedStatus.value !== "Employee Status") ? dashboardSelectedStatus.value : "",
            bank: (dashboardSelectedBank.value !== "Bank") ? dashboardSelectedBank.value : "",
            enrollmentFrom: (dashboardSelectedEnrollmentRange[0] !== undefined) ? dashboardSelectedEnrollmentRange[0].toLocaleDateString() : "",
            enrollmentTo: (dashboardSelectedEnrollmentRange[1] !== undefined) ? dashboardSelectedEnrollmentRange[1].toLocaleDateString() : ""
        };

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${get_dashboard_segment_three_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}
                &pfa=${requestBody.pfa}&state=${requestBody.state}&status=${requestBody.status}&bank=${requestBody.bank}
                &enrollmentFrom=${requestBody.enrollmentFrom}&enrollmentTo=${requestBody.enrollmentTo}`,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const { map_data, employee_distribution, employee_payroll_month } = responseData;


                //  Charts.
                /*const dashboardMDASalaryDeductionsData = mda_salary_deductions.map((eachMDADeduction, index) => {
                    const titleCaseString = eachMDADeduction.mda.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    return {
                        name: titleCaseString,
                        earning: parseFloat(eachMDADeduction.total_earnings.toFixed(2)),
                        deduction: parseFloat(eachMDADeduction.total_deductions.toFixed(2)),
                    };
                });*/

                const dashboardMapData = map_data.map((eachMapData) => {
                    return [...eachMapData];
                });

                let dashboardMonthlyEmployeeSeries = [];
                let dashboardMonthlyEmployeeCategories = [];
                employee_payroll_month.forEach((eachMonthlyPayment) => {
                    dashboardMonthlyEmployeeSeries.push(parseFloat(eachMonthlyPayment.amount.toFixed(2)));
                    dashboardMonthlyEmployeeCategories.push(eachMonthlyPayment.month);
                });
                const dashboardMonthlyEmployeePayment = { data: dashboardMonthlyEmployeeSeries, categories: dashboardMonthlyEmployeeCategories };

                const dashboardEmployeeDistribution = {
                    series: [employee_distribution.civilian, employee_distribution.military, employee_distribution.paramilitary],
                    labels: ["Civilian", "Military", "Paramilitary"]
                }
                // console.log("RESPONSE::: ", dashboardMonthlyEmployeePayment);



                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  DASHBOARD SCREEN DATA.
                    // dashboardMDASalaryDeductionsData: dashboardMDASalaryDeductionsData,
                    dashboardMapData: dashboardMapData,
                    dashboardEmployeeDistributionRingData: dashboardEmployeeDistribution,
                    dashboardMonthlyEmployeePaymentBarData: dashboardMonthlyEmployeePayment,

                    isDashBoardSegmentThreeLoading: false,
                }));
            }
        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isDashBoardSegmentThreeLoading: false,
            }));
            console.log(error);
        }
    };

    //  Input Change Handler.
    const dashboardMinistryFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            dashboardSelectedMinistries: event,
        }));
    };
    const dashboardServiceProviderFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            dashboardSelectedServiceProvider: event,
        }));
    };
    const dashboardPFAFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            dashboardSelectedPFA: event,
        }));
    };
    const dashboardStateFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            dashboardSelectedState: event,
        }));
    };
    const dashboardStatusFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            dashboardSelectedStatus: event,
        }));
    };
    const dashboardBankFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            dashboardSelectedBank: event,
        }));
    };
    const dashboardPayrollFilterChange = (event) => {
        console.log("PAYROLL:::", event);
        setState((prevState) => ({
            ...prevState,
            dashboardSelectedPayrollRange: event,
        }));
    };
    const dashboardEnrollmentFilterChange = (event) => {
        console.log("ENROLLMENT:::", event);
        setState((prevState) => ({
            ...prevState,
            dashboardSelectedEnrollmentRange: event,
        }));
    };


    /**
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     *  EMPLOYEE FUNCTIONS...
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     **/
        //  Get Employee Main Table.
    const handleGetEmployeeMainTableData = async () => {

            //  Update State.
            setState((prevState) => ({
                ...prevState,
                isEmployeeTableLoading: true,
            }));

            const { employeeSelectedMinistries, employeeSelectedServiceProvider, employeeSelectedPFA, employeeSelectedState, employeeSelectedStatus, employeeSelectedEnrollmentRange } = state;

            const requestBody = {
                ministry: (employeeSelectedMinistries.value !== "MDA") ? employeeSelectedMinistries.value : "",
                serviceProvider: (employeeSelectedServiceProvider.value !== "Service Providers") ? employeeSelectedServiceProvider.value : "",
                pfa: (employeeSelectedPFA.value !== "PFA") ? employeeSelectedPFA.value : "",
                state: (employeeSelectedState.value !== "States") ? employeeSelectedState.value : "",
                status: (employeeSelectedStatus.value !== "Status") ? employeeSelectedStatus.value : "",
                enrollmentFrom: (employeeSelectedEnrollmentRange[0] !== undefined) ? employeeSelectedEnrollmentRange[0].toLocaleDateString() : "",
                enrollmentTo: (employeeSelectedEnrollmentRange[1] !== undefined) ? employeeSelectedEnrollmentRange[1].toLocaleDateString() : ""
            };

            try {

                //  Get users data from the local storage.
                const userData = secureLocalStorage.getItem("userData");
                let token;
                if (userData !== null) {
                    token = userData.token;
                }

                //  Make Axios call.
                const response = await axios({
                    method: "get",
                    url: `${get_all_employee_main_table_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}&pfa=${requestBody.pfa}&state=${requestBody.state}&status=${requestBody.status}`,
                    // url: get_all_employee_main_table_url,
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `${token}`
                    }
                });

                if (response.data.success) {
                    const responseData = response.data.data;
                    const {data, data_count: employeeTotalData,} = responseData;
                    const {
                        data: employeeData,
                        from: employeeFromPage,
                        to: employeeToPage,
                        first_page_url: employeeFirstPageURL,
                        last_page_url: employeeLastPageURL,
                        prev_page_url: employeePrevPageURL,
                        next_page_url: employeeNextPageURL,
                    } = data;

                    // console.log("HHHHH::: ", employeeData);

                    // Employee Data. (Reformatting Data)
                    const employeeRecord = employeeData.map((eachEmployee, index) => {
                        const ministryTitleCaseString = eachEmployee.ministry.toLowerCase().split(" ")
                            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                            .join(" ");
                        const serviceProviderTitleCaseString = eachEmployee.provider_name.toLowerCase().split(" ")
                            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                            .join(" ");

                        return {
                            serialNumber: employeeFromPage + index,
                            ippis: eachEmployee.ippis_number,
                            firstName: eachEmployee.first_name,
                            middleName: eachEmployee.middle_name,
                            lastName: eachEmployee.last_name,
                            mda: ministryTitleCaseString,
                            serviceProvider: serviceProviderTitleCaseString,
                            pfa: eachEmployee.pfa_name,
                            gradeLevel: parseInt(eachEmployee.grade),
                            enrollmentDate: eachEmployee.original_date_of_hire,
                            dob: eachEmployee.date_of_birth,
                            employmentStatus: eachEmployee.employment_status,
                            status: eachEmployee.employment_status
                        };
                    });

                    //  Update the state.
                    return setState((prevState) => ({
                        ...prevState,
                        //  EMPLOYEE SCREEN DATA.
                        employeeTableData: employeeRecord,

                        employeeFromPage: employeeFromPage,
                        employeeToPage: employeeToPage,
                        employeeFirstPageURL: employeeFirstPageURL,
                        employeeLastPageURL: employeeLastPageURL,
                        employeePrevPageURL: employeePrevPageURL,
                        employeeNextPageURL: employeeNextPageURL,
                        employeeTotalData: employeeTotalData,
                        isEmployeeTableLoading: false,
                    }));
                }

            } catch (error) {
                let errorMessage;
                if (error.errors) {
                    errorMessage = error.errors[0];
                    errorToast(errorMessage);
                } else {
                    errorMessage = error.response.data.message;
                    errorToast(errorMessage);
                }
                setState((prevState) => ({
                    ...prevState,
                    isEmployeeTableLoading: false,
                }));
                console.log(error);
            }
        };


    //  Get the First, Prev, Next and Last Page
    const getEmployeeNextAndPrevPage = async (requestType) => {

        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isEmployeeTableLoading: true,
        }));

        const {employeeFirstPageURL, employeePrevPageURL, employeeNextPageURL, employeeLastPageURL} = state;
        const requestURL = (requestType === "firstPage")
            ? (employeeFirstPageURL)
            : (requestType === "prevPage")
                ? (employeePrevPageURL === null) ? (employeeFirstPageURL) : (employeePrevPageURL)
                : (requestType === "nextPage")
                    ? (employeeNextPageURL)
                    : (employeeLastPageURL);


        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }
            console.log("TOKEN::: ", token);
            console.log("USER DATA::: ", userData);

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: requestURL,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {data, data_count: employeeTotalData,} = responseData;
                const {
                    data: employeeData,
                    from: employeeFromPage,
                    to: employeeToPage,
                    first_page_url: employeeFirstPageURL,
                    last_page_url: employeeLastPageURL,
                    prev_page_url: employeePrevPageURL,
                    next_page_url: employeeNextPageURL,
                } = data;

                // console.log("HHHHH::: ", employeeData);

                // Employee Data. (Reformatting Data)
                const employeeRecord = employeeData.map((eachEmployee, index) => {
                    const ministryTitleCaseString = eachEmployee.ministry.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    const serviceProviderTitleCaseString = eachEmployee.provider_name.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");

                    return {
                        serialNumber: employeeFromPage + index,
                        ippis: eachEmployee.ippis_number,
                        firstName: eachEmployee.first_name,
                        middleName: eachEmployee.middle_name,
                        lastName: eachEmployee.last_name,
                        mda: ministryTitleCaseString,
                        serviceProvider: serviceProviderTitleCaseString,
                        pfa: eachEmployee.pfa_name,
                        gradeLevel: parseInt(eachEmployee.grade),
                        enrollmentDate: eachEmployee.original_date_of_hire,
                        dob: eachEmployee.date_of_birth,
                        employmentStatus: eachEmployee.employment_status
                    };
                });

                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  EMPLOYEE SCREEN DATA.
                    employeeTableData: employeeRecord,

                    employeeFromPage: employeeFromPage,
                    employeeToPage: employeeToPage,
                    employeeFirstPageURL: employeeFirstPageURL,
                    employeeLastPageURL: employeeLastPageURL,
                    employeePrevPageURL: employeePrevPageURL,
                    employeeNextPageURL: employeeNextPageURL,
                    employeeTotalData: employeeTotalData,
                    isEmployeeTableLoading: false,
                }));
            }

        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isEmployeeTableLoading: false,
            }));
            console.log(error);
        }
    };

    //  Get Employee Charts.
    const handleGetEmployeeSegmentOneData = async () => {

        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isEmployeeSegmentOneLoading: true,
        }));

        const {employeeSelectedMinistries, employeeSelectedServiceProvider, employeeSelectedPFA, employeeSelectedState, employeeSelectedStatus, employeeSelectedEnrollmentRange} = state;

        const requestBody = {
            ministry: (employeeSelectedMinistries.value !== "MDA") ? employeeSelectedMinistries.value : "",
            serviceProvider: (employeeSelectedServiceProvider.value !== "Service Providers") ? employeeSelectedServiceProvider.value : "",
            pfa: (employeeSelectedPFA.value !== "PFA") ? employeeSelectedPFA.value : "",
            state: (employeeSelectedState.value !== "States") ? employeeSelectedState.value : "",
            status: (employeeSelectedStatus.value !== "Status") ? employeeSelectedStatus.value : "",
            enrollmentFrom: (employeeSelectedEnrollmentRange[0] !== undefined) ? employeeSelectedEnrollmentRange[0].toLocaleDateString() : "",
            enrollmentTo: (employeeSelectedEnrollmentRange[1] !== undefined) ? employeeSelectedEnrollmentRange[1].toLocaleDateString() : ""
        };

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${get_all_employee_segment_one_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}&pfa=${requestBody.pfa}&state=${requestBody.state}&status=${requestBody.status}`,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {total_employee_count, total_mda, average_age, average_tenure, employee_gender, employee_distribution, employment_status_distribution } = responseData;

                const employeeCounterData = [
                    {
                        title: "Total No. of Employee",
                        number: total_employee_count,
                        icon: HiOutlineUserGroup
                    },
                    {
                        title: "Avg. Employee Age",
                        number: parseFloat(average_age[0].average).toFixed(2),
                        icon: HiOutlineUserGroup
                    },
                    {
                        title: "Avg. Employee Tenure",
                        number: parseFloat(average_tenure[0].average).toFixed(2),
                        icon: SiPagerduty
                    },
                    {
                        title: "Total No. Of MDA",
                        number: total_mda,
                        icon: MdOutlineHomeRepairService
                    }
                ];


                //  Charts.
                let employeeGenderSeries = [];
                let employeeGenderLabels = [];
                employee_gender.forEach((eachGender, index) => {
                    employeeGenderSeries.push(eachGender.count);
                    employeeGenderLabels.push(eachGender.gender);
                });
                const employeeGender = { series: employeeGenderSeries, labels: employeeGenderLabels }


                const employeeDistribution = {
                    series: [employee_distribution.civilian, employee_distribution.military, employee_distribution.paramilitary],
                    labels: ["Civilian", "Military", "Paramilitary"]
                }


                let employeeStatusDistributionSeries = [];
                let employeeStatusDistributionLabels = [];
                employee_gender.forEach((eachGender, index) => {
                    employeeStatusDistributionSeries.push(eachGender.count);
                    employeeStatusDistributionLabels.push(eachGender.gender);
                });
                const employeeStatusDistribution = { series: employeeStatusDistributionSeries, labels: employeeStatusDistributionLabels }
                // console.log("GGGG::: ", employeeGender, employeeDistribution, employeeStatusDistribution);


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,

                    employeeCounterData: employeeCounterData,
                    employeeGenderPieData: employeeGender,
                    employeeDistributionPieRingData: employeeDistribution,

                    isEmployeeSegmentOneLoading: false,
                }));
            }

        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isEmployeeSegmentOneLoading: false,
            }));
            console.log(error);
        }
    };


    const handleGetEmployeeSegmentTwoData = async () => {

        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isEmployeeSegmentTwoLoading: true,
        }));

        const {employeeSelectedMinistries, employeeSelectedServiceProvider, employeeSelectedPFA, employeeSelectedState, employeeSelectedStatus, employeeSelectedEnrollmentRange} = state;

        const requestBody = {
            ministry: (employeeSelectedMinistries.value !== "MDA") ? employeeSelectedMinistries.value : "",
            serviceProvider: (employeeSelectedServiceProvider.value !== "Service Providers") ? employeeSelectedServiceProvider.value : "",
            pfa: (employeeSelectedPFA.value !== "PFA") ? employeeSelectedPFA.value : "",
            state: (employeeSelectedState.value !== "States") ? employeeSelectedState.value : "",
            status: (employeeSelectedStatus.value !== "Status") ? employeeSelectedStatus.value : "",
            enrollmentFrom: (employeeSelectedEnrollmentRange[0] !== undefined) ? employeeSelectedEnrollmentRange[0].toLocaleDateString() : "",
            enrollmentTo: (employeeSelectedEnrollmentRange[1] !== undefined) ? employeeSelectedEnrollmentRange[1].toLocaleDateString() : ""
        };

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${get_all_employee_segment_two_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}&pfa=${requestBody.pfa}&state=${requestBody.state}&status=${requestBody.status}`,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {employee_records_by_ministry, employee_records_by_state, age_group, salary_group, map_data} = responseData;

                // console.log("HHHHH::: ", responseData);




                let salaryGroupSeries = [];
                let salaryGroupLabels = [];
                salary_group.forEach((eachSalaryGroup, index) => {
                    salaryGroupSeries.push(eachSalaryGroup.count);
                    salaryGroupLabels.push((index === 3) ? `above ₦700,000` : (index === 4)  ? `below ₦40,000` : `₦${eachSalaryGroup.salaryRange.split("-")[0]} - ₦${eachSalaryGroup.salaryRange.split("-")[1]}`);
                });
                const employeeSalaryRange = { series: salaryGroupSeries, labels: salaryGroupLabels }

                let countSum = 0;
                const employeeSalaryRangeTable = salary_group.map((eachSalaryGroup, index) => {
                    return {
                        name: (index === 3) ? `above ₦700,000` : (index === 4)  ? `below ₦40,000` : `₦${eachSalaryGroup.salaryRange.split("-")[0]} - ₦${eachSalaryGroup.salaryRange.split("-")[1]}`,
                        value: eachSalaryGroup.count,
                        percentage: ((eachSalaryGroup.count / countSum) * 100).toFixed(2),
                    };
                });



                let dashboardEmployeeByMinistryData = [];
                let dashboardEmployeeByMinistryCategories = [];
                employee_records_by_ministry.forEach((eachEmployeeByMinistry) => {
                    const titleCaseString = eachEmployeeByMinistry.ministry.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    dashboardEmployeeByMinistryData.push(parseFloat(eachEmployeeByMinistry.count.toFixed(2)));
                    dashboardEmployeeByMinistryCategories.push(titleCaseString);
                });
                const employeeRecordsByMinistry = { data: dashboardEmployeeByMinistryData, categories: dashboardEmployeeByMinistryCategories };

                let ministrySum = 0;
                employee_records_by_ministry.forEach(value => {
                    ministrySum += value.count;
                });
                const employeeRecordsByMinistryTable = employee_records_by_ministry.map((eachEmployeeRecordsByMinistry) => {
                    const ministryTitleCaseString = eachEmployeeRecordsByMinistry.ministry.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    return {
                        count: eachEmployeeRecordsByMinistry.count,
                        name: ministryTitleCaseString,
                        percentage: ((eachEmployeeRecordsByMinistry.count / ministrySum) * 100).toFixed(2),
                    };
                });



                let stateSum = 0;
                employee_records_by_state.forEach(value => {
                    stateSum += value.count;
                });
                const employeeRecordsByStateTable = employee_records_by_state.map((eachEmployeeRecordsByState) => {
                    return {
                        state: (eachEmployeeRecordsByState.state !== "") ? eachEmployeeRecordsByState.state : "UNSPECIFIED",
                        count: eachEmployeeRecordsByState.count,
                        percentage: ((eachEmployeeRecordsByState.count / stateSum) * 100).toFixed(2),
                    };
                });

                const employeeRecordsByState = map_data.map((eachMapData) => {
                    return [...eachMapData];
                });



                const employeeRecordsByAgeGroupTable = age_group.map((eachEmployeeRecordsByAgeGroup) => {
                    return {
                        ageRange: eachEmployeeRecordsByAgeGroup.ageRange,
                        male: eachEmployeeRecordsByAgeGroup.male,
                        female: eachEmployeeRecordsByAgeGroup.female,
                    };
                });

                let maleList = [];
                let femaleList = [];
                let employeeAgeGroupCategories = [];
                age_group.forEach((eachAgeGroup) => {
                    maleList.push(eachAgeGroup.male);
                    femaleList.push(eachAgeGroup.female);
                    employeeAgeGroupCategories.push(eachAgeGroup.ageRange);
                });
                let employeeAgeGroupSeries = [
                    {
                        name: "Male",
                        data: [...maleList]
                    },
                    {
                        name: "Female",
                        data: [...femaleList]
                    },
                ];
                const employeeRecordsByAgeGroupChart = { series: employeeAgeGroupSeries, categories: employeeAgeGroupCategories };

                // console.log("HHHHH::: ", employeeRecordsByMinistryTable);


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,

                    employeeSalaryRangePieData: employeeSalaryRange,
                    employeeSalaryRangeTableData: employeeSalaryRangeTable,
                    employeeRecordsByMinistryTableData: employeeRecordsByMinistryTable,
                    employeeRecordsByMinistryBarChartData: employeeRecordsByMinistry,
                    employeeRecordsByStateMapData: employeeRecordsByState,
                    employeeRecordsByStateTableData: employeeRecordsByStateTable,
                    employeeRecordsByAgeGroupTableData2: employeeRecordsByAgeGroupTable,
                    employeeRecordsByAgeGroupStackBarData2: employeeRecordsByAgeGroupChart,

                    isEmployeeSegmentTwoLoading: false,
                }));
            }

        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isEmployeeSegmentTwoLoading: false,
            }));
            console.log(error);
        }
    };

    //  Input Change Handler.
    const employeeMinistryFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            employeeSelectedMinistries: event,
        }));
    };
    const employeeServiceProviderFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            employeeSelectedServiceProvider: event,
        }));
    };
    const employeePFAFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            employeeSelectedPFA: event,
        }));
    };
    const employeeStateFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            employeeSelectedState: event,
        }));
    };
    const employeeStatusFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            employeeSelectedStatus: event,
        }));
    };
    const employeeEnrollmentFilterChange = (event) => {
        console.log("ENROLLMENT:::", event);
        setState((prevState) => ({
            ...prevState,
            employeeSelectedEnrollmentRange: event,
        }));
    };


    /**
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     *  FINANCIAL FUCTIONS...
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     * /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     **/
        //  Handle Get Employee Data.
    const handleGetFinancialMainTableData = async () => {

            //  Update State.
            setState((prevState) => ({
                ...prevState,
                isFinancialTableLoading: true,
            }));

            const {financialSelectedMinistries, financialSelectedServiceProvider, financialSelectedPFA, financialSelectedBank, financialSelectedPayrollRange} = state;

            const requestBody = {
                ministry: (financialSelectedMinistries.value !== "MDA") ? financialSelectedMinistries.value : "",
                serviceProvider: (financialSelectedServiceProvider.value !== "Service Providers") ? financialSelectedServiceProvider.value : "",
                pfa: (financialSelectedPFA.value !== "PFA") ? financialSelectedPFA.value : "",
                bank: (financialSelectedBank.value !== "Bank") ? financialSelectedBank.value : "",
                financialFrom: (financialSelectedPayrollRange[0] !== undefined) ? financialSelectedPayrollRange[0].toLocaleDateString() : "",
                financialTo: (financialSelectedPayrollRange[1] !== undefined) ? financialSelectedPayrollRange[1].toLocaleDateString() : ""
            };

            try {

                //  Get users data from the local storage.
                const userData = secureLocalStorage.getItem("userData");
                let token;
                if (userData !== null) {
                    token = userData.token;
                }


                //  Make Axios call.
                const response = await axios({
                    method: "get",
                    url: `${get_all_financial_main_table_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}&pfa=${requestBody.pfa}
                    &bank=${requestBody.bank}&financialFrom=${requestBody.financialFrom}&financialTo=${requestBody.financialTo}`,
                    // url: get_all_financial_main_table_url,
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `${token}`
                    }
                });

                if (response.data.success) {
                    const responseData = response.data.data;
                    const {financial_records, data_count: financialTotalData,} = responseData;
                    const {
                        data: financialData,
                        from: financialFromPage,
                        to: financialToPage,
                        first_page_url: financialFirstPageURL,
                        last_page_url: financialLastPageURL,
                        prev_page_url: financialPrevPageURL,
                        next_page_url: financialNextPageURL,
                    } = financial_records;

                    // console.log("WORKING....1", financialNextPageURL);


                    // Employee Data. (Reformatting Data)
                    const financialRecord = financialData.map((eachFinancial, index) => {
                        const ministryTitleCaseString = eachFinancial.ministry.toLowerCase().split(" ")
                            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                            .join(" ");
                        const serviceProviderTitleCaseString = eachFinancial.provider_name.toLowerCase().split(" ")
                            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                            .join(" ");
                        const bankTitleCaseString = eachFinancial.bank_name.toLowerCase().split(" ")
                            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                            .join(" ");

                        return {
                            serialNumber: financialFromPage + index,
                            ippis: eachFinancial.ippis_number,
                            firstName: eachFinancial.first_name,
                            middleName: eachFinancial.middle_name,
                            lastName: eachFinancial.last_name,
                            mda: ministryTitleCaseString,
                            bank: bankTitleCaseString,
                            serviceProvider: serviceProviderTitleCaseString,
                            pfa: eachFinancial.pfa_name,
                            netSalary: eachFinancial.total_earnings,
                            deduction: eachFinancial.total_deductions
                        };
                    });

                    // console.log(financialTotalData);


                    //  Update the state.
                    return setState((prevState) => ({
                        ...prevState,

                        financialTableData: financialRecord,

                        financialFromPage: financialFromPage,
                        financialToPage: financialToPage,
                        financialFirstPageURL: financialFirstPageURL,
                        financialLastPageURL: financialLastPageURL,
                        financialPrevPageURL: financialPrevPageURL,
                        financialNextPageURL: financialNextPageURL,
                        financialTotalData: financialTotalData,

                        isFinancialTableLoading: false,
                    }));
                }
            } catch (error) {
                let errorMessage;
                if (error.errors) {
                    errorMessage = error.errors[0];
                    errorToast(errorMessage);
                } else {
                    errorMessage = error.response.data.message;
                    errorToast(errorMessage);
                }
                setState((prevState) => ({
                    ...prevState,
                    isFinancialTableLoading: false,
                }));
                console.log(error);
            }
        };


    //  Get the First, Prev, Next and Last Page
    const getFinancialNextAndPrevPage = async (requestType) => {

        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isLoading: true,
        }));

        const {financialFirstPageURL, financialPrevPageURL, financialNextPageURL, financialLastPageURL} = state;
        const requestURL = (requestType === "firstPage")
            ? (financialFirstPageURL)
            : (requestType === "prevPage")
                ? (financialPrevPageURL === null) ? (financialFirstPageURL) : (financialPrevPageURL)
                : (requestType === "nextPage")
                    ? (financialNextPageURL)
                    : (financialLastPageURL);


        try {

            //  Get users data from the local storage.
            const userData = sessionStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = JSON.parse(userData).token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: requestURL,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {financial_records, data_count: financialTotalData,} = responseData;
                const {
                    data: financialData,
                    from: financialFromPage,
                    to: financialToPage,
                    first_page_url: financialFirstPageURL,
                    last_page_url: financialLastPageURL,
                    prev_page_url: financialPrevPageURL,
                    next_page_url: financialNextPageURL,
                } = financial_records;


                // Employee Data. (Reformatting Data)
                const financialRecord = financialData.map((eachFinancial, index) => {
                    const ministryTitleCaseString = eachFinancial.ministry.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    const serviceProviderTitleCaseString = eachFinancial.provider_name.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    const bankTitleCaseString = eachFinancial.bank_name.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");

                    return {
                        serialNumber: financialFromPage + index,
                        ippis: eachFinancial.ippis_number,
                        firstName: eachFinancial.first_name,
                        middleName: eachFinancial.middle_name,
                        lastName: eachFinancial.last_name,
                        mda: ministryTitleCaseString,
                        bank: bankTitleCaseString,
                        serviceProvider: serviceProviderTitleCaseString,
                        pfa: eachFinancial.pfa_name,
                        netSalary: eachFinancial.total_earnings,
                        deduction: eachFinancial.total_deductions
                    };
                });

                // console.log(financialRecord);


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,

                    financialTableData: financialRecord,

                    financialFromPage: financialFromPage,
                    financialToPage: financialToPage,
                    financialFirstPageURL: financialFirstPageURL,
                    financialLastPageURL: financialLastPageURL,
                    financialPrevPageURL: financialPrevPageURL,
                    financialNextPageURL: financialNextPageURL,
                    financialTotalData: financialTotalData,
                    isLoading: false,
                }));
            }
        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isLoading: false,
            }));
            console.log(error);
        }
    };

    const handleGetFinancialSegmentOneData = async () => {

        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isFinancialSegmentOneLoading: true,
        }));

        const {financialSelectedMinistries, financialSelectedServiceProvider, financialSelectedPFA, financialSelectedBank, financialSelectedPayrollRange} = state;

        const requestBody = {
            ministry: (financialSelectedMinistries.value !== "MDA") ? financialSelectedMinistries.value : "",
            serviceProvider: (financialSelectedServiceProvider.value !== "Service Providers") ? financialSelectedServiceProvider.value : "",
            pfa: (financialSelectedPFA.value !== "PFA") ? financialSelectedPFA.value : "",
            bank: (financialSelectedBank.value !== "Bank") ? financialSelectedBank.value : "",
            financialFrom: (financialSelectedPayrollRange[0] !== undefined) ? financialSelectedPayrollRange[0].toLocaleDateString() : "",
            financialTo: (financialSelectedPayrollRange[1] !== undefined) ? financialSelectedPayrollRange[1].toLocaleDateString() : ""
        };

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${get_financial_segment_one_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}&pfa=${requestBody.pfa}
                    &bank=${requestBody.bank}&financialFrom=${requestBody.financialFrom}&financialTo=${requestBody.financialTo}`,
                // url: get_all_financial_chart_url,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {total_salary_paid, total_deductions, avg_salary_month, no_banks, total_mda, total_pfa} = responseData;

                // console.log("RESPONSE DATA:::", responseData);

                const financialCounterData = [
                    {
                        title: "Total Salary Paid",
                        number: parseFloat(total_salary_paid.toFixed(2)).toLocaleString(),
                        icon: HiOutlineUserGroup
                    },
                    {
                        title: "Total Amount Deducted",
                        number: parseFloat(total_deductions.toFixed(2)).toLocaleString(),
                        icon: HiOutlineUserGroup
                    },
                    {
                        title: "Avg. Salary(Monthly)",
                        // number: avg_salary_month,
                        number: parseFloat(avg_salary_month.toFixed(2)).toLocaleString(),
                        icon: SiPagerduty
                    },
                    {
                        title: "Total No. Of Bank",
                        number: no_banks,
                        icon: MdOutlineHomeRepairService
                    },
                    {
                        title: "Total No. Of MDA",
                        number: total_mda,
                        icon: MdOutlineHomeRepairService
                    },
                    {
                        title: "Total No. Of PFA",
                        number: total_pfa,
                        icon: MdOutlineHomeRepairService
                    }
                ];

                // console.log("RESPONSE:::", amountByBankSum);


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  EMPLOYEE SCREEN DATA.
                    financialCounterData: financialCounterData,

                    isFinancialSegmentOneLoading: false,
                }));

            }

        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isFinancialSegmentOneLoading: false,
            }));
            console.log(error);
        }

    };
    const handleGetFinancialSegmentTwoData = async () => {

        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isFinancialSegmentTwoLoading: true,
        }));

        const {financialSelectedMinistries, financialSelectedServiceProvider, financialSelectedPFA, financialSelectedBank, financialSelectedPayrollRange} = state;

        const requestBody = {
            ministry: (financialSelectedMinistries.value !== "MDA") ? financialSelectedMinistries.value : "",
            serviceProvider: (financialSelectedServiceProvider.value !== "Service Providers") ? financialSelectedServiceProvider.value : "",
            pfa: (financialSelectedPFA.value !== "PFA") ? financialSelectedPFA.value : "",
            bank: (financialSelectedBank.value !== "Bank") ? financialSelectedBank.value : "",
            financialFrom: (financialSelectedPayrollRange[0] !== undefined) ? financialSelectedPayrollRange[0].toLocaleDateString() : "",
            financialTo: (financialSelectedPayrollRange[1] !== undefined) ? financialSelectedPayrollRange[1].toLocaleDateString() : ""
        };

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${get_financial_segment_two_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}&pfa=${requestBody.pfa}
                    &bank=${requestBody.bank}&financialFrom=${requestBody.financialFrom}&financialTo=${requestBody.financialTo}`,
                // url: get_all_financial_chart_url,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {mda_salary_deductions, total_salary_paid, total_deductions} = responseData;

                // console.log("RESPONSE DATA:::", responseData);


                const mdaSalaryDeductionData = mda_salary_deductions.map((eachSalaryDeduction) => {
                    const ministryTitleCaseString = eachSalaryDeduction.ministry.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    return {
                        mda: ministryTitleCaseString,
                        earning: parseFloat(eachSalaryDeduction.salaries.toFixed(2)).toLocaleString(),
                        deduction: parseFloat(eachSalaryDeduction.deductions.toFixed(2)).toLocaleString(),
                    };
                });

                let employeeGenderSeries = [total_salary_paid, total_deductions];
                let employeeGenderLabels = ["Total Salary Paid", "Total Deduction"];
                const financialEarningDeductionData = { series: employeeGenderSeries, labels: employeeGenderLabels }


                let financialMDASalaryDeductionCategories = [];
                let earningList = [];
                let deductionList = [];
                mda_salary_deductions.forEach((eachSalaryDeduction) => {
                    const ministryTitleCaseString = eachSalaryDeduction.ministry.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    financialMDASalaryDeductionCategories.push(ministryTitleCaseString);
                    earningList.push(parseFloat(eachSalaryDeduction.salaries.toFixed(2)));
                    deductionList.push(parseFloat(eachSalaryDeduction.deductions.toFixed(2)));
                });
                let financialMDASalaryDeductionSeries = [
                    {
                        name: "Earnings",
                        data: earningList
                    },
                    {
                        name: "Deductions",
                        data: deductionList
                    },
                ];
                const financialMDASalaryDeductionChart = { series: financialMDASalaryDeductionSeries, categories: financialMDASalaryDeductionCategories };

                // console.log("GGGG::: ", financialEarningDeductionData, financialMDASalaryDeductionChart);


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  EMPLOYEE SCREEN DATA.
                    financialEarningDeductionPieData: financialEarningDeductionData,
                    financialMDASalaryDeductionTableData: mdaSalaryDeductionData,
                    financialMDASalaryDeductionData: financialMDASalaryDeductionChart,

                    isFinancialSegmentTwoLoading: false,
                }));

            }

        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isFinancialSegmentTwoLoading: false,
            }));
            console.log(error);
        }

    };
    const handleGetFinancialSegmentThreeData = async () => {

        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isFinancialSegmentThreeLoading: true,
        }));

        const {financialSelectedMinistries, financialSelectedServiceProvider, financialSelectedPFA, financialSelectedBank, financialSelectedPayrollRange} = state;

        const requestBody = {
            ministry: (financialSelectedMinistries.value !== "MDA") ? financialSelectedMinistries.value : "",
            serviceProvider: (financialSelectedServiceProvider.value !== "Service Providers") ? financialSelectedServiceProvider.value : "",
            pfa: (financialSelectedPFA.value !== "PFA") ? financialSelectedPFA.value : "",
            bank: (financialSelectedBank.value !== "Bank") ? financialSelectedBank.value : "",
            financialFrom: (financialSelectedPayrollRange[0] !== undefined) ? financialSelectedPayrollRange[0].toLocaleDateString() : "",
            financialTo: (financialSelectedPayrollRange[1] !== undefined) ? financialSelectedPayrollRange[1].toLocaleDateString() : ""
        };

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${get_financial_segment_three_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}&pfa=${requestBody.pfa}
                    &bank=${requestBody.bank}&financialFrom=${requestBody.financialFrom}&financialTo=${requestBody.financialTo}`,
                // url: get_all_financial_chart_url,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {deductions, employee_distribution} = responseData;


                let deductionSum = 0.0;
                deductions.forEach(item => deductionSum += item.value);
                const financialDeductionTable = deductions.map((eachDeduction, index) => {
                    const colors = ["#AB53DB", "#FFBC54", "#FF5B5A", "#00A28A", "#58CEFF"];
                    return {
                        name: eachDeduction.name,
                        value: parseFloat(eachDeduction.value.toFixed(2)),
                        percentage: parseFloat(((eachDeduction.value / deductionSum) * 100).toFixed(1)),
                        fill: colors[index]
                    };
                });

                let financialDeductionSeries = [];
                let financialDeductionLabels = [];
                deductions.forEach((eachDeduction) => {
                    financialDeductionSeries.push(parseFloat(eachDeduction.value.toFixed(2)));
                    financialDeductionLabels.push(eachDeduction.name);
                });
                const financialDeductionChart = {
                    series: financialDeductionSeries,
                    labels: financialDeductionLabels
                }


                let distributionSum = employee_distribution.civilian + employee_distribution.military + employee_distribution.paramilitary
                const financialDistributionTable = [
                    {
                        name: "Civilian",
                        value: employee_distribution.civilian,
                        percentage: parseFloat(((employee_distribution.civilian / distributionSum) * 100).toFixed(1)),
                        fill: "#52ACFF"
                    },
                    {
                        name: "Military",
                        value: employee_distribution.military,
                        percentage: parseFloat(((employee_distribution.military / distributionSum) * 100).toFixed(1)),
                        fill: "#3DFFDC"
                    },
                    {
                        name: "Paramilitary",
                        value: employee_distribution.paramilitary,
                        percentage: parseFloat(((employee_distribution.paramilitary / distributionSum) * 100).toFixed(1)),
                        fill: "#EF7BE3"
                    },
                ]

                const financialDistributionChart = {
                    series: [employee_distribution.civilian, employee_distribution.military, employee_distribution.paramilitary],
                    labels: ["civilian", "military", "paramilitary"]
                }

                // console.log("RESPONSE:::", amountByBankSum);


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  EMPLOYEE SCREEN DATA.
                    financialDeductionTableData: financialDeductionTable,
                    financialDeductionPieWithRadiusData: financialDeductionChart,
                    financialDistributionTableData: financialDistributionTable,
                    financialDistributionRingData: financialDistributionChart,

                    isFinancialSegmentThreeLoading: false,
                }));

            }

        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isFinancialSegmentThreeLoading: false,
            }));
            console.log(error);
        }

    };

    const handleGetFinancialSegmentFourData = async () => {

        //  Update State.
        setState((prevState) => ({
            ...prevState,
            isFinancialSegmentFourLoading: true,
        }));

        const {financialSelectedMinistries, financialSelectedServiceProvider, financialSelectedPFA, financialSelectedBank, financialSelectedPayrollRange} = state;

        const requestBody = {
            ministry: (financialSelectedMinistries.value !== "MDA") ? financialSelectedMinistries.value : "",
            serviceProvider: (financialSelectedServiceProvider.value !== "Service Providers") ? financialSelectedServiceProvider.value : "",
            pfa: (financialSelectedPFA.value !== "PFA") ? financialSelectedPFA.value : "",
            bank: (financialSelectedBank.value !== "Bank") ? financialSelectedBank.value : "",
            financialFrom: (financialSelectedPayrollRange[0] !== undefined) ? financialSelectedPayrollRange[0].toLocaleDateString() : "",
            financialTo: (financialSelectedPayrollRange[1] !== undefined) ? financialSelectedPayrollRange[1].toLocaleDateString() : ""
        };

        try {

            //  Get users data from the local storage.
            const userData = secureLocalStorage.getItem("userData");
            let token;
            if (userData !== null) {
                token = userData.token;
            }

            //  Make Axios call.
            const response = await axios({
                method: "get",
                url: `${get_financial_segment_four_url}?ministry=${requestBody.ministry}&serviceProvider=${requestBody.serviceProvider}&pfa=${requestBody.pfa}
                    &bank=${requestBody.bank}&financialFrom=${requestBody.financialFrom}&financialTo=${requestBody.financialTo}`,
                // url: get_all_financial_chart_url,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });

            if (response.data.success) {
                const responseData = response.data.data;
                const {amount_by_pfa, amount_by_banks} = responseData;

                // console.log("RESPONSE DATA:::", responseData);
                let amountByPFASum = 0;
                amount_by_pfa.forEach(value => amountByPFASum += value.amount);
                const financialAmountReceivedByPFAsTable = amount_by_pfa.map((eachPFAsAmount) => {
                    return {
                        name: eachPFAsAmount.pfa_name,
                        value: parseFloat(eachPFAsAmount.amount.toLocaleString()).toFixed(2),
                        percentage: ((eachPFAsAmount.amount / amountByPFASum) * 100).toFixed(1),
                    };
                });

                let pfaData = [];
                let pfaCategories = [];
                amount_by_pfa.forEach((eachPFAsAmount) => {
                    pfaData.push(eachPFAsAmount.amount.toFixed(2));
                    pfaCategories.push(eachPFAsAmount.pfa_name);
                });
                const financialAmountReceivedByPFAsChart = { data: pfaData, categories: pfaCategories };



                let amountByBankSum = 0;
                amount_by_banks.forEach(value => amountByBankSum += value.amount);
                const financialAmountReceivedByBanksTable = amount_by_banks.map((eachBankAmount) => {
                    const bankTitleCaseString = eachBankAmount.bank_name.toLowerCase().split(" ")
                        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                        .join(" ");
                    return {
                        name: bankTitleCaseString,
                        value: parseFloat(eachBankAmount.amount.toFixed(2)),
                        percentage: ((eachBankAmount.amount / amountByBankSum) * 100),
                    };
                });

                let bankData = [];
                let bankCategories = [];
                amount_by_banks.forEach((eachPFAsAmount) => {
                    bankData.push(eachPFAsAmount.amount.toFixed(2));
                    bankCategories.push(eachPFAsAmount.bank_name);
                });
                const financialAmountReceivedByBanksChart = { data: bankData, categories: bankCategories };




                // console.log("RESPONSE:::", financialAmountReceivedByPFAsTable, financialAmountReceivedByBanks);


                //  Update the state.
                return setState((prevState) => ({
                    ...prevState,
                    //  EMPLOYEE SCREEN DATA.
                    financialAmountReceivedByPFAsTableData: financialAmountReceivedByPFAsTable,
                    financialAmountReceivedByPFAsLineData: financialAmountReceivedByPFAsChart,
                    financialAmountReceivedByBanksTableData: financialAmountReceivedByBanksTable,
                    financialAmountReceivedByBanksLineData: financialAmountReceivedByBanksChart,

                    isFinancialSegmentFourLoading: false,
                }));

            }

        } catch (error) {
            let errorMessage;
            if (error.errors) {
                errorMessage = error.errors[0];
                errorToast(errorMessage);
            } else {
                errorMessage = error.response.data.message;
                errorToast(errorMessage);
            }
            setState((prevState) => ({
                ...prevState,
                isFinancialSegmentFourLoading: false,
            }));
            console.log(error);
        }

    };

    //  Input Change Handler.
    const financialMinistryFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            financialSelectedMinistries: event,
        }));
    };
    const financialServiceProviderFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            financialSelectedServiceProvider: event,
        }));
    };
    const financialPFAFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            financialSelectedPFA: event,
        }));
    };
    const financialBankFilterChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            financialSelectedBank: event,
        }));
    };
    const financialPayrollFilterChange = (event) => {
        console.log("ENROLLMENT:::", event);
        setState((prevState) => ({
            ...prevState,
            financialSelectedPayrollRange: event,
        }));
    };


    return (
        <AppStoreContext.Provider value={{
            ...state,

            toggleTheme: toggleTheme,
            switchDashboardTabs: switchDashboardTabs,
            switchEmployeeTabs: switchEmployeeTabs,
            switchFinancialTabs: switchFinancialTabs,
            updateAuthAndLoggedUser: updateAuthAndLoggedUser,
            handleInputChange: handleInputChange,


            /**
             * ///////////////////////////////////////////////////////////////////////////////
             *  GLOBAL FUNCTIONS...
             * ///////////////////////////////////////////////////////////////////////////////
             **/
            handleGetAllFilterData: handleGetAllFilterData,


            /**
             * ///////////////////////////////////////////////////////////////////////////////
             *  DASHBOARD FUNCTIONS...
             * ///////////////////////////////////////////////////////////////////////////////
             **/
            handleGetDashboardMainTableData: handleGetDashboardMainTableData,
            getDashboardNextAndPrevPage: getDashboardNextAndPrevPage,
            handleGetDashboardTopTenTableData: handleGetDashboardTopTenTableData,
            handleGetDashboardSegmentOneData: handleGetDashboardSegmentOneData,
            handleGetDashboardSegmentTwoData: handleGetDashboardSegmentTwoData,
            handleGetDashboardSegmentThreeData: handleGetDashboardSegmentThreeData,

            dashboardMinistryFilterChange: dashboardMinistryFilterChange,
            dashboardServiceProviderFilterChange: dashboardServiceProviderFilterChange,
            dashboardPFAFilterChange: dashboardPFAFilterChange,
            dashboardStateFilterChange: dashboardStateFilterChange,
            dashboardStatusFilterChange: dashboardStatusFilterChange,
            dashboardBankFilterChange: dashboardBankFilterChange,
            dashboardPayrollFilterChange: dashboardPayrollFilterChange,
            dashboardEnrollmentFilterChange: dashboardEnrollmentFilterChange,


            /**
             * ///////////////////////////////////////////////////////////////////////////////
             *  EMPLOYEE FUNCTIONS...
             * ///////////////////////////////////////////////////////////////////////////////
             **/
            handleGetEmployeeMainTableData: handleGetEmployeeMainTableData,
            getEmployeeNextAndPrevPage: getEmployeeNextAndPrevPage,
            handleGetEmployeeSegmentOneData: handleGetEmployeeSegmentOneData,
            handleGetEmployeeSegmentTwoData: handleGetEmployeeSegmentTwoData,

            employeeMinistryFilterChange: employeeMinistryFilterChange,
            employeeServiceProviderFilterChange: employeeServiceProviderFilterChange,
            employeePFAFilterChange: employeePFAFilterChange,
            employeeStateFilterChange: employeeStateFilterChange,
            employeeStatusFilterChange: employeeStatusFilterChange,
            employeeEnrollmentFilterChange: employeeEnrollmentFilterChange,


            /**
             * ///////////////////////////////////////////////////////////////////////////////
             *  FINANCIAL FUNCTIONS...
             * ///////////////////////////////////////////////////////////////////////////////
             **/
            handleGetFinancialMainTableData: handleGetFinancialMainTableData,
            getFinancialNextAndPrevPage: getFinancialNextAndPrevPage,
            handleGetFinancialSegmentOneData: handleGetFinancialSegmentOneData,
            handleGetFinancialSegmentTwoData: handleGetFinancialSegmentTwoData,
            handleGetFinancialSegmentThreeData: handleGetFinancialSegmentThreeData,
            handleGetFinancialSegmentFourData: handleGetFinancialSegmentFourData,

            financialMinistryFilterChange: financialMinistryFilterChange,
            financialServiceProviderFilterChange: financialServiceProviderFilterChange,
            financialPFAFilterChange: financialPFAFilterChange,
            financialBankFilterChange: financialBankFilterChange,
            financialPayrollFilterChange: financialPayrollFilterChange,


            handleShowPassword: handleShowPassword,
            handleLoginUser: handleLoginUser,
            handleLogoutUser: handleLogoutUser,


        }}>
            {props.children}
        </AppStoreContext.Provider>
    );
}


export { AppStoreContext };
export default AppContextProvider;