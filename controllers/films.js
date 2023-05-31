import FilmScheme from "../models/films.js";

/**
 * Get films
 * @param {*} req
 * @param {*} res
 */

export const getItems = async (req, res) => {
  try {
    const data = await FilmScheme.find({});
    res.send({ data });
  } catch (err) {
    res.status(500).send({ message: "Error to get data" });
  }
};

/**
 * Get film
 * @param {*} req
 * @param {*} res
 */

export const getItem = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await FilmScheme.findOne({ _id: id }).exec();
    res.send({ data });
  } catch (error) {
    res.status(500).send({ message: "Film not found" });
  }
};

/**
 * Create film
 * @param {*} req
 * @param {*} res
 */

export const createItem = async (req, res) => {
  try {
    const body = req.body;
    const data = await FilmScheme.create(body);
    res.send({ data });
  } catch (error) {
    res.status(400).send({ message: "Error to create film" });
  }
};

/**
 * Delete film
 * @param {*} req
 * @param {*} res
 */

export const deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    await FilmScheme.findByIdAndDelete(id).exec();
    res.send({ message: "Item deleted successful" });
  } catch (error) {
    res.status(500).send({ message: "Error to delete film" });
  }
};

/**
 * Update film
 * @param {*} req
 * @param {*} res
 */

export const updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updatedFilm = await FilmScheme.findByIdAndUpdate(id, body, {
      new: true,
    }).exec();
    res.send({ updateItem });
  } catch (error) {
    res.status(500).send({ message: "Error to update film" });
  }
};
