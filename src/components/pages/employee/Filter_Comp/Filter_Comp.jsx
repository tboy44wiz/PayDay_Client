import { useContext } from 'react';
import Select from 'react-select';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';

/*==== Import _Filter_Comp SCSS ====*/
import "./_Filter_Comp.scss";
import DatePicker from "react-datepicker";

const FilterComp = () => {

    // Global State
    const { employeeMinistryFilterOptions, employeeServiceProviderFilterOptions, employeePFAFilterOptions, employeeStateFilterOptions, employeeStatusFilterOptions,
        employeeSelectedMinistries, employeeSelectedServiceProvider, employeeSelectedPFA, employeeSelectedState, employeeSelectedStatus, employeeSelectedEnrollmentRange,
        employeeMinistryFilterChange, employeeServiceProviderFilterChange, employeePFAFilterChange, employeeStateFilterChange, employeeStatusFilterChange, employeeEnrollmentFilterChange,
        handleGetEmployeeMainTableData, handleGetEmployeeChartData } = useContext(AppStoreContext);
    const [enrollmentStartDate, enrollmentEndDate] = employeeSelectedEnrollmentRange;

    const selectSearchStyle = {
        control: (base) => ({
          ...base,
          height: 40,
          width: "auto",
          border: 0,
          boxShadow: "none",
          textTransform: "capitalize",
        }),
        indicatorSeparator: () => null
    };

    const handleGetEmployeeDataWrapper = (event) => {
        event.preventDefault();
        handleGetEmployeeMainTableData();
        handleGetEmployeeChartData();
    };


    return (
        <section className="FilterComp">
    
            <h3>Filters</h3>
            <form onSubmit={event => handleGetEmployeeDataWrapper(event)} className="filter__form">
                <fieldset className="row">
                    {/* Ministry of Works */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Ministries..." }
                            options={ employeeMinistryFilterOptions }
                            value={ employeeSelectedMinistries }
                            onChange={(event => employeeMinistryFilterChange(event))}
                        />
                    </div>
    
                    {/* Service Provider */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Service provider..." }
                            options={ employeeServiceProviderFilterOptions }
                            value={ employeeSelectedServiceProvider }
                            onChange={(event => employeeServiceProviderFilterChange(event))}
                        />
                    </div>
    
                    {/* PFA */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "PFA..." }
                            options={ employeePFAFilterOptions }
                            value={ employeeSelectedPFA }
                            onChange={(event => employeePFAFilterChange(event))}
                        />
                    </div>
    
                    {/* State */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "State..." }
                            options={ employeeStateFilterOptions }
                            value={ employeeSelectedState }
                            onChange={(event => employeeStateFilterChange(event))}
                        />
                    </div>
    
                    {/* Status Period */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Status..." }
                            options={ employeeStatusFilterOptions }
                            value={ employeeSelectedStatus }
                            onChange={(event => employeeStatusFilterChange(event))}
                        />
                    </div>

                    {/* Enrollment Period */}
                    <div className="col">
                        <DatePicker
                            selectsRange={true}
                            startDate={enrollmentStartDate}
                            endDate={enrollmentEndDate}
                            placeholderText="Enrollment Period"
                            onChange={(event => employeeEnrollmentFilterChange(event))}
                        />
                    </div>
                </fieldset>
                <button className="filter__button">Filter</button>
            </form>
        </section>
    );
}

export default FilterComp;