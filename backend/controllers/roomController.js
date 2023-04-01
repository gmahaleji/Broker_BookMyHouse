const Room = require("../models/roomsModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//CreateRooms -- Admin

exports.createRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.create(req.body);

  res.status(201).json({
    success: true,
    room,
  });
});

//Get all the Rooms
exports.getAllRooms = catchAsyncErrors(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({ success: true, rooms });
});

//Single Rooms details

exports.getRoomDetails = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    return next(new ErrorHandler("Room not founded", 404));
  }

  res.status(200).json({
    success: false,
    room,
  });
});

//Update Rooms

exports.updateRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.params.id);

  if (!room) {
    if (!room) {
      return next(new ErrorHandler("Room not founded", 404));
    }
  }

  room = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

//Delete Rooms

exports.deleteRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    if (!room) {
      return next(new ErrorHandler("Room not founded", 404));
    }
  }

  await room.deleteOne();

  res.status(200).json({
    success: false,
    message: "Room deleted sucesslly",
  });
});
