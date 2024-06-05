import businessService from "../services/businessService.js";
import Business from "../model/businessModel.js";
const getAllDetails = async (req, res) => {
  try {
    const business = await businessService.getAllDetails();
    res.json(business);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const createBusinessDetails = async (req, res) => {
  try {
    const business = await Business.create(req.body);
    res.status(201).send(business);
    return business;
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const updateBusiness = async (req, res) => {
  try {
    const id = req.params.id;
    const business = await businessService.updateBusiness(id, req.body);
    if (!business) res.status(404).send("business not found");
    res.json(business);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteBusiness = async (req, res) => {
  try {
    const id = req.params.id;
    const business = await Business.findByIdAndDelete(id);
    if (!business) res.status(404).send("business not found");
    res.send(`The deleted business id is:${id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export default {
  getAllDetails,
  createBusinessDetails,
  updateBusiness,
  deleteBusiness,
};
