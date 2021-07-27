import { useParams, useHistory } from 'react-router-dom';

const CharacterProfile = (props) => {
    const { index } = useParams();
    const character = props.characters[index]
    const history = useHistory();

    return (
        <div className="card">
            <h1>{character.name}</h1>
            <p>Born: {character.birth_year}</p>
            <p>Weight: {character.mass}</p>
            <button type="button"
             onClick={()=> history.goBack()}>Go Home</button>
        </div>
    )
}

export default CharacterProfile;