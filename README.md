# FORMULAIRE DE CONTACT  
[Linkedin](https://www.linkedin.com/in/horiane-c-m-hounkanrin-17b537224/)  
[Portfolio](https://horiane-hounkanrin.netlify.app/)  
[Github](https://github.com/Cornelliah)  

# Page Réalisée
<img width="942" height="439" alt="image" src="https://github.com/user-attachments/assets/d004b469-16b7-4cf3-95ee-f94c560144e1" />

# Stack technique & choix
**Frontend**

  React (v19.2.4): adapté à un formulaire interactif.  
  TypeScript: permet de typer les données (formulaire, disponibilités) et d’éviter les erreurs côté frontend.  
  CSS (vanilla): styling simple et personnalisé sans dépendance externe.  
  
**Backend**  
Node.js + Express : framework léger pour créer une API REST rapidement  
Prisma (ORM) : simplifie la gestion des bases de données Node.js avec un schéma intuitif, des migrations fluides et une intégration TypeScript.  
Zod : Validation stricte des données côté backend avant insertion en base et compatibilté avec typescript .  

**Base de données**   
PostgreSQL (via Docker) : Base relationnelle fiable, lancée dans un conteneur Docker pour simplifier l’environnement.  
Docker : permet de standardiser l’environnement de développement et éviter les problèmes de compatibilité.  

# Lancement du projet  
**1. Cloner le projet**  
git clone https://github.com/Cornelliah/formulaire-majordhom.git  

**2. Lancer la base de données**  
cd backend  
docker compose up -d   

**3. Backend**  
*npm install*   
Créer un fichier **.env** :    
*DATABASE_URL=postgresql://user:password@localhost:5432/majordhom_db*   
*PORT=5000*   
Lancer les migrations :    
*npx prisma migrate dev --name init*    
Démarrer le serveur :    
*npm run dev*    

**4. Frontend**  
cd frontend  
npm install  
npm run dev  

**5. Accès**  
Frontend : http://localhost:5173 (ou port Vite)  
Backend : http://localhost:5000  


