import Student from "../models/studentSchema.js";

const home = async (req, res) => {
  try {
    const records = await Student.find();
    res.render("index", { records });
  } catch (err) {
    console.log(err.message);
  }
};
const student_new_record = async (req, res) => {
  try {
    res.render("student_new_record");
  } catch (err) {
    console.log(err.message);
  }
};

const addNewRecord = async (req, res) => {
  try {
    const record = await Student({
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
      contact: req.body.contact,
    });
    if (record) {
      await record.save();
      console.log("new record added!");
      res.redirect("/");
    } else {
      console.log("Not added!");
      res.redirect("/new_record");
    }
  } catch (e) {
    console.log(e.message);
  }
};

const edit_student_record = async (req, res) => {
  try {
    const record = await Student.findById(req.params.id);
    res.render("update_record", { record });
    // res.redirect('/');
  } catch (e) {
    console.log(e.message);
  }
};

const update_record = async (req, res) => {
  try {
     const updated_student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
      console.log(updated_student);
     res.redirect("/");
  
  } catch (e) {
    console.log(e.message);
  }
};

const delete_student = async(req,res)=>{
    try{
        const delete_student = await Student.findByIdAndDelete(req.params.id);
        res.redirect('/')
    }
    catch(e){
        console.log(e)
    }
}

export {
  home,
  student_new_record,
  addNewRecord,
  edit_student_record,
  update_record,
  delete_student
};
