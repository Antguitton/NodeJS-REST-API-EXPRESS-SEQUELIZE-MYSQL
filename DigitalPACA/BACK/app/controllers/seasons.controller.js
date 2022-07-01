const db = require("../models");
const Season = db.seasons;
const Op = db.Sequelize.Op;
/**
* @description Create and save a new season
* @param req
* @param res
*/
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!!"
        });
        return;
    }
    // Create a season
    const season = {
        name: req.body.name,
        season_number: req.body.season_number,
        seriesId: req.body.seriesId
    };
    // Save season in the database
    Season.create(season)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Season."
            });
        });
};
/**
* @description Retrieve all seasons from the database
* @param req
* @param res
*/
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Season.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Seasons."
            });
        });
};
/**
* @description Find a single season with an id
* @param req
* @param res
*/
exports.findOne = (req, res) => {
    const id = req.params.id;
    Season.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Season with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Season with id=" + id
            });
        });
};
/**
* @description Update a season by the id in the request
* @param req
* @param res
*/
exports.update = (req, res) => {
    const id = req.params.id;
    Season.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Season was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Season with id=${id}. Maybe Season was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Season with id=" + id
            });
        });
};
/**
* @description Delete a season with the specified id in the request
* @param req
* @param res
*/
exports.delete = (req, res) => {
    const id = req.params.id;
    Season.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Season was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Season with id=${id}. Maybe Season was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};
/**
* @description Delete all seasons from the database
* @param req
* @param res
*/
exports.deleteAll = (req, res) => {
    Season.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Seasons were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Seasons."
            });
        });
};