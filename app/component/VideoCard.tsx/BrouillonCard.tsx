import React from 'react';
import { Link } from 'react-router';
import type { Video } from '@/contexts/VideoAPI/VideoContext'; 

interface VideoCardProps {
    video: Video;
    className?: string;
    // cardWidth ne peut plus être une chaîne CSS arbitraire (ex: '30%') 
    // à moins d'utiliser des classes utilitaires spécifiques ou des styles inline pour la largeur.
    // On va laisser le composant parent gérer la grille.
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    
    const isVerticale = video.categorie === 'verticale';
    
    // Détermine la classe de ratio Tailwind à utiliser
    // Si votre Tailwind est configuré : aspect-9/16 pour verticale, aspect-video (16/9) pour classique.
    // Si votre Tailwind n'est pas configuré pour 9/16, vous devrez utiliser une classe personnalisée ou une hauteur fixe.
    const aspectRatioClass = isVerticale ? 'aspect-9/16' : 'aspect-video';

    return (
        // Remplacement de style={} par className="..."
        <article 
            key={video.id} 
            className={`border border-gray-200 rounded-lg overflow-hidden shadow-md 
                        w-full hover:shadow-lg transition-shadow duration-200`}
        >
            <Link to={`Desktop/${video.id}`}>
                
      
                <div className={`relative ${aspectRatioClass}`}>
                    <img 
                        src={`../../../assets/miniatures/${video.miniature}`} 
                        alt={`Miniature de ${video.titre}`} 
                        // La classe 'object-cover' garantit que l'image remplit le conteneur sans étirement
                        className="absolute inset-0 w-full h-full object-cover" 
                    />
                </div>
                
            </Link>
            
            <div className="p-3">
                {/* Affichage du Titre */}
                <h3 className="text-base font-semibold leading-tight mb-1 truncate">
                    {video.titre}
                </h3>
                
                {!isVerticale && (
                    <>
                        {/* Affiche Durée et Description seulement pour les classiques */}
                        <p className="text-sm text-gray-600 my-1">
                            Durée : {video.duree} secondes 
                        </p>
                        {/* Utilisation de "line-clamp-2" pour limiter la description à deux lignes */}
                        <p className="text-xs text-gray-700 mt-2 line-clamp-2">
                            {video.description}
                        </p>
                    </>
                )}
            </div>
        </article>
    );
};