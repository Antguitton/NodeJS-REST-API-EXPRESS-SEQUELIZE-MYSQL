/**
* @description Test user private content with JWT auth
* @param req
* @param res
*/
exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};