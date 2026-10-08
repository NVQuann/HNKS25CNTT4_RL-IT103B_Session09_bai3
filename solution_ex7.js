const hotelRooms = [
  {
    roomId: "P101",
    roomType: "Standard",
    pricePerNight: 1000000,
    status: "VACANT",
  },
  {
    roomId: "P102",
    roomType: "Deluxe Ocean",
    pricePerNight: 2000000,
    status: "OCCUPIED",
  },
  {
    roomId: "P103",
    roomType: "Standard",
    pricePerNight: 1000000,
    status: "MAINTENANCE",
  },
];

console.log("=== DANH SÁCH PHÒNG BAN ĐẦU ===");
console.table(hotelRooms);

const newRoom = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT",
};
hotelRooms.push(newRoom);

console.log("=== SAU KHI THÊM PHÒNG P104 ===");
console.table(hotelRooms);

let indexP101 = -1;
for (let i = 0; i < hotelRooms.length; i++) {
  if (hotelRooms[i].roomId === "P101") {
    indexP101 = i;
    break;
  }
}

if (indexP101 !== -1) {
  hotelRooms[indexP101].status = "OCCUPIED";
}

console.log("=== SAU KHI CẬP NHẬT TRẠNG THÁI P101 (CHECK-IN) ===");
console.table(hotelRooms);

let indexP103 = -1;
for (let i = 0; i < hotelRooms.length; i++) {
  if (hotelRooms[i].roomId === "P103") {
    indexP103 = i;
    break;
  }
}

if (indexP103 !== -1) {
  hotelRooms.splice(indexP103, 1);
}

console.log("=== SAU KHI XÓA PHÒNG P103 NGỪNG KINH DOANH ===");
console.table(hotelRooms);
