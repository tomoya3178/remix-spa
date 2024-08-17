import { useParams } from 'react-router-dom';

export default function Post() {
    const { id } = useParams();
    return (
        <div>
            <h1>Post ID: {id}</h1>
        </div>
    );
}
