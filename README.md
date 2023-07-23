# About The Project

## FR: 
Application web pour la société financière, WealthHealth. 

Cette société utilise une application web interne, appelée HRnet, qui gère les dossiers des employés. L'application est ancienne et utilise jQuery côté front end, ce qui entraîne des bugs considérables et une augmentation des plaintes en interne. 

Objectif du projet : transformer cette application en application React, migrer un des composants de Jquery vers React, publier le paquet sur le repo NMP.

## ENG: 
Web application for the financial company, WealthHealth.

This company uses an internal web application, called HRnet, which manages employee records. The app is old and uses jQuery on the front end, which leads to massive bugs and increased internal complaints.

Project goal: transform  the based JQuery application application into a React application, migrate one of the components from Jquery to React, publish one component converted in React as package on the NMP repository.

# Built With
- Vite 4.4.0
- React 18.2.0
- Typescript 5.0.2

# Architecture
The Application and NPM Module Architecture is based on S.O.L.I.D principles abstracted to use them in modern React Typescript application.
You can see examples by searching the keyword S.O.L.I.D in the code.

# Installation  : 

Clone the repo:
```
git clone https://github.com/edytaskibinska/p14RHNet.git
```

Once you cloned the project, you need to need to install the node-modules on the project repository (root) : 
```
npm install
```

To have tha last version of packages please run:
```
npm update
```

Make sure that you have the last version of Proton Design System modules:
```
npm i @e-skibinska/proton-design-system
```

Development : 
```
npm run dev
```

Build : 
```
npm run build
```

Typescript checker : 
```
tsc
```

## CLI to generate documentation: 
```
 npx typedoc --out docs src/main.tsx
```


# Useful repositories :

## The Proton Design System NPM package :
https://www.npmjs.com/package/@e-skibinska/proton-design-system

## The Github repository of the Module : Proton Design System :
https://github.com/edytaskibinska/proton-design-system

## The documentation of the Proton Design System Modal :
https://edytaskibinska.github.io/proton-design-modal-doc/

## The Codesandbox example of Proton Design Modal :
https://codesandbox.io/p/sandbox/proton-design-modal-882dtf?file=%2Fsrc%2FApp.tsx%3A63%2C10


## The GIT repository of the basic project made in static HTML and JQuery :
https://github.com/OpenClassrooms-Student-Center/P12_Front-end


## Dependencies :
Data table third party library implemented in the project: https://react-data-table-component.netlify.app/?path=/docs/getting-started-intro--page

### Note :
Actually some browsers have an minor error for example: 
```
Warning: React does not recognize the `isRTL` prop on a DOM element. 
If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `isrtl` instead. 
If you accidentally passed it from a parent component, remove it from the DOM element.
```

The error doesn't prevent the application to work, just some natives props naming from react-data-table-component are invalid in this version of REact. It's a react and react-data-table-component compatibility problem met by a lot of people and should be fixed by authors soon. 

## Design Colors inspiration:

https://colorhunt.co/palette/aac8a7c3edc0e9ffc2fdffae