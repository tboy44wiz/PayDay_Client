import React, { useContext } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";

// /*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';

/*==== Import _Filter_Comp SCSS ====*/
import "./_Filter_Comp.scss";

const FilterComp = () => {

    // Global State
    const { financialMinistryFilterOptions, financialServiceProviderFilterOptions, financialPFAFilterOptions, financialBankFilterOptions,
        financialSelectedMinistries, financialSelectedServiceProvider, financialSelectedPFA, financialSelectedBank, financialSelectedPayrollRange,
        financialMinistryFilterChange, financialServiceProviderFilterChange, financialPFAFilterChange, financialBankFilterChange,  financialPayrollFilterChange,
        handleGetFinancialData } = useContext(AppStoreContext);
    const [payrollStartDate, payrollEndDate] = financialSelectedPayrollRange;

    const handleChange = (event) => {
        console.log(event);
    };

    const selectSearchStyle = {
        control: (base) => ({
          ...base,
          height: 40,
          width: "auto",
          border: 0,
          boxShadow: "none",
        }),
        indicatorSeparator: () => null
    };

    const handleGetFinancialDataWrapper = (event) => {
        event.preventDefault();
        handleGetFinancialData();
    };

    return (
        <section className="FilterComp">
    
            <h3>Filters</h3>
            <form onSubmit={event => handleGetFinancialDataWrapper(event)} className="filter__form">
                <fieldset className="row">
                    {/* Ministry of Works */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Ministries..." }
                            options={ financialMinistryFilterOptions }
                            value={ financialSelectedMinistries }
                            onChange={(event => financialMinistryFilterChange(event))}
                        />
                    </div>
    
                    {/* Service Provider */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Service provider..." }
                            options={ financialServiceProviderFilterOptions }
                            value={ financialSelectedServiceProvider }
                            onChange={(event => financialServiceProviderFilterChange(event))}
                        />
                    </div>
    
                    {/* PFA */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "PFA..." }
                            options={ financialPFAFilterOptions }
                            value={ financialSelectedPFA }
                            onChange={(event => financialPFAFilterChange(event))}
                        />
                    </div>
    
                    {/* State */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Bank..." }
                            options={ financialBankFilterOptions }
                            value={ financialSelectedBank }
                            onChange={(event => financialBankFilterChange(event))}
                        />
                    </div>

                    {/* Payroll Period */}
                    <div className="col">
                        <DatePicker
                            selectsRange={true}
                            startDate={payrollStartDate}
                            endDate={payrollEndDate}
                            placeholderText="Payroll Period"
                            onChange={(event => financialPayrollFilterChange(event))}
                        />
                    </div>
                </fieldset>
                <button className="filter__button">Filter</button>
            </form>
        </section>
    );
}

export default FilterComp;