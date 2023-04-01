const express = require("express");
const {
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  getRoomDetails,
} = require("../controllers/roomcontroller");

const router = express.Router();

router.route("/rooms").get(getAllRooms);

router.route("/room/new").post(createRoom);

router
  .route("/room/:id")
  .put(updateRoom)
  .delete(deleteRoom)
  .get(getRoomDetails);

module.exports = router;
