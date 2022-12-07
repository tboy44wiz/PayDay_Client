//  Base URL.
// const base_url = "https://dazzling-ishizaka.34-222-182-29.plesk.page/api/v1";
const base_url = "https://dashboard.ippisharmonization.com/api/v1";
// const base_url = "http://localhost:5000/api/v1";

//  Auth routes.
export const user_signup_url = `${ base_url }/users/signup`;
export const user_login_url = `${ base_url }/login`;

//  Employee routes.
export const filters_url = `${ base_url }/filters`;



//  Dashboard routes.
// export const get_all_dashboard_data_url = `${ base_url }/dashboard`;
export const get_dashboard_main_table_url = `${ base_url }/dashboard/table`;
export const get_dashboard_top_ten_table_url = `${ base_url }/dashboard/top-data`;
export const get_dashboard_segment_one_url = `${ base_url }/dashboard/segment-one`;
export const get_dashboard_segment_two_url = `${ base_url }/dashboard/segment-two`;
export const get_dashboard_segment_three_url = `${ base_url }/dashboard/segment-three`;



//  Employee routes.
export const get_all_employee_main_table_url = `${ base_url }/employees/table`;
export const get_all_employee_segment_one_url = `${ base_url }/employees/segment-one`;
export const get_all_employee_segment_two_url = `${ base_url }/employees/segment-two`;
export const get_all_employee_segment_three_url = `${ base_url }/employees/segment-three`;
export const get_all_employee_segment_four_url = `${ base_url }/employees/segment-four`;



//  Financial routes.
export const get_all_financial_main_table_url = `${ base_url }/financials/table`;
export const get_financial_segment_one_url = `${ base_url }/financials/segment-one`;
export const get_financial_segment_two_url = `${ base_url }/financials/segment-two`;
export const get_financial_segment_three_url = `${ base_url }/financials/segment-three`;
export const get_financial_segment_four_url = `${ base_url }/financials/segment-four`;
