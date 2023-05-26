import  express  from "express";
import { getRelationships,addRelationship, deletedRelationship} from "../controllers/relationship.js";

const router = express.Router()

router.get("/", getRelationships)
router.post("/", addRelationship)
router.delete("/", deletedRelationship)
export default router