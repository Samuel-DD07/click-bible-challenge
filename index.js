
      // Tableau des lectures
      const lectures = {
        "12/05/2025": "La création et la chute - Genèse 1-3",
        "13/05/2025": "Le premier meurtre - Genèse 4:1-16",
        "14/05/2025": "Noé et le déluge - Genèse 6:1 à 9:17",
        "15/05/2025": "La tour de Babel - Genèse 11:1-9",
        "16/05/2025":
          "La destruction de Sodome et Gomorrhe et la femme de Lot - Genèse 19:1-29",
        "17/05/2025": "Abraham est prêt à sacrifier Isaac - Genèse 22:1-19",
        "18/05/2025": "L’histoire de Jacob - Genèse 25:19 à 35:29",
        "19/05/2025": "L’histoire de Joseph - Genèse 37 à 50",
        "20/05/2025": "Moïse en Égypte - Exode 1 à 14",
        "21/05/2025": "Moïse: L’Exode - Exode 12:27 à 18:27",
        "22/05/2025": "Le passage à travers la mer - Exode 14:15-31",
        "23/05/2025": "Au mont Sinaï - Exode 19 à 40:38",
        "24/05/2025":
          "Les dix commandements - Exode 20:1-17; Deutéronome 5:7 à 21",
        "25/05/2025": "Errant dans le désert - Nombres 14:32 à 17:15",
        "26/05/2025": "Adieu et mort de Moïse - Deutéronome 31 à 34",
        "27/05/2025": "Balaam et Balac - Nombres 22 à 24",
        "28/05/2025": "L’histoire de Ruth - Ruth 1 à 4",
        "29/05/2025": "L’histoire de Samuel - 1 Samuel 1 à 16",
        "30/05/2025": "Saül, le premier roi - 1 Samuel 8 à 31",
        "31/05/2025":
          "David, le roi berger - 1 Samuel 16 à 31; 2 Samuel 1 à 24; 1 Rois 1 à 2:12",
        "01/06/2025": "Le roi Salomon - 1 Rois 2:12 à 11:43",
        "02/06/2025": "Élie, le grand prophète - 1 Rois 17 à 21; 2 Rois 1",
        "03/06/2025": "Élisée, son successeur - 2 Rois 2-21",
        "04/06/2025": "Victoire de Jéhu sur Jézabel - 2 Rois 9",
        "05/06/2025": "Néhémie, constructeur héroïque - Néhémie 1 à 4",
        "06/06/2025": "Esther, reine héroïque - Esther 1:9 à 7:10",
        "07/06/2025": "Chadrac, Méchak et Abed-nego - Daniel 3",
        "08/06/2025":
          "Le banquet de Baltazar et l’inscription mystérieuse - Daniel 5",
        "09/06/2025": "Daniel dans la fosse aux lions - Daniel 6",
        "10/06/2025": "Jonas rebelle à sa mission - Jonas 1 à 4",
        "11/06/2025": "Jean-Baptiste : Sa naissance - Luc 1:5-25",
        "12/06/2025":
          "Jean-Baptiste : Son ministère - Matthieu 3; Marc 1:1-11; Luc 3:1-20",
        "13/06/2025":
          "Jean-Baptiste : Son exécution par Hérode - Matthieu 14:1-12; Marc 6:14-29",
        "14/06/2025":
          "La naissance de Jésus - Matthieu 1:18 à 2:15; Luc 1:26-56; 2:1-40",
        "15/06/2025": "Jésus à douze ans dans le temple - Luc 2:41-52",
        "16/06/2025":
          "Le baptême de Jésus - Matthieu 3:13-17; Marc 1:9-11; Luc 3:21-22",
        "17/06/2025":
          "La tentation de Jésus - Matthieu 4:1-11; Marc 1:12,13; Luc 4:1-13",
        "18/06/2025": "Le sermon sur la montagne - Matthieu 5 à 7; Luc 6:20-49",
        "19/06/2025":
          "L’entrée triomphale de Jésus à Jérusalem - Matthieu 21:1-11; Marc 11:1-11; Luc 19:28-44; Jean 12:12-19",
        "20/06/2025":
          "La passion et la résurrection - Matthieu 26 à 28; Marc 14 à 16; Luc 22 à 24; Jean 13 à 21",
        "21/06/2025":
          "L’Ascension de Jésus - Marc 16:19; Luc 24:50-53; Actes 1:6-11",
        "22/06/2025":
          "La graine de moutarde - Matthieu 13:31-32; Marc 4:30-32; Luc 13:18-19",
        "23/06/2025": "Le semeur - Matthieu 13:1-23; Marc 4:1-20; Luc 8:4-15",
        "24/06/2025": "La semence qui pousse toute seule - Marc 4:26-29",
        "25/06/2025":
          "La mauvaise herbe - Matthieu 13:24-43; Le levain - Matthieu 13:33; Luc 13:20-21",
        "26/06/2025": "Le trésor caché - Matthieu 13:44",
        "27/06/2025": "La perle précieuse - Matthieu 13:45-46",
        "28/06/2025": "Le filet - Matthieu 13:47-50",
        "29/06/2025": "Le serviteur impitoyable - Matthieu 18:21-35",
        "30/06/2025": "Les ouvriers dans la vigne - Matthieu 20:1-16",
        "01/07/2025":
          "Les deux fils - Matthieu 21:28-32; Les vignerons - Matthieu 21:33-46; Marc 12:1-12; Luc 20:9-18",
        "02/07/2025": "Le banquet nuptial - Matthieu 22:1-14; Luc 14:15-24",
        "03/07/2025": "Les dix vierges - Matthieu 25:1-13",
        "04/07/2025": "Les talents - Matthieu 25:14-30",
        "05/07/2025": "Le jugement dernier - Matthieu 25:31-46",
        "06/07/2025": "Les deux débiteurs - Luc 7:36-50",
        "07/07/2025": "Le bon Samaritain - Luc 10:25-37",
        "08/07/2025": "Le riche insensé - Luc 12:16-21",
        "09/07/2025": "Les serviteurs qui veillent - Luc 12:35-48",
        "10/07/2025":
          "Le figuier stérile - Luc 13:6-9; La brebis égarée - Luc 15:3-7",
        "11/07/2025": "La pièce d’argent perdue et retrouvée - Luc 15:8-10",
        "12/07/2025":
          "Le fils prodigue - Luc 15:11-32; L’intendant infidèle - Luc 16:1-13",
        "13/07/2025": "L’homme riche et Lazare - Luc 16:19-31",
        "14/07/2025":
          "Le juste injuste - Luc 18:1-8; Le pharisien et le publicain - Luc 18:9-14",
        "15/07/2025": "Les pièces d’or - Luc 19:11-27",
        "16/07/2025":
          "Guérison d’un lépreux - Matthieu 8:1-4; Marc 1:40-45; Luc 5:12-16; Guérison du serviteur d’un centurion - Matthieu 8:5-13; Luc 7:1-10",
        "17/07/2025":
          "Guérison de la belle-mère de Pierre - Matthieu 8:14-15; Marc 1:29-31; Luc 4:38-39; La tempête apaisée - Matthieu 8:23-27; Marc 4:35-41; Luc 8:22-25",
        "18/07/2025":
          "Les démoniaques Gadaréniens - Matthieu 8:28-34; Marc 5:1-20; Luc 8:26-39; Guérison d’un paralytique - Matthieu 9:1-8; Marc 2:1-12; Luc 5:17-26",
        "18/07/2025":
          "Les démoniaques Gadaréniens - Matthieu 8:28-34; Marc 5:1-20; Luc 8:26-39; Guérison d’un paralytique - Matthieu 9:1-8; Marc 2:1-12; Luc 5:17-26",
        "19/07/2025":
          "La fille de Jaïrus et la femme malade - Matthieu 9:18-26; Marc 5:21-43; Luc 8:40-56",
        "20/07/2025":
          "Les deux aveugles et le muet - Matthieu 9:27-34; L’homme à la main paralysée - Matthieu 12:9-14; Marc 3:1-6; Luc 6:6-11",
        "21/07/2025":
          "L’aveugle et muet possédé - Matthieu 12:22-32; Marc 3:20-30; Luc 11:14-23",
        "22/07/2025":
          "Guérison d’une femme infirme - Luc 13:10-17; Guérison d’un homme hydropique - Luc 14:1-6",
        "23/07/2025":
          "Les dix lépreux - Luc 17:11-19; L’aveugle Bartimée - Matthieu 20:29-34; Marc 10:46-52; Luc 18:35-43",
        "24/07/2025": "La résurrection de Lazare - Jean 11:1-44",
        "25/07/2025": "Le paralytique à Béthesda - Jean 5:1-18",
        "26/07/2025": "L’aveugle-né - Jean 9:1-41",
        "27/07/2025":
          "L’eau changée en vin - Jean 2:1-12; La multiplication des pains - Matthieu 14:13-21; Marc 6:30-44; Luc 9:10-17; Jean 6:1-15",
        "28/07/2025":
          "Jésus marche sur l’eau - Matthieu 14:22-33; Marc 6:45-52; Jean 6:16-21",
        "29/07/2025": "Les dix commandements (rappel) - Exode 20:1-17",
        "30/07/2025": "Le fruit de l’Esprit - Galates 5:16-26",
        "31/07/2025": "L’amour selon 1 Corinthiens - 1 Corinthiens 13",
      };

      // Fonction pour obtenir la date du jour au format DD/MM/YYYY
      function getTodayFormatted() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0"); // Les mois commencent à 0
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
      }

      // Obtenir la lecture du jour
      function getLectureOfTheDay() {
        const today = getTodayFormatted();
        const lecture = lectures[today];
        if (lecture) {
          // console.log(`Lecture du ${today} : ${lecture}`);
          return lecture;
        } else {
          // console.log(`Aucune lecture trouvée pour le ${today}.`);
          return null;
        }
      }

            // console.log("Lecture du jour : " + getLectureOfTheDay());
            document.getElementById("verset").textContent =
              getLectureOfTheDay();