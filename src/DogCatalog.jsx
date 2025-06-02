import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DogCatalog.css';
import Footer from './Footer';
import Header from './Header';

const DogCatalog = () => {
  const [loading, setLoading] = useState(true);
  const [dogs, setDogs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          'https://api.jsonbin.io/v3/b/683c6a728561e97a501e3ca5/latest'
        );

        const fetchedDogs = response.data.record.filter(
          (dog) => dog.img && dog.chipNumber
        );

        setDogs(fetchedDogs);
        if (fetchedDogs.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error);
        setError('Failed to fetch dogs. Please try again');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="page-content dog-catalog_body">
        <div className="dog-catalog__container">
          <h1 className="dog-catalog__title">Dog Catalog</h1>
          <div className="dog-catalog__grid">
            {loading ? (
              <p>Loading...</p>
            ) : dogs.length > 0 ? (
              dogs.map((dog) => (
                <div key={dog.chipNumber} className="dog-catalog__item">
                  <Link to={`/dog/${dog.chipNumber}`} className="dog-catalog__link">
                    <img
                      src={dog.img}
                      alt={dog.name}
                      className="dog-catalog__image"
                    />
                    <p>{dog.name}</p>
                  </Link>
                </div>
              ))
            ) : (
              <p>No dogs available.</p>
            )}
          </div>
          {!hasMore && <p>No more dogs to load.</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DogCatalog;
