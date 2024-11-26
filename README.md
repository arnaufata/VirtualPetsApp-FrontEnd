# VirtualPetsApp - FrontEnd

**VirtualPetsApp** és una aplicació desenvolupada amb **React**, **Vite** i **Axios** que permet als usuaris registrar-se, iniciar sessió i gestionar una llista de mascotes virtuals. Aquesta aplicació inclou funcionalitats d'autenticació, protecció de rutes i operacions CRUD (Crear, Llegir, Actualitzar i Eliminar) per a les mascotes.

## ✨ Característiques
- **Autenticació d'usuaris**: Registre, inici de sessió i tancament de sessió.
- **Gestió de mascotes**: Crear, personalitzar, veure, actualitzar i eliminar mascotes.
- **Protecció de rutes**: Accés restringit a certes rutes per als usuaris no autenticats.
- **Interfície interactiva**: Navegació fluïda entre les diferents pàgines de l'aplicació.
- **Navbar funcional**: Inclou botons de logout, navegació a les pàgines de mascotes, creació i inici.

## 🛠️ Requisits
- **Node.js** i **npm** (Node Package Manager)
- **Vite** (com a eina de construcció de l'aplicació)

## 📥 Instal·lació

### 1. Clonar el repositori
```bash
git clone https://github.com/arnaufata/VirtualPetsApp-FrontEnd.git

## 2. Instal·lar les dependències

Navega a la carpeta del projecte i executa:

```bash
npm install

## 3. Configuració del servidor

Assegura't que el servidor de l'API estigui executant-se a `http://localhost:8080` o modifica la `baseURL` a `src/api/config.js` si el servidor està en una altra URL.

## 🚀 Execució del projecte

Per iniciar l'aplicació en mode de desenvolupament, executa:

```bash
npm run dev

Això iniciarà l'aplicació a `http://localhost:5173`

## 📂 Estructura del projecte

VirtualPetsApp-FrontEnd/
├── public/
│   └── images/
│       └── pets/
├── src/
│   ├── api/
│   ├── components/
│   │   ├── auth/
│   │   ├── pets/
│   │   └── navbar/
│   ├── pages/
│   ├── services/
│   └── App.jsx
├── package.json
└── vite.config.js

### Explicació:
- `public/images/pets/`: Conté imatges de les mascotes.
- `src/api/`: Configuració de l'API i `baseURL`.
- `src/components/`: Components reutilitzables, incloent Navbar, components d'autenticació i gestió de mascotes.
- `src/pages/`: Pàgines principals de l'aplicació (Login, Register, UserPetsPage, PetsPage, CreatePetPage).
- `src/services/`: Serveis que interactuen amb l'API utilitzant Axios.

## 🐾 Ús de l'aplicació

### **Autenticació**
- **Registre**: Crea un compte nou des de la pàgina de registre.
- **Inici de sessió**: Inicia sessió amb les credencials creades durant el registre.
- **Tancament de sessió**: Elimina el token d'autenticació del `localStorage`.

### **Gestió de Mascotes**
- **Crear una mascota**: Navega a "Crear Mascota" per afegir una nova mascota.
- **Personalitzar una mascota**: Assigna un nom i un color a la mascota.
- **Veure les teves mascotes**: Mostra una llista amb totes les teves mascotes.
- **Actualitzar o eliminar mascotes**: Selecciona una mascota per canviar el nom o eliminar-la.

### **Protecció de rutes**
Algunes rutes estan protegides i només accessibles per als usuaris autenticats. Si un usuari no autenticat intenta accedir-hi, serà redirigit a la pàgina de login.

## 🎨 Personalització

Pots modificar els estils CSS i els components segons les teves necessitats. Cada pàgina conté un objecte `styles` per definir els seus estils.

## 📦 Dependències

- **React**: Biblioteca principal per a la construcció d'interfícies d'usuari.
- **Axios**: Client HTTP per realitzar sol·licituds a l'API.
- **Vite**: Eina de desenvolupament ràpida per a projectes frontend.
- **React Router**: Per gestionar la navegació dins l'aplicació.
- **Font Awesome**: Per a icones personalitzades.

## 🤝 Contribució

Si desitges contribuir al projecte:
1. Fes un **fork** del repositori.
2. Crea una nova branca per als teus canvis:

   ```bash
   git checkout -b feature/nova-funcionalitat

3. Fes un **commit** dels teus canvis:

   ```bash
   git commit -m "Descripció dels canvis"

4. Envia els teus canvis al teu repositori:

   ```bash
   git push origin feature/nova-funcionalitat

5. Obre un **pull request**..
