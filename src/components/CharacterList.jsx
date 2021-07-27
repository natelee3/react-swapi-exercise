import { Link } from 'react-router-dom';

const CharacterList = (props) => {
    const { characters } = props;
    return (
        <>
            <h1>Please Select a Character</h1>
            {!!characters.length ? (
                <ul>
                  {characters.map((character, index) => (
                      <li key={index}>
                          <Link to={`/character/${index}`}>
                              {character.name}
                          </Link>
                      </li>
                  ))}
                </ul>
            ) : (
                <p>Loading... </p>
            )}
        </>
    )
}

export default CharacterList;