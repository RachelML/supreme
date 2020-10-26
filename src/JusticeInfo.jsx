import dotenv from 'dotenv'
dotenv.config()

const JusticeInfo = {
  api_key: process.env.REACT_APP_TMDB_API_KEY,
  justices: [
    {
      "id": 346364,
        "title": "John G. Roberts, Jr.",
        "poster_path": "/Roberts_8807-16_Crop.jpg",
        "backdrop_path": "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
        "overview": "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
        "release_date": "2017-09-05"
    },
    {
      "id": 343668,
        "title": "Clarence Thomas",
        "poster_path": "/Thomas_9366-024_Crop.jpg",
        "backdrop_path": "/uExPmkOHJySrbJyJDJylHDqaT58.jpg",
        "overview": "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
        "release_date": "2017-09-20"
    },
    {
      "id": 339403,
        "title": "Stephen G. Breyer",
        "poster_path": "/Breyer_8664-13-Crop.jpg",
        "backdrop_path": "/goCvLSUFz0p7k8R10Hv4CVh3EQv.jpg",
        "overview": "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
        "release_date": "2017-06-28"
    },
    {
        "id": 335984,
        "title": "Samuel A. Alito",
        "poster_path": "/Alito_9264-001-Crop.jpg",
        "backdrop_path": "/zfWPeRgYpRjPZLGwwkfnTfaFnNh.jpg",
        "overview": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
        "release_date": "2017-10-04"
    },
    {
      "id": 381283,
        "title": "Sonia Sotomayor",
        "poster_path": "/Sotomayor_9841-001-Crop.jpg",
        "backdrop_path": "/uuQpQ8VDOtVL2IO4y2pR58odkS5.jpg",
        "overview": "A couple's relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.",
        "release_date": "2017-09-13"
    },
    {
      "id": 374720,
        "title": "Elena Kagan",
        "poster_path": "/Kagan_10713-017-Crop.jpg",
        "backdrop_path": "/fudEG1VUWuOqleXv6NwCExK0VLy.jpg",
        "overview": "The miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26th and June 4th 1940, during the Battle of France in World War II.",
        "release_date": "2017-07-19"
    },
    {
      "id": 415842,
        "title": "Neil M. Gorsuch",
        "poster_path": "/Gorsuch2.jpg",
        "backdrop_path": "/puKZWmBIpuEMwGCn2hZkublG1rO.jpg",
        "overview": "Following the murder of his fiancée, Mitch Rapp trains under the instruction of Cold War veteran Stan Hurley. The pair then is enlisted to investigate a wave of apparently random attacks on military and civilian targets.",
        "release_date": "2017-09-14"
    },
    {
      "id": 390043,
        "title": "Brett M. Kavanaugh",
        "poster_path": "/Kavanaugh%2012221_005_crop.jpg",
        "backdrop_path": "/7KsqfXDECZMryX1Rv4RKsT7SIjQ.jpg",
        "overview": "The world's top bodyguard gets a new client, a hit man who must testify at the International Court of Justice. They must put their differences aside and work together to make it to the trial on time.",
        "release_date": "2017-08-16"
    }
  ]
}

export default JusticeInfo;