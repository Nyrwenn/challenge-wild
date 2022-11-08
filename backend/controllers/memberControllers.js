const Member = require("../models/memberModel");

exports.createMember = async (req, res, next) => {
  try {
    const member = req.body;

    const memberCreated = await Member.create({
      ...member,
    });

    memberCreated.save();
    res.status(201).json({ message: "Member created !" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

exports.getAllMembers = async (req, res, next) => {
  await Member.find()
    .then((members) => res.status(200).json(members))
    .catch((error) => res.status(400).json({ error }));
};
