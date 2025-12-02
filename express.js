// server.js

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();

// port 3715  pour avoir qquchose de different du react(5173 c'est l'inverse)
const port = 3715; 

// Middleware essentiels
app.use(cors());  //<-- Cross-Origin Resource Sharing (ca en fait des mots) c'est pour autoriser les requetes fetch entre nos fichiers parceque l'origine est differente ( pas les meme PORT)
app.use(express.json());

// --- Configuration MySQL ---
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '', // <-- À REMPLACER
    database: 'fakeyt' // <-- À REMPLACER
};


async function getConnection() {
    return await mysql.createConnection(dbConfig);
}

// --- Route API pour les vidéos ---
app.get('/api/videos', async (req, res) => {
    let connection;
    try {
        connection = await getConnection();
        // Exécute la requête SQL pour récupérer les 30 vidéos
        const [rows] = await connection.execute('SELECT * FROM videos LIMIT 30');
        
        // Renvoie le tableau de vidéos au format JSON
         res.json(rows); 
       
    } catch (err) {
        console.error("Erreur BDD:", err);
        res.status(500).json({ message: "Erreur serveur : impossible de récupérer les vidéos." });
    
    } finally {
        if (connection) {
            connection.end(); // Fermeture de la connexion
        }
    }
});

// --- Démarrage du Serveur ---
app.listen(port, () => {
  console.log(`API démarrée avec Bun/Express sur http://localhost:${port}`);
    
});