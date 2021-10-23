import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://192.168.1.8:8080";
//const EMPLOYEE_API_BASE_URL = "http://localhost:8080";

class EmployeeService {

    signUp(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+"/signup", employee);
    }

    login(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+"/login", employee);
    }

    getDetails(){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/user/getDetails",config);
    }

    logout(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post(EMPLOYEE_API_BASE_URL+"/user/logout", employee,config);
    }

    forgotPassword(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+"/forgotPassword", employee);
    }

    resetPassword(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+"/resetPassword", employee);
    }

    candidateProfileStatus(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/candidate/profileStatus ", config);
    }

    postRequirement(details){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post(EMPLOYEE_API_BASE_URL+"/postRequirement", details,config);
    }

    closeRequirement(details){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post(EMPLOYEE_API_BASE_URL+"/poc/closeRequirement", details,config);
    }

    editDetails(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post(EMPLOYEE_API_BASE_URL+"/user/editDetails", employee,config);
    }

    pocReqEligibleProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/poc/requirement/eligibleProfiles",config);
    }

    allRequirement(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/requirementList ", config);
    }

    fetchAllActiveRequirements(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/getActiveRequirements", config);
    }

    fetchAllClosedRequirements(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/getClosedRequirements", config);
    }

    fetchAllInProgressRequirements(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/getInProgressRequirements", config);
    }

    Upload(formData){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post(EMPLOYEE_API_BASE_URL+"/uploadProfile", formData,config);
    }

    feedback(formData){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post(EMPLOYEE_API_BASE_URL+"/submitFeedback", formData,config);
    }

    pocAllRequirement(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/poc/requirementList", config);
    }

    pocActiveRequirement(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/poc/getActiveRequirements", config);
    }

    pocClosedRequirement(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/poc/getClosedRequirements", config);
    }

    pocProgressRequirement(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/poc/getInProgressRequirements", config);
    }

    rmgUploadedProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/rmg/uploadedProfiles", config);
    }

    ActiveUserProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/rmg/getActiveUserProfiles", config);
    }

    SelectedUserProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/rmg/getSelectedUserProfiles", config);
    }

    InProgressUserProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/rmg/getInProgressUserProfiles", config);
    }

    AllActiveUserProfiles(){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/getActiveUserProfiles", config);
    }

    AllSelectedUserProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/getSelectedUserProfiles", config);
    }

    AllInProgressUserProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get(EMPLOYEE_API_BASE_URL+"/getInProgressUserProfiles", config);
    }

    AvailabilityStatus(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+"/AvailabilityStatus",employee);
    }
}

export default new EmployeeService()