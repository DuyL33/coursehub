
const handleDeleteReview = async (createdTime) => {
    try {
        const token = localStorage.getItem('jwt');

        return await fetch(`https://nk8spmytaz.us-east-1.awsapprunner.com/CS/Courses/Review/${encodeURIComponent(createdTime)}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error('Error deleting review:', error.message);
    }
};

export default handleDeleteReview;
