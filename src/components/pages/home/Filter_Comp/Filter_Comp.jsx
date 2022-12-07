import { useContext } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';

/*==== Import _Filter_Comp SCSS ====*/
import "./_Filter_Comp.scss";

const FilterComp = () => {

    // Global State
    const { dashboardMinistryFilterOptions, dashboardServiceProviderFilterOptions, dashboardPFAFilterOptions, dashboardStateFilterOptions, dashboardBankFilterOptions, dashboardStatusFilterOptions,
        dashboardSelectedMinistries, dashboardSelectedServiceProvider, dashboardSelectedPFA, dashboardSelectedState, dashboardSelectedStatus, dashboardSelectedBank, dashboardSelectedEnrollmentRange,
        dashboardMinistryFilterChange, dashboardServiceProviderFilterChange, dashboardPFAFilterChange, dashboardStateFilterChange, dashboardStatusFilterChange, dashboardBankFilterChange, dashboardEnrollmentFilterChange,
        handleGetDashboardMainTableData, handleGetDashboardTopTenTableData, handleGetDashboardSegmentOneData, handleGetDashboardSegmentTwoData, handleGetDashboardSegmentThreeData } = useContext(AppStoreContext);
    const [enrollmentStartDate, enrollmentEndDate] = dashboardSelectedEnrollmentRange;

    const selectSearchStyle = {
        control: (base) => ({
          ...base,
          height: 40,
          width: "100%`",
          border: 0,
          boxShadow: "none",
          textTransform: "capitalize",
        }),
        indicatorSeparator: () => null
    };

    const handleGetDashboardDataWrapper = (event) => {
        event.preventDefault();
        handleGetDashboardMainTableData();
        handleGetDashboardTopTenTableData();
        handleGetDashboardSegmentOneData();
        handleGetDashboardSegmentTwoData();
        handleGetDashboardSegmentThreeData();

    };


    return (
        <section className="FilterComp">
            <h3>Filters</h3>

            <form onSubmit={event => handleGetDashboardDataWrapper(event)} className="filter__form">
                <fieldset className="row row-cols-2 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 gx-lg-3 gy-3">
                    {/* Ministry of Works */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Ministries..." }
                            options={ dashboardMinistryFilterOptions }
                            value={ dashboardSelectedMinistries }
                            onChange={(event => dashboardMinistryFilterChange(event))}
                        />
                    </div>
    
                    {/* Service Provider */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Service provider..." }
                            options={ dashboardServiceProviderFilterOptions }
                            value={ dashboardSelectedServiceProvider }
                            onChange={(event => dashboardServiceProviderFilterChange(event))}
                        />
                    </div>
    
                    {/* PFA */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "PFA..." }
                            options={ dashboardPFAFilterOptions }
                            value={ dashboardSelectedPFA }
                            onChange={(event => dashboardPFAFilterChange(event))}
                        />
                    </div>
    
                    {/* State */}
                    {/*<div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "State..." }
                            options={ dashboardStateFilterOptions }
                            value={ dashboardSelectedState }
                            onChange={(event => dashboardStateFilterChange(event))}
                        />
                    </div>*/}

                    {/* Status */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Status..." }
                            options={ dashboardStatusFilterOptions }
                            value={ dashboardSelectedStatus }
                            onChange={(event => dashboardStatusFilterChange(event))}
                        />
                    </div>

                    {/* Bank */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Bank..." }
                            options={ dashboardBankFilterOptions }
                            value={ dashboardSelectedBank }
                            onChange={(event => dashboardBankFilterChange(event))}
                        />
                    </div>

                    {/* Enrollment Period */}
                    <div className="col">
                        <DatePicker
                            selectsRange={true}
                            startDate={enrollmentStartDate}
                            endDate={enrollmentEndDate}
                            placeholderText="Enrollment Period"
                            onChange={(event => dashboardEnrollmentFilterChange(event))}
                        />
                    </div>
    
                    {/* Payroll Period */}
                    {/*<div className="col">
                        <DatePicker
                            selectsRange={true}
                            startDate={payrollStartDate}
                            endDate={payrollEndDate}
                            placeholderText="Payroll Period"
                            onChange={(event => dashboardPayrollFilterChange(event))}
                        />
                    </div>*/}
                </fieldset>
                <button className="filter__button">Filter</button>
            </form>
        </section>
    );
}

export default FilterComp;