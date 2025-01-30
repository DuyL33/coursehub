import axios from 'axios';

export default axios.create({
    baseURL:'https://nk8spmytaz.us-east-1.awsapprunner.com/CS/Courses',
    headers: {
        'Content-Type': 'application/json',
      },
});