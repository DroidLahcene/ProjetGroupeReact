import React, { useContext } from 'react';
import { VideoContext } from '@/contexts/VideoAPI/VideoContext';
import { ShortVideoCard } from '../VideoCard.tsx/VideoCard';
import { Navigate } from 'react-router';

export default function ShortList() {

    const { videos, loading, error } = useContext(VideoContext);

    // Filtrer uniquement les vidéos verticales (Shorts)
    const shorts = videos.filter(v => v.categorie === 'verticale');
    console.log(shorts);

    // Vérification de l'état
    if (loading || videos.length === 0) {
        return <div className="text-center p-8 text-lg font-semibold h-screen">Chargement des Shorts...</div>;
    }

    if (error) {
        return (
            <div>
                {error}
                <p>Vérifiez que l'API est démarrée sur le port 3715.</p>
            </div>
        );
    }

    if (shorts.length === 0) {
        // Redirection si aucun Short n'est trouvé
        return <Navigate to="/" replace />;
    }

   return (
        // 1. Conteneur principal de la PAGE (min-h-screen pour le fond)
        // On retire 'h-screen' et 'overflow-hidden' pour laisser le scroll naturel se faire
        <div className="w-full min-h-screen bg-gray-200 py-10">
            
            {/* 2. Colonne centrale qui limite la largeur */}
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-12">
                
                {shorts.map((video) => (
                    // 3. Conteneur de chaque Short
                    // Plus de hauteur fixe ici, le contenu prend sa place
                    <div 
                        key={video.id} 
                        className="w-full flex justify-center"
                    >
                        <ShortVideoCard 
                            video={video} 
                         
                            className="" 
                        />
                    </div>
                ))}
                
            </div>
        </div>
    );
}