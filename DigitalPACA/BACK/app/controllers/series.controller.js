const db = require("../models");
const Serie = db.series;
const Op = db.Sequelize.Op;
const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};
const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: series } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, series, totalPages, currentPage };
};
/**
* @description Create and save a new serie
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
    // Create a serie
    const serie = {
        name: req.body.name,
        in_production: req.body.in_production,
        origin_country: req.body.origin_country,
        original_language: req.body.original_language,
        overview: req.body.overview,
        popularity: req.body.popularity,
        poster_path: req.body.poster_path,
        production_company: req.body.production_company,
        status: req.body.status
    };
    // Save serie in the database
    Serie.create(serie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the serie."
            });
        });
};
/**
* @description Retrieve all series from the database
* @param req
* @param res
*/
exports.findAll = (req, res) => {
    const { page, size, name } = req.query;
    const { limit, offset } = getPagination(page, size);
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Serie.findAndCountAll({ where: condition, limit, offset })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Series."
            });
        });
};
/**
* @description Find a single serie with an id
* @param req
* @param res
*/
exports.findOne = (req, res) => {
    const id = req.params.id;
    Serie.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Serie with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Serie with id=" + id
            });
        });
};
/**
* @description Update a serie by the id in the request
* @param req
* @param res
*/
exports.update = (req, res) => {
    const id = req.params.id;
    Serie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Serie was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update serie with id=${id}. Maybe serie was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Serie with id=" + id
            });
        });
};
/**
* @description Delete a serie with the specified id in the request
* @param req
* @param res
*/
exports.delete = (req, res) => {
    const id = req.params.id;
    Serie.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Serie was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete serie with id=${id}. Maybe serie was not found!`
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
* @description Delete all series from the database
* @param req
* @param res
*/
exports.deleteAll = (req, res) => {
    Serie.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Series were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Series."
            });
        });
};