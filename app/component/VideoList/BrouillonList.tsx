/* import React, { useContext } from 'react';
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
    <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Vidéos Classiques</h2>
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos
                .filter(v => v.categorie === 'classique')
                .map((video: Video) => (
                    // La carte prend automatiquement la taille définie par la grille
                    // 'col-span-1' n'est pas nécessaire ici car elle est implicite
                    <VideoCard key={video.id} video={video} /> 
                ))}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Shorts</h2>
         <div className="flex gap-4 overflow-x-auto pb-4">
            {videos
                .filter(v => v.categorie === 'verticale')
                .map((video: Video) => (
                    // On définit une largeur fixe ou semi-fixe (w-48) pour les Shorts dans un flexbox
                    <VideoCard key={video.id} video={video} className="w-48 flex-shrink-0" />
                ))}
        </div>
    </div>
);
}
 */