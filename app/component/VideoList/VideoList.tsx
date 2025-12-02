import React, { useContext } from 'react';
import { VideoContext, type Video } from '@/contexts/VideoAPI/VideoContext'; 
import { VideoCard } from '../VideoCard.tsx/VideoCard';

export function VideoList() {
    
    const { videos, loading, error } = useContext(VideoContext);

    //Si c'est encore entrain de charger et que aucune vide est dispo 
    if (loading && videos.length === 0) {
        return (
            <div style={{ padding: '40px', textAlign: 'center' }}>
                Chargement des vidéos... 🎬
            </div>
        );
    }
    
    //Si ya une erreur on affiche l'erreur
    if (error) {
        return (
            <div>
                {error}
                <p>Vérifiez que l'API est démarrée sur le port 3715.</p>
            </div>
        );
    }

    //sinon ya des données du coup on affiche les données
    return (
        <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '0 20px' }}>
            <h2>Les 30 Vidéos Récupérées ({videos.length} éléments)</h2>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '20px' 
            }}>
                {videos.map((video: Video) => (
                    <VideoCard key={video.id} video={video} cardWidth='100%' />
                ))}
            </div>
        </div>
    );
}
/* {videos
    .filter(v => v.categorie === 'classique')
    .map(video => (
        // Nous définissons une largeur de 30% ou 400px
        <VideoCard key={video.id} video={video} cardWidth="30%" /> 
    ))} */