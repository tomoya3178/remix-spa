import { useParams } from 'react-router-dom';

export default function Post() {
    const { id } = useParams();
    return (
        <div>
            <h1>ID: {id}</h1>
        </div>
    );
}
