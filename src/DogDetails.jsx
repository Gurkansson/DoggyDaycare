import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './DogDetails.css';
import Header from './Header';
import Footer from './Footer';

const DogDetails = () => {
    const { id } = useParams();
    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDogDetails = async () => {
            try {
                const response = await axios.get(
                    'https://api.jsonbin.io/v3/b/683c6a728561e97a501e3ca5/latest'
                );
                const dogs = response.data.record;

                console.log('URL id:', id);
                console.log('Fetched dogs:', dogs);

                const selectedDog = dogs.find(
                    (d) => d.chipNumber?.trim() === id.trim()
                );

                console.log('Selected dog:', selectedDog);

                setDog(selectedDog || null);
            } catch (error) {
                console.error('Error fetching dog:', error);
                setDog(null);
            } finally {
                setLoading(false);
            }
        };

        fetchDogDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!dog) return <div>Dog not found.</div>;

    return (
        <div className="dog-catalog_body">
            <Header />
            <div className="dog-catalog__container">
                <div className="dog-detail__content">
                    <img
                        src={dog.img}
                        alt={dog.name}
                        className="dog-detail__image"
                    />
                    <div className="dog-detail__info-wrapper">
                        <div className="dog-detail__header">
                            <h1 className="dog-detail__name">{dog.name}</h1>
                            <span
                                className={`dog-detail__status ${
                                    dog.present ? 'present' : 'not-present'
                                }`}
                            >
                                {dog.present ? 'Present' : 'Not Present'}
                            </span>
                        </div>
                        <div className="dog-detail__columns">
                            <div className="dog-detail__column">
                                <h3>Dog Details</h3>
                                <p>Breed: {dog.breed}</p>
                                <p>Age: {dog.age}</p>
                                <p>Sex: {dog.sex}</p>
                                <p>Chip Number: {dog.chipNumber}</p>
                            </div>
                            <div className="dog-detail__column">
                                <h3>Owner Information</h3>
                                <p>
                                    Name: {dog.owner.name}{' '}
                                    {dog.owner.lastName}
                                </p>
                                <p>Phone: {dog.owner.phoneNumber}</p>
                            </div>
                        </div>
                        <Link to="/dogs" className="back-button">
                            Tillbaka till våra hundar
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DogDetails;
