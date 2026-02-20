// server/utils/generateToken.js
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  // Signs a token with the user's ID and your secret, valid for 30 days
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;