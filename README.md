# FORMULAIRE DE CONTACT
Je m'appelle Horiane HOUNKANRIN, je suis en mastère 1 informatique et systèmes d'information.   
J'aimerais un stage d'une durée de 03 mois.  
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

# Questions  
**Difficulté de l’exercice**  
L’exercice était globalement intermédiaire.  
Les principales difficultés rencontrées :  

la synchronisation entre frontend et backend (naming des champs)  
la configuration de Prisma avec PostgreSQL via Docker  

**Nouveaux outils appris**  

Prisma : découverte de la gestion des migrations et du client généré  
Zod : validation propre et typée côté backend  

**Place du développement web dans mon cursus** 
Le développement web occupe une place centrale dans ma formation, elle est orientée développement full stack et IA.   
Nous travaillons régulièrement sur des projets concrets qui permettent de mettre en pratique les notions vues en cours.  

**Utilisation d’un LLM**  
Oui  
Utilisation principale :     
Compréhension des erreurs techniques et amélioration des bonnes pratiques (naming, architecture)  

Intégration dans le workflow :  
Debug des erreurs
Amélioration du code (refactor, structure)  
Gain de temps sur les problèmes bloquants  

