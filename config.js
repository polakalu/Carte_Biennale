
const config = {
    style: "mapbox://styles/paolati/ckcdrbphi08jd1jo47fh3b6n9",
    accessToken: "pk.eyJ1IjoicGFvbGF0aSIsImEiOiJja2QxZHc1YXkwYmVxMnpud2JhbThoYmVhIn0.rTRvxjSc-D398zOrFRYILw",
    CSV: "https://docs.google.com/spreadsheets/d/10cfrtBc1H-9MZbKkRf3ycBomddm790O4LSyfSeEi-SA",
    center: [4.8406743, 45.7531474], //Lng, Lat
    zoom: 6, //Default zoom
    title: "Biennale Traces",
    description: "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
    sideBarInfo: ["Nom","Description","Date","Contact","Site Internet"],
    popupInfo: ["Nom"],
    filters: [
        {
            type: "checkbox",
            title: "Thématique : ",
            columnHeader: "Thématique",
            listItems: ["Travail","Habitat", "Expression artistique des personnes migrantes","Autre"]
        },
        {
            type: "checkbox",
            title: "Type de soirée: ",
            columnHeader: "Forme",
            listItems: ["Film", "Conférence", "Théâtre","Table ronde","Concert","Exposition"]
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
        }
    ]

};
