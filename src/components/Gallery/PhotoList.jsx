import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PhotoList.scss'
function PhotoList() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=4');
                setPhotos(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="photo-container">
            {photos.map(photo => (
                <div key={photo.id} className="photo-card">
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <p>{photo.title}</p>
                </div>
            ))}
        </div>
    );
}

export default PhotoList;