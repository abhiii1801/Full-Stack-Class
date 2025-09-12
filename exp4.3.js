const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// ================================
// Seat structure: { id, status, lockedBy, lockExpiresAt }
// status = "available" | "locked" | "booked"
// ================================
const TOTAL_SEATS = 10;
let seats = [];
for (let i = 1; i <= TOTAL_SEATS; i++) {
  seats.push({ id: i, status: "available", lockedBy: null, lockExpiresAt: null });
}

// Helper: release expired locks
function releaseExpiredLocks() {
  const now = Date.now();
  seats.forEach((seat) => {
    if (seat.status === "locked" && seat.lockExpiresAt <= now) {
      seat.status = "available";
      seat.lockedBy = null;
      seat.lockExpiresAt = null;
    }
  });
}

// Middleware to auto-release locks before each request
app.use((req, res, next) => {
  releaseExpiredLocks();
  next();
});

// ================================
// Routes
// ================================

// Get all seats
app.get("/seats", (req, res) => {
  res.json(seats);
});

// Lock a seat
app.post("/seats/:id/lock", (req, res) => {
  const seatId = parseInt(req.params.id);
  const { user } = req.body;

  if (!user) return res.status(400).json({ error: "User is required to lock seat." });

  const seat = seats.find((s) => s.id === seatId);
  if (!seat) return res.status(404).json({ error: "Seat not found." });

  if (seat.status === "booked") {
    return res.status(400).json({ error: "Seat already booked." });
  }

  if (seat.status === "locked") {
    if (seat.lockedBy === user) {
      return res.json({ message: "Seat already locked by you.", seat });
    }
    return res.status(400).json({ error: "Seat already locked by another user." });
  }

  // Lock seat
  seat.status = "locked";
  seat.lockedBy = user;
  seat.lockExpiresAt = Date.now() + 60 * 1000; // 1 minute
  res.json({ message: "Seat locked successfully for 1 minute.", seat });
});

// Confirm booking
app.post("/seats/:id/confirm", (req, res) => {
  const seatId = parseInt(req.params.id);
  const { user } = req.body;

  if (!user) return res.status(400).json({ error: "User is required to confirm booking." });

  const seat = seats.find((s) => s.id === seatId);
  if (!seat) return res.status(404).json({ error: "Seat not found." });

  if (seat.status === "booked") {
    return res.status(400).json({ error: "Seat already booked." });
  }

  if (seat.status !== "locked" || seat.lockedBy !== user) {
    return res.status(400).json({ error: "Seat must be locked by you before confirming." });
  }

  // Confirm booking
  seat.status = "booked";
  seat.lockedBy = null;
  seat.lockExpiresAt = null;
  res.json({ message: "Booking confirmed successfully.", seat });
});

// ================================
// Start server
// ================================
app.listen(PORT, () => {
  console.log(`🎟️ Ticket booking API running at http://localhost:${PORT}`);
});
