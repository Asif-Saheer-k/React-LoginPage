const express = require("express");
const { userdatails,user,deleteUser ,EditUser} = require("../controllers/adminControlls");
const router = express.Router();

router.route("/").get(userdatails);
router.route('/edituser/:userId').get(user)
router.route('/deleteuser').delete(deleteUser)
router.route('/editerUserDetails/:userId').patch(EditUser)
module.exports = router;
