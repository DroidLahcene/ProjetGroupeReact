/*  import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// Définition du type pour une vidéo (basé sur ce que retourne votre API)
export interface Video {
   id: number;
    titre: string; 
    description: string;
    lien: string;          
    miniature: string;      
    categorie: string;     
    duree: number;         
    date_creation: string;  
}

// Définition du type pour le Context Value
interface VideoContextValue {
    videos: Video[];
    loading: boolean;
    error: string | null;
    fetchVideos: () => Promise<void>;
}

// URL de votre API Node.js/Express
const API_URL = "http://localhost:3715/api/videos";

// Création du Contexte
export const VideoContext = createContext<VideoContextValue>({
    videos: [],
    loading: false,
    error: null,
    fetchVideos: async () => {}, // Fonction vide par défaut
});

// Création du Provider
export function VideoProvider({ children }: { children: ReactNode }) {
    
    // État pour stocker la liste des vidéos
    const [videos, setVideos] = useState<Video[]>([]);
    
    // État pour gérer le chargement
    const [loading, setLoading] = useState(false);
    
    // État pour gérer les erreurs
    const [error, setError] = useState<string | null>(null);

    // Fonction pour récupérer les vidéos de l'API
    async function fetchVideos() {
        // Bloquer si déjà en chargement ou si les données sont déjà là
        if (videos.length > 0 || loading) {
            return;
        }

        setLoading(true);
        setError(null); // Réinitialiser l'erreur

        try {
            const response = await fetch(API_URL);
            
            if (!response.ok) {
                // Si le statut HTTP n'est pas 200-299
                throw new Error(`Erreur HTTP ${response.status}: Impossible de récupérer les vidéos.`);
            }

            const datas: Video[] = await response.json();

            setVideos(datas);
            
        } catch (err) {
            console.error(err);
            setError("Problème de connexion à l'API ou de serveur.");

        } finally {
            setLoading(false);
        }
    }
    
    // Utiliser useEffect pour charger les données dès que le Provider est monté
    useEffect(() => {
        fetchVideos();
    }, []); // Le tableau vide assure l'exécution unique au montage

    return (
        <VideoContext.Provider value={{
            videos,
            loading,
            error,
            fetchVideos, // Exportée au cas où vous voudriez recharger les données manuellement
        }}>
            {children}
        </VideoContext.Provider>
    );
} 


 */
