const jwt = require("jsonwebtoken");

const isToken = (req, res, next) => {
  const header = req.header("Authorization");
  const [bearer, token] = header.split(" ");

  if (bearer === "Bearer" && typeof token !== "undefined") {
    try {
      let payload = jwt.verify(token, process.env.SECRET_KEY);
      if (req.body.id !== payload._id) {
        throw Error.name;
      } else {
        next();
      }
    } catch (error) {
      res.status(401).json({ massage: "invalid or expired token", error });
    }
  }
};

const autoRole = (Role) => {
  return (req, res, next) => {
    if (req.body.role !== Role) {
      throw Error.name;
    } else {
      next();
    }
  };
};

module.exports = {
  isToken,
  autoRole,
};
