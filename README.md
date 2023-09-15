# TempuraSure

> TempuraSure is a web application dashboard that retrieves, saves and tabulates hourly temperature data for Toronto, CA.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Design Decisions and Tradeoffs](#design-decisions-and-tradeoffs)
- [Room For Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

- This web application was developed as an exercise for Virgl.io.
- This application makes calls at a given interval to [`https://open-meteo.com/`](https://open-meteo.com/).

## Technologies Used

- Next.js - version 13.4.19
- React.js - version 18.2.0
- TailwindCSS - version 3.3.3
- Typescript - version 5.2.2

## Notable Libraries Used

- chart.js - version 4.4.0

## Features

- Displaying current temperature
- Pause and resume temperature data fetching with the "Play / Pause" button.
- Save a temperature/time snapshot using the "Save Snaps" button.
- Show/Hide a table containing up to 5 snapshots using the "Show/Hide Snaps" button.
- Tracking 5-day historical temperature data within a line chart.

## Screenshots

Mobile View

![Mobile View](https://res.cloudinary.com/di7kiyj3y/image/upload/v1694799791/tempura-sure-mobile_s2ikdc.png)

Mobile View with Snapshot Table

![Mobile View with Snapshot Table](https://res.cloudinary.com/di7kiyj3y/image/upload/v1694799791/tempura-sure-mobile-snaps_wy4wkl.png)

Tablet View

![Tablet View](https://res.cloudinary.com/di7kiyj3y/image/upload/v1694799791/tempura-sure-tablet_z0vkyc.png)

Tablet View with Snapshot Table

![Tablet View With Snapshot Table](https://res.cloudinary.com/di7kiyj3y/image/upload/v1694799790/tempura-sure-tablet-snaps_q0fx2r.png)

Desktop View

![Desktop View](https://res.cloudinary.com/di7kiyj3y/image/upload/v1694799790/tempura-sure-desktop_poo1cr.png)

Desktop View with Snapshot Table

![Desktop View with Snapshot Table](https://res.cloudinary.com/di7kiyj3y/image/upload/v1694799791/tempura-sure-desktop-snaps_xhei5v.png)

## Setup

Download the repository.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Decisions and Tradeoffs

- First exposure to Next.js metaframework. Proceeded to develop using short timeline to simulate employer take-home assignment.
- TailwindsCSS used as CSS framework due to previous exposure, preference and quick development time.
- Added icons and colour-coded buttons for ease of use. Added dual function for play/pause and show/hide buttons to streamline user interactions with dashboard. 
- Opted for browser localStorage property to persist data (temperature snapshots only) due to short (1.5 day) submission turnaround time.
- Limited number of stored snapshots in localStorage to maximum of 5. This was done to prevent overloading localStorage key. 
- Should more data be required to persist, relational database (MySQL / SQLite / PostgreSQL) can be integrated using Prisma ORM.

## Room For Improvement

- General refactoring and type-checking.
- Overall knowledge and practice with Next.js and integrating Prisma database.
- Chart.js / react-chartjs-2 implementation and styling.
- An extra helping of deep fried seafood to maintain developer satiation.

Known issues:

- Touch events interfering with scrolling in lineup page.
- Deployment issues where cookies are unable to be received by front-end from back-end.

## Acknowledgements

[Virgl.io](https://www.virgl.io/) for the opportunity to tackle this exercise.

## Contact

Created by [Kent K.C. Ho](https://www.linkedin.com/in/kentkcho/) - feel free to contact me!

> Written with [StackEdit](https://stackedit.io/).
