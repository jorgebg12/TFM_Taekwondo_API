import express from "express";
import { TechniquesRepository } from "../services/database";
import { TechniqueType, UserTechniqueEntry } from "../types";

const router = express.Router();

// router.get("/", async (_, res) => {
//   res.send(await TechniquesRepository.getAllTechniques());
// });

router.get("/atacks", async (_, res) => {
  res.send(await TechniquesRepository.getTechniqueByType(TechniqueType.Ataque));
});

router.get("/atacks/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    res.send(
      await TechniquesRepository.getTechniqueByTypeAndUser(
        TechniqueType.Ataque,
        userId
      )
    );
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});
//

router.get("/defenses", async (_, res) => {
  res.send(
    await TechniquesRepository.getTechniqueByType(TechniqueType.Defensa)
  );
});

router.get("/defenses/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    res.send(
      await TechniquesRepository.getTechniqueByTypeAndUser(
        TechniqueType.Defensa,
        userId
      )
    );
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});
router.get("/positions", async (_, res) => {
  res.send(
    await TechniquesRepository.getTechniqueByType(TechniqueType.Posicion)
  );
});

router.get("/positions/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    res.send(
      await TechniquesRepository.getTechniqueByTypeAndUser(
        TechniqueType.Posicion,
        userId
      )
    );
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});
router.get("/pum", async (_, res) => {
  res.send(await TechniquesRepository.getTechniqueByType(TechniqueType.Pum));
});

router.get("/pum/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    res.send(
      await TechniquesRepository.getTechniqueByTypeAndUser(
        TechniqueType.Pum,
        userId
      )
    );
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

router.post("/mark", async (req, res) => {
  console.log(req.body);

  const { userId, techniqueId }: UserTechniqueEntry = req.body;
  try {
    await TechniquesRepository.markTechnique(userId, techniqueId);
    const technique = await TechniquesRepository.getTechniqueById(techniqueId);
    const newTechnique = { ...technique, marked: true };
    console.log(newTechnique);
    res.send(newTechnique);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

router.post("/unmark", async (req, res) => {
  console.log(req.body);
  const { userId, techniqueId }: UserTechniqueEntry = req.body;
  try {
    await TechniquesRepository.unmarkTechnique(userId, techniqueId);
    const technique = await TechniquesRepository.getTechniqueById(techniqueId);
    const newTechnique = { ...technique, marked: false };
    console.log(newTechnique);
    res.send(newTechnique);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});
// router.get("/:id", (req, res) => {
//   const technique = techniqueServices.findById(+req.params.id);

//   technique != null ? res.send(technique) : res.sendStatus(404);
// });

// router.post("/", (req, res) => {
//   try {
//     const newTechniqueEntry = toNewTechniqueEntry(req.body);
//     const addedTechniqueEntry =
//       techniqueServices.addTechnique(newTechniqueEntry);

//     res.json(addedTechniqueEntry);
//   } catch (e: any) {
//     res.status(400).send(e.message);
//   }
// });

export default router;
