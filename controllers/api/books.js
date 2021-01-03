const mongoose = require("mongoose");
const Books = require("../../models/books");
mongoose.set("useFindAndModify", false);

const getBooksHandler = async (req, res) => {
  const response = async () => Books.find({});
  const booksData = await response();
  try { res.status(200).json(booksData || "stub books data")} 
  catch (err) { res.status(500).send(err)};
} 
const getBookHandler = async(req,res) => {
  const { id } = req.params;
  const response = async (id) => Books.find({id:id});
  const bookData = await response();
  try { res.status(200).json(bookData || "stub book data")}
  catch (err) { res.status(500).send(err)};
};
const postBookHandler = async(req,res) => {
  const {body} = req;
  const response = async(body) => Books.create(body);
  try { res.status(200).json(await reponse() || "stub book data")}
  catch (err) { res.status(500).send(err)};
};
const putBookHandler = async(req,res) => {
  const {body} = req;
  const response = async(body) => Books.findOneAndUpdate({
    {id:body.id},
    {$set:{...body}},
    {new:true}
  });
  try { res.status(200).json(await response() || "stub book data")}
  catch (err) { res.status(500).send(err)};
};
const deleteBookHandler = async(req,res) => {
  const reponse = async () => 
};

const postAgentsHandler = async (req, res) => {
  console.log("request body in post verb from: ", req.body);
  const agentsEntity = 
    req.body 
  //  || {stubName:"ownerEntityFromPostOwnerHandlerStub"};
  const postAgentsData = 
    await postAgents(agentsEntity, agentsRepository)
  try {
    res.status(200).json(
      postAgentsData 
  //    || {stubName: "postOwnersDataFromOwnerHandlerStub"}
    )
  } catch (err) {
    res.status(500).send(err)
  }
} 
const putAgentsHandler = async (req, res) => {
  console.log("putAgentsHandler req.body", req.body);
  const newVersionValue = Date.now();
  const agentsEntity = {...req.body, }
  const putAgentsData = 
    await putAgents(agentsEntity, agentsRepository);
  try {
    res.status(200).json(
      putAgentsData
      || {message: "Hello from putAgentsHandler"}
    )
  } catch (err) {
    res.status(500).send(err)
  }
} 
const deleteAgentsHandler = async (req, res) => {
  //console.log("req.body.id: ", req.body.id);
  console.log("req.body in deleteAgentsHandler: ", req.body);

 // console.log("req: ", req);
  const agentsId = req.body.id || 0;
  console.log("agentsId for delete: ", agentsId);
  const deleteAgentsData = await deleteAgents(
    agentsId, agentsRepository); 
  try {
    res.status(200).json(
      {message: agentsId}
      || {message: "seem have to show your the delete stub"}
    )
  } catch (err) {
    res.status(500).send(err);
  }
} 
*/
module.exports = {
 // getBooksHandler,
  getBookHandler,
 // postBookHandler,
 // putBookHandler,
 // deleteBookHandler,
}
