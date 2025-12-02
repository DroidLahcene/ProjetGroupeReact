import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router';
import { VideoContext } from '@/contexts/VideoAPI/VideoContext';

export default function Visualisation() {
    // 1. Récupérer le paramètre (qui doit être l'ID)
    const { id } = useParams<{ id: string | undefined }>();

    // 2. Tester si l'ID est manquant
    if (!id) {
        console.error("ID manquant dans l'URL, redirection.");
        return <Navigate to="/" replace />;
    }

    // 3. Convertir l'ID et gérer les erreurs
    const videoId = parseInt(id, 10);

    // Si la conversion échoue (ex: ID="abc"), parseInt retourne NaN.
   /*  if (isNaN(videoId)) {
        console.error(`ID non numérique trouvé: ${id}. Redirection.`);
        return <Navigate to="/Mobile" replace />;
    } */

    // 4. Utiliser le contexte pour trouver la vidéo
    const { videos, loading } = useContext(VideoContext);
    console.log('Type de videoId (URL):', typeof videoId, 'Valeur:', videoId);
    console.log('Type de v.id (Array):', typeof videos[0]?.id, 'Valeur:', videos[0]?.id);
    // ✅ RECHERCHE PAR ID (NUMBER) : C'est la méthode la plus sûre
    const video = videos.find(v => v.id === videoId);






    if (loading || videos.length === 0) { 
        return <div className="text-center p-8 text-lg font-semibold">Chargement des données vidéos...</div>;
    }



    // Si l'ID est invalide ou la vidéo n'est pas trouvée
    if (!video) {
        // Rediriger vers la page d'accueil ou afficher une erreur
        return <Navigate to="/" replace />;
    }

    // Déterminer les classes de ratio pour l'affichage en grand
    const isVerticale = video.categorie === 'verticale';
    // Utilisation de la classe de ratio directement si vous avez configuré aspect-9/16
    const aspectRatioClass = isVerticale ? 'aspect-9/16 max-w-sm' : 'aspect-video max-w-4xl';

    // 4. Afficher la vidéo en grand
    return (
        <div className="flex justify-center p-10 min-h-screen bg-gray-50">
            <div className={`bg-white shadow-xl rounded-lg ${aspectRatioClass} w-full`}>

                {/* Titre */}
                <h1 className="text-3xl font-bold p-4 text-center">{video.titre}</h1>

                {/* Conteneur de la Vidéo (simulé ici avec un iframe pour l'exemple) */}
                <div className="relative w-full h-full p-4">
                    <iframe
                        src={`../../../assets/videos/${video.lien}`}
                        title={video.titre}
                        className="w-full h-full border-0"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Informations supplémentaires */}
                <div className="p-4 border-t border-gray-100">
                    <p className="text-lg">{video.description}</p>
                    <p className="text-sm text-gray-500 mt-2">Durée: {video.duree} secondes</p>
                </div>
            </div>
        </div>
    );
}