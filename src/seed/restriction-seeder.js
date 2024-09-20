const { db } = require("../firebase");
const { v4: uuidv4 } = require("uuid");


const seedData = [
    { reason: 'Completed course' },
    { reason: 'Dropped out' },
    { reason: 'Transferred' },
    { reason: 'Expelled' },
    { reason: 'Graduated' },
    { reason: 'Suspended' },
];


const seedFirestore = async () => {
    try {
      const batch = db.batch();
  
      seedData.forEach((data) => {
        const docRef = db.collection("restrictions").doc(uuidv4()); 
        const currentTime = new Date().toLocaleString(); 
  
        
        batch.set(docRef, {
          ...data, 
          student_id: uuidv4(),  
          created_at: currentTime,  
        });
      });
  
      await batch.commit();  
      console.log("Firestore seeding completed!");
    } catch (error) {
      console.error("Error seeding Firestore:", error);
    }
  };
  
  seedFirestore();