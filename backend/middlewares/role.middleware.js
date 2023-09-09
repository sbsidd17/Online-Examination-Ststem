const isStudent = (req, res, next) => {
  const role = req.user.role;

  if (role !== "Student") {
    return res.status(401).json({
      success: "false",
      msg: "Not Aurthorised",
    });
  }
  next();
};

const isInstructor = (req, res, next) => {
  const role = req.user.role;

  if (role !== "Instructor") {
    return res.status(401).json({
      success: "false",
      msg: "Not Aurthorised",
    });
  }
  next();
};

const isAdmin = (req, res, next) => {
  const role = req.user.role;

  if (role !== "Admin") {
    return res.status(401).json({
      success: "false",
      msg: "Not Aurthorised",
    });
  }
  next();
};

export { isStudent, isInstructor, isAdmin };