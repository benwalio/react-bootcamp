import { useRouter } from 'next/router';
import axios from 'axios';

async function Post() {
    const router = useRouter();
    const [data] = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + router.query.id)
    console.log(data)
     return <h1>this is post</h1>;
}

export default Post

// export const getServerSideProps = async () => {
    
// };

