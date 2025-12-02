import React from 'react';
import type { Video } from '@/contexts/VideoAPI/VideoContext'; 

interface VideoCardProps {
    video: Video;
    // Nouvelle prop optionnelle pour la largeur de la carte (ex: '300px', '25%')
    cardWidth?: string; 
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, cardWidth = '300px' }) => {
    
    const isVerticale = video.categorie === 'verticale';
    
    // Détermine le ratio et la hauteur de la zone d'image en utilisant 'padding-bottom'
    // 16:9 (Classique) => 9 / 16 = 0.5625 => 56.25%
    // 9:16 (Verticale/Short) => 16 / 9 = 1.7777 => 177.77%
    const ratioPadding = isVerticale ? '177.77%' : '56.25%'; 

    const cardStyle = {
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        overflow: 'hidden',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        width: cardWidth,
    };
    
    // Styles pour le conteneur de l'image (pour gérer le ratio)
    const imageContainerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        paddingBottom: ratioPadding, // <-- Crée la hauteur basée sur le ratio (56.25% ou 177.77%)
        overflow: 'hidden',
    };

    // Styles de l'image (doit couvrir tout le conteneur)
    const imageStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };
    
    return (
        <article style={cardStyle}>
            <a href={`../../../assets/videos/${video.lien}`} target="_blank" rel="noopener noreferrer">
                
                {/* Conteneur pour le Ratio */}
                <div style={imageContainerStyle}>
                    <img 
                        src={`../../../assets/miniatures/${video.miniature}`} 
                        alt={`Miniature de ${video.titre}`} 
                        style={imageStyle} // <-- Utilisation des styles de couverture
                    />
                </div>
                
            </a>
            
            <div style={{ padding: '10px' }}>
                <h3 style={{ margin: '0', fontSize: '1.2em', lineHeight: '1.4' }}>
                    {video.titre}
                </h3>
                
                {!isVerticale && (
                    <>
                        {/* Affiche Durée et Description seulement pour les classiques */}
                        <p style={{ margin: '5px 0', color: '#606060', fontSize: '0.9em' }}>
                            Durée : {video.duree} secondes 
                        </p>
                        <p style={{ margin: '10px 0 0 0', color: '#333', fontSize: '0.9em' }}>
                            {video.description}
                        </p>
                    </>
                )}
            </div>
        </article>
    );
};