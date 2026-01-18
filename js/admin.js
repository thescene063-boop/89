import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

window.addMovie = async () => {
  const title = document.getElementById("title").value;
  const poster = document.getElementById("poster").value;
  const link = document.getElementById("link").value;
  const status = document.getElementById("status");

  if (!title || !poster || !link) {
    status.textContent = "❌ กรอกข้อมูลให้ครบ";
    return;
  }

  try {
    await addDoc(collection(db, "movies"), {
      title,
      poster,
      link,
      createdAt: Date.now()
    });

    status.textContent = "✅ เพิ่มหนังเรียบร้อย";
    document.getElementById("title").value = "";
    document.getElementById("poster").value = "";
    document.getElementById("link").value = "";
    

  } catch (e) {
    status.textContent = "❌ เกิดข้อผิดพลาด";
    console.error(e);
  }
};
