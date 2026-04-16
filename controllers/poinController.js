exports.getPointsByUserId = (req, res) => {
    const userId = req.params.userId;
    
    res.status(200).json({
        userId: userId,
        totalPoints: 1000
    });
};

exports.addPoints = (req, res) => {
    const { userId, points } = req.body;
    // Logika tambah poin di sini
    res.status(201).json({
        message: `Berhasil menambah ${points} poin ke user ${userId}`
    });
};