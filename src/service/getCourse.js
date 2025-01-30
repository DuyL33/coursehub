import api from './Api';

const getCourse = async (courseNumber) => {
    return api.get(`https://nk8spmytaz.us-east-1.awsapprunner.com/CS/Courses/${courseNumber}`)
        .then(response => response.data)
        .catch(error => {
            console.log('Error fetching course data', error);
            return null;
        });
};

export default getCourse;