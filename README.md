The frontend of the app built using Nextjs and Tailwind and Shadcn UI Library
## Getting Started
clone the repo :https://github.com/MuhammadYousufHabib/Similarverse-frontend
## Installing Dependency
npm i
## Run Development server 
npm run dev ->run development server

## Screens
Splashscreen : ![image](https://github.com/user-attachments/assets/22ae99a4-7b14-4a1b-858a-738bb9cf3dec)
SurahList :    ![image](https://github.com/user-attachments/assets/3f9f4fd7-2862-4dd6-a0fa-bba937b2580d)
FindSimilarverse : ![image](https://github.com/user-attachments/assets/b61f87bb-8ddd-4662-8311-401455217cda)

## Routes :
/surah  ->surahlist
/       ->splash screen
/surah/[surah No.]     ->each Surah
/similarverse          ->finding similar verse

## Folder Structure ##:
Folder structure is simple ,formed like a typical Nextjs Application

| App
├── similarverse
│   ├── page.js                // Displays similar verses
├── surah
│   ├── [id]
│   │   └── page.js            // Displays a specific Surah by ID
│   └── page.js                // Lists all Surahs
└── page.js (default)          // Default landing page
|
|
Components                     // All components for the app
|
|
Services
├── ApiUtils.js                // API utility functions


## Backend Setup  
ceck the link given below for backend setup :
https://github.com/furqanx11/SimilarVerse-Backend/blob/main/README.md
