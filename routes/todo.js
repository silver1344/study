const express = require('express');
const Todo=require('../schemas/todo');

const router=express.Router();

router.route('/')
    .get(async (req,res,next)=> {
        try {
            const todo=await Todo.find({});
            res.json(todo);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req,res,next) => {
        try {
            const todo = await Todo.create({
                check: req.body.check,
                txt: req.body.txt,
                createAt: req.body.createdAt,
            });
            console.log(todo);
            res.status(201).json(todo);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

router.route('/:id')
    .delete(async (req, res, next) => {
      try {
        const result = await Todo.deleteOne({ _id: req.params.id });
        res.json(result);
      } catch (err) {
        console.error(err);
        next(err);
      }
    });

module.exports = router;
