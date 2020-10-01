
const config = {
    style: "mapbox://styles/paolati/cke8bqy1448cg19ljsleo5877",
    accessToken: "pk.eyJ1IjoicGFvbGF0aSIsImEiOiJja2QxZHc1YXkwYmVxMnpud2JhbThoYmVhIn0.rTRvxjSc-D398zOrFRYILw",
    CSV: "./PROGRAMME.csv",
    center: [4.825780, 45.477416], //Lng, Lat
    zoom: 7, //Default zoom
    title: "Biennale Traces",
    description: "La Biennale Traces qui aura lieu du 7 octobre au 7 décembre 2020, regroupe environ 150 propositions (conférences, tables rondes, expositions, journées d'études, projections de films, concerts, spectacles). Ces temps, sont portées par une grande diversité d’acteurs, qui tous ont en commun de travailler les questions qui entourent les migrations d’hier et d’aujourd’hui en région Auvergne-Rhône-Alpes : chercheur.euses, artistes, médias, collectifs et associations, lieux et institutions, collectivités territoriales, etc. Cette carte interactive vous permet découvrir ce vaste programme selon différentes entrées : territoriale, chronologique ou thématique.",
    sideBarInfo: ["Titre"],
    popupNom: ["Titre"],
    popupDates:["Dates"],
    popupForme:["Forme"],
    popupDescrip:["Description"],
    popupWeb: ["Lien"],
    filters: [
        {
            type: "checkbox",
            title: "Thematique : ",
            columnHeader: "Thematique",
            listItems: [
            "Travail",
            "Habitat",
            "Expression artistique des personnes migrantes",
            "20 ans",
            "Hospitalité",
            "Frontières",
            "Santé mentale",
            "Histoire coloniale"]
        },
        {
            type: "dropdown",
            title: "Département: ",
            columnHeader: "Département",
            listItems: [
                'Ain',
                'Ardèche',
                'Auvergne',
                'Drôme',
                'Isère',
                'Haute-Savoie',
                'Loire',
                'Rhône',
                'Savoie'
            ]
        },
        {
            type: "dropdown",
            title: "Forme: ",
            columnHeader: "Forme",
            listItems: [
                'Projection',
                'Concert',
                'Conférence / Table ronde',
                'Danse / Performance',
                'Exposition',
                'Littérature / Poésie',
                'Théâtre',
                'Visite commentée',
                'Atelier / Formation',
                'Autre'
            ]
        },
        {
            type: "dropdown",
            title: "Dates: ",
            columnHeader: "Semaine du",
            listItems: [
              'Semaine du 05 octobre',
              'Semaine du 12 octobre',
              'Semaine du 19 octobre',
              'Semaine du 26 octobre',
              'Semaine du 02 novembre',
              'Semaine du 09 novembre',
              'Semaine du 16 novembre',
              'Semaine du 23 novembre',
              'Semaine du 30 novembre',
              'Semaine du 07 décembre',
              'Semaine du 14 décembre'
            ]
        }
    ]

};
