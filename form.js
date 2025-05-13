const form = document.getElementById("challengeForm");
const message = document.getElementById("message");
const entriesList = document.getElementById("entriesList");

let currentUser = null;
let editingId = null;

auth.onAuthStateChanged(user => {
  if (user) {
    currentUser = user;
    displayEntries();
  } else {
    currentUser = null;
    entriesList.innerHTML = '<p>Connecte-toi pour voir tes lectures 📖</p>';
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!currentUser) {
    alert("Tu dois être connecté pour enregistrer une lecture.");
    return;
  }

  const data = {
    userId: currentUser.uid,
    date: document.getElementById("date").value,
    passage: document.getElementById("passage").value,
    social: document.getElementById("social").value,
    socialUnit: document.getElementById("socialUnit").value,
    done: document.getElementById("doneSelect").value,
    with: document.getElementById("with").value,
    note: document.getElementById("note").value,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    if (editingId) {
      await db.collection("lectures").doc(editingId).update(data);
      message.textContent = "✏️ Modifié avec succès !";
      editingId = null;
    } else {
      data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      await db.collection("lectures").add(data);
      message.textContent = "✅ Enregistré ! Tu peux continuer ✨";
    }

    form.reset();
    displayEntries();
  } catch (error) {
    console.error("Erreur d'enregistrement :", error);
    alert("❌ Une erreur est survenue.");
  }
});

async function displayEntries() {
  if (!currentUser) return;

  entriesList.innerHTML = '<h2 style="font-size:18px">📅 Entrées précédentes</h2>';

  const snapshot = await db.collection("lectures")
    .where("userId", "==", currentUser.uid)
    .orderBy("date", "desc")
    .get();

  snapshot.forEach(doc => {
    const data = doc.data();
    const key = doc.id;

    entriesList.innerHTML += `
      <div class="entry" data-key="${key}">
        <strong>${data.date}</strong><br>
        📖 ${data.passage}<br>
        ⏱️ ${data.social} ${data.socialUnit}<br>
        ✅ Lecture faite : ${data.done}<br>
        👥 ${data.with}<br>
        📝 ${data.note}
        <div class="entry-buttons">
          <button onclick="editEntry('${key}')">Modifier</button>
          <button onclick="deleteEntry('${key}')">Supprimer</button>
        </div>
      </div>
    `;
  });
}

async function deleteEntry(id) {
  try {
    await db.collection("lectures").doc(id).delete();
    displayEntries();
  } catch (error) {
    console.error("Erreur suppression :", error);
  }
}

async function editEntry(id) {
  try {
    const doc = await db.collection("lectures").doc(id).get();
    const data = doc.data();

    document.getElementById("date").value = data.date;
    document.getElementById("passage").value = data.passage;
    document.getElementById("social").value = data.social;
    document.getElementById("socialUnit").value = data.socialUnit;
    document.getElementById("doneSelect").value = data.done;
    document.getElementById("with").value = data.with;
    document.getElementById("note").value = data.note;

    editingId = id;
    message.textContent = "✏️ Tu modifies une entrée existante";
  } catch (error) {
    console.error("Erreur chargement :", error);
  }
}