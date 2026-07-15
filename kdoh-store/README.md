# 🛍️ KDOH Store - E-commerce Nouvelle Génération

Plateforme e-commerce complète avec support de réalité augmentée, système d'affiliation, et portefeuille numérique KDOH Coin.

## 🚀 Démarrage Rapide

### En local (Développement)

```bash
# Cloner le repository
git clone https://github.com/votre-compte/kdoh-store.git
cd kdoh-store

# Lancer tous les services
docker-compose up -d

# Accéder à l'application
# Frontend: http://localhost:3000
# Admin: http://localhost:3000/admin.html
# API: http://localhost:3000/api
```

### Identifiants Admin par défaut

- **Email:** admin@kdoh.store
- **Mot de passe:** Admin123!

⚠️ **Important:** Changez ces identifiants en production !

## 📦 Architecture

```
kdoh-store/
├── backend/              # API NestJS (TypeScript)
│   ├── src/
│   │   ├── auth/        # Authentification JWT + Rôles
│   │   ├── products/    # Gestion produits + Imports multi-sources
│   │   ├── orders/      # Commandes & Checkout
│   │   ├── wallet/      # Portefeuille KDOH Coin
│   │   ├── affiliation/ # Système de parrainage
│   │   ├── ar-content/  # Contenu Réalité Augmentée
│   │   └── users/       # Gestion utilisateurs & KYC
│   ├── Dockerfile
│   └── package.json
├── frontend/            # Interface publique (optionnel)
├── docker-compose.yml   # Orchestration des services
└── .github/workflows/   # CI/CD GitHub Actions
```

## 🔧 Services Inclus

| Service | Description | Port |
|---------|-------------|------|
| **Backend** | API NestJS principale | 3000 |
| **PostgreSQL** | Base de données | 5432 |
| **Redis** | Cache & Sessions | 6379 |

## 🌐 Fonctionnalités

### ✅ Produits
- CRUD complet pour administrateurs
- Import automatique depuis Shopify, Amazon, eBay
- Support images multiples
- URLs pour modèles 3D (AR)
- Gestion de stock en temps réel

### ✅ Authentification
- JWT avec refresh tokens
- Système de rôles (Admin / User)
- Protection des routes sensibles

### ✅ Affiliation
- Génération de codes de parrainage uniques
- Suivi des utilisateurs référencés
- Calcul automatique des commissions

### ✅ Portefeuille KDOH Coin
- Simulation blockchain sans gas fees
- Transactions internes
- Historique complet

### ✅ Commandes
- Panier utilisateur
- Checkout sécurisé (stubs Stripe/PayPal)
- Suivi des commandes

## 📱 Contact & Support

### WhatsApp
👉 [Cliquez ici pour nous contacter](https://wa.me/50941310565)

Ou scannez le QR code depuis l'application mobile WhatsApp avec le numéro: **+509 4131 0565**

### Email
📧 **leadercado@gmail.com**

### Horaires de support
- Lundi - Vendredi: 9h00 - 18h00 (EST)
- Samedi: 10h00 - 14h00 (EST)
- Dimanche: Fermé

## 🚀 Déploiement Production

### Prérequis
- Serveur VPS (DigitalOcean, AWS, Scaleway, etc.)
- Docker & Docker Compose installés
- Repository GitHub configuré

### Étapes

1. **Configurer les secrets GitHub** dans votre repository:
   - `DOCKER_USERNAME` - Votre nom d'utilisateur Docker Hub
   - `DOCKER_PASSWORD` - Votre mot de passe Docker Hub
   - `VPS_HOST` - IP ou domaine de votre serveur
   - `VPS_USER` - Utilisateur SSH (ex: root)
   - `VPS_SSH_KEY` - Clé privée SSH

2. **Sur votre serveur VPS:**
```bash
# Cloner le repository
git clone https://github.com/votre-compte/kdoh-store.git /opt/kdoh-store
cd /opt/kdoh-store

# Copier et personnaliser .env
cp backend/.env.example backend/.env
nano backend/.env  # Modifiez JWT_SECRET et mots de passe

# Lancer les services
docker-compose up -d

# Vérifier les logs
docker-compose logs -f backend
```

3. **Pousser vers GitHub** déclenchera un déploiement automatique:
```bash
git add .
git commit -m "Nouvelle fonctionnalité"
git push origin main
```

GitHub Actions va automatiquement:
- Builder l'image Docker
- La pousser sur Docker Hub
- Se connecter à votre VPS via SSH
- Mettre à jour le conteneur backend

## 🔒 Sécurité en Production

Avant de déployer en production, modifiez impérativement:

```env
# backend/.env
JWT_SECRET=votre_secret_très_complexe_et_unique
ADMIN_PASSWORD=votre_mot_de_passe_admin_sécurisé
POSTGRES_PASSWORD=votre_mot_de_passe_db_sécurisé
```

## 🛠️ Développement

### Installation locale sans Docker

```bash
cd backend

# Installer les dépendances
npm install

# Copier .env.example vers .env
cp .env.example .env

# Lancer PostgreSQL et Redis localement
# Ou utiliser Docker:
docker-compose up -d postgres redis

# Mode développement (watch mode)
npm run start:dev

# Mode build
npm run build
npm run start:prod
```

### Tests

```bash
# Tests unitaires
npm run test

# Tests end-to-end
npm run test:e2e

# Coverage
npm run test:cov
```

## 📊 Variables d'Environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `NODE_ENV` | Environnement (development/production) | development |
| `PORT` | Port du serveur | 3000 |
| `DATABASE_URL` | URL de connexion PostgreSQL | postgresql://kdoh:kdoh123@localhost:5432/kdoh_db |
| `REDIS_URL` | URL de connexion Redis | redis://localhost:6379 |
| `JWT_SECRET` | Secret pour signer les tokens JWT | change_this_in_production |
| `ADMIN_EMAIL` | Email de l'administrateur | admin@kdoh.store |
| `ADMIN_PASSWORD` | Mot de passe admin | Admin123! |

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 License

Ce projet est sous license MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- NestJS pour le framework backend
- TypeORM pour la gestion de base de données
- Docker pour la conteneurisation
- GitHub Actions pour le CI/CD

---

**KDOH Store** - L'avenir du e-commerce est ici 🚀
