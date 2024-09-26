const { db } = require("../firebase");
const { v4: uuidv4 } = require("uuid");



const getRestriccionById = async (restrictionId,res) => {}

const getRestriccionByReason = async (reason,res) => {
  try{
    const querySnapshot = await db.collection("restrictions")
    .where("reason","==",reason)
    .get(); 
    if (querySnapshot.empty) {
      res.status(404).send('Restricciones no encontradas')
    }
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return res.status(200).json(data);

  }catch(error){
    return res.status(500).send("Error al obtener las restricciones por su razón.");
  }
}

const getRestrictionsByStudent = async (studentId,res) => {
  try {
    const querySnapshot = await db.collection("restrictions")
    .where("studentId", "==", studentId)
    .get();

    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(data);
    
  }catch(error){
    res.status(500).send("Error al obtener las restricciones del estudiante.");
  }
  
};

const hasRestrictions = async (studentId,res) => {
  try {
    const querySnapshot = await db.collection("restrictions")
      .where("studentId", "==", studentId)
      .get();

    if(!querySnapshot.empty) return res.status(200).send("Estudiante con restricciones.");
  }catch(error){
    res.status(500).send("Error al validar el estudiante.");

  }
  res.status(200).send("Estudiante sin restricciones.");
};

const assignRestriction = async (studentId, reason,res) => {
  try{
    const restrictionId = uuidv4(); 
    await db.collection("restrictions").doc(restrictionId).set({
      studentId,
      reason,
      createdAt: new Date().toLocaleString(),
    });
    res.status(200).send(`Restricción asignada con el id: ${restrictionId}`);

  }catch(error){
    res.status(500).send("Error al asignar la restricción.");
  }
  

};


const removeRestriction = async (restrictionId,res) => { 
  try {
    await db.collection("restrictions").doc(restrictionId).delete();
    res.status(200).send("Restricción eliminada.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al retirar la restricción.");
  }
};

const getAllRestrictions = async (res) => {
  try{
  const querySnapshot = await db.collection("restrictions").get();
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.status(200).json(data);

  }catch(error){
    console.error(error);
    res.status(500).send("Error al obtener las restricciones.");
  }
  
};

module.exports = {
  getRestrictionsByStudent,
  hasRestrictions,
  assignRestriction,
  removeRestriction,
  getAllRestrictions,
  getRestriccionByReason,
};
