const api = "AIzaSyCcwr-q_by_cGFtaukK4Jh-vxBbey1htlw"

const firebaseConfig = {
    apiKey: api,
    authDomain: "click-bible-challenge.firebaseapp.com",
    projectId: "click-bible-challenge",
    appId: "1:XXXX:web:XXXX"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        // console.log("Connecté :", user);
        showUser(user);
      })
      .catch(error => {
        console.error("Erreur de connexion :", error);
      });
  }

  function signOut() {
    auth.signOut().then(() => {
      document.getElementById("user-info").style.display = "none";
      document.getElementById("auth-buttons").style.display = "block";
      console.log("Déconnecté");
    });
  }

  function showUser(user) {
    document.getElementById("auth-buttons").style.display = "none";
    document.getElementById("user-info").style.display = "flex";
    document.getElementById("user-name").textContent = user.displayName;
    document.getElementById("user-photo").src = user.photoURL;
  }

  // Affiche l'utilisateur si déjà connecté
  auth.onAuthStateChanged(user => {
    if (user) showUser(user);
  });