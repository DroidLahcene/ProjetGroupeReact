import React, { useRef, useState, useEffect } from 'react';


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
            <Link to={`/Desktop/${video.id}`}>


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


// 1. Ajoutez ces imports en haut du fichier

// ... (Vos interfaces restent ici)

export const ShortVideoCard: React.FC<VideoCardProps> = ({ video }) => {

    const isVerticale = video.categorie === 'verticale';
    const aspectRatioClass = isVerticale ? 'aspect-9/16' : 'aspect-video';

    // 2. NOUVEAU : Logique de détection de visibilité
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.6 } // La vidéo se lance quand 60% est visible
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <article
            ref={cardRef} // 3. NOUVEAU : On attache la référence ici
            key={video.id}
            className={`border border-gray-200 rounded-lg overflow-hidden shadow-md 
                        w-full hover:shadow-lg max-w-[50vh] transition-shadow duration-200`}
        >

            <div className={`relative ${aspectRatioClass} bg-black`}> {/* bg-black évite le flash blanc */}

                {/* 4. MODIFICATION : L'iframe ne s'affiche (et ne joue) que si visible */}
                {isVisible ? (
                    <iframe
                        src={`../../../assets/videos/${video.lien}`}
                        title={video.titre}
                        className="w-full h-full border-0"
                        allowFullScreen
                        // allow="autoplay" est important ici
                        allow="autoplay; encrypted-media"
                    ></iframe>
                ) : (
                    // Placeholder quand la vidéo n'est pas à l'écran (économise les ressources)
                    <div className="w-full h-full flex items-center justify-center text-white">
                        <p>Chargement...</p>
                        {/* Vous pouvez remettre votre balise <img> ici si vous voulez une miniature */}
                    </div>
                )}

            </div>

            <div className="p-3">
                {/* Affichage du Titre */}
                <Link to={`/Desktop/${video.id}`}>
                    <h3 className="text-base text-center font-semibold leading-tight mb-1 truncate">
                        {video.titre}
                    </h3>
                </Link>
                {!isVerticale && (
                    <>
                        <p className="text-sm text-gray-600 my-1">
                            Durée : {video.duree} secondes
                        </p>
                        <p className="text-xs text-gray-700 mt-2 line-clamp-2">
                            {video.description}
                        </p>
                    </>
                )}
            </div>
        </article>
    );
};