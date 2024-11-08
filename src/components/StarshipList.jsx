
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  return (
    <section>
      <p>Results: {starships.length}</p>
      <ul>
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </ul>
    </section>
  )
}

export default StarshipList;
