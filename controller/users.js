import { user_Model } from "../models/user.model.js";


export const getAllUsers = async (req, res) => {
  const users = await user_Model.find({});

  console.log(req.query);

  res.json({
    success: true,
    users: users,
  });
};

export const newUsers =  async (req, res) => {
    const { username, email } = req.body;
  
    await user_Model.create({
      username: username,
      email: email,
    });
  
    res.status(201).cookie("check", true).json({
      success: true,
      registered: true,
    });
  }

  export const dynamicRouting = async (req, res) => {
    const { id } = req.params;
    const user = await user_Model.findById(id);
  
    res.json({
      success: true,
      user: user,
    });
  };
  export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await user_Model.findById(id);
  
    res.json({
      success: true,
      user:"Update User",
    });
  };
  export const deleteUser= async (req, res) => {
    const { id } = req.params;
    const user = await user_Model.findById(id);
  
    res.json({
      success: true,
      user: "Delete User",
    });
  };
