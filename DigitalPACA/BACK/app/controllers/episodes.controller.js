const db = require("../models");
const Episode = db.episodes;
const Op = db.Sequelize.Op;
/**
* @description Create and save a new episode
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
    // Create a episode
    const episode = {
        name: req.body.name,
        episode_number: req.body.episode_number,
        runtime: req.body.runtime,
        seasonId: req.body.seasonId
    };
    // Save episode in the database
    Episode.create(episode)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Episode."
            });
        });
};
/**
* @description Retrieve all episodes from the database (optionnal: search with keyword)
* @param req
* @param res
*/
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Episode.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Episodes."
            });
        });
};
/**
* @description Find a single episode with an id
* @param req
* @param res
*/
exports.findOne = (req, res) => {
    const id = req.params.id;
    Episode.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Episode with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Episode with id=" + id
            });
        });
};
/**
* @description Update an episode by the id in the request
* @param req
* @param res
*/
exports.update = (req, res) => {
    const id = req.params.id;
    Episode.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Episode was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Episode with id=${id}. Maybe Episode was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Episode with id=" + id
            });
        });
};
/**
* @description Delete an episode with the specified id in the request
* @param req
* @param res
*/
exports.delete = (req, res) => {
    const id = req.params.id;
    Episode.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Episode was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Episode with id=${id}. Maybe Episode was not found!`
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
* @description Delete all episodes from the database
* @param req
* @param res
*/
exports.deleteAll = (req, res) => {
    Episode.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Episodes were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Episodes."
            });
        });
};