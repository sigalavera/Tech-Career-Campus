const jwt = require("jsonwebtoken");

const isToken = (req, res, next) => {
  const header = req.header("Authorization");
  console.log(header);
  const [bearer, token] = header.split(" ");

  if (bearer === "Bearer" && typeof token !== "undefined") {
    try {
      let payload = jwt.verify(token, process.env.SECRET_KEY);
      res.status(200).json({ massage: "get the token", date: payload });
    } catch (error) {
      res.status(401).json({ massage: "invalid or expired token", error });
    }
  } else {
    res.status(401).json({ massage: "invalid token", error });
  }
next();
};

const autoRole = (Role) => {
  return (req, res, next) => {
    if (req.body.role !== Role) res.status(401);
    return res.sand("not allowed");
  };
  next();
};

module.exports = {
  isToken,
  autoRole,
};
