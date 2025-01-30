import api from './Api';


const handleReviewSubmit = async (newReview) => {

    try {
        return api.post(`https://nk8spmytaz.us-east-1.awsapprunner.com/CS/Courses/Review`, newReview);
    } catch (error) {
        console.log('Error submitting course review', error);
        return null;
    }
};

export default handleReviewSubmit;
