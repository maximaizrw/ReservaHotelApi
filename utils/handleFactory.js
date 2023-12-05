const handleHttpError = require("./handleErrors");

const getItems = (Model) => async (req, res) => {
  try {
    const items = await Model.find();
    res.status(200).json({
      status: "success",
      results: items.length,
      data: {
        items,
      },
    });
  } catch (err) {
    handleHttpError(res, "ERROR_GET_ITEMS", 404);
  }
};

const getItemById = (Model) => async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        item,
      },
    });
  } catch (err) {
    handleHttpError(res, "ERROR_GET_ITEM_BY_ID", 404);
  }
};

const createItem = (Model) => async (req, res) => {
  try {
    const newItem = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        item: newItem,
      },
    });
  } catch (err) {
    handleHttpError(res, "ERROR_CREATE_ITEM", 400);
  }
};

const deleteItem = (Model) => async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    handleHttpError(res, "ERROR_DELETE_ITEM", 404);
  }
};

const updateItem = (Model) => async (req, res) => {};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
