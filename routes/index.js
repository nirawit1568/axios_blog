const express = require('express');
const Topic = require('../models/topic.js');

const router = express.Router();

router.get('/',(req,res) => {
    Topic.find((err, topic) => {
        if (err) {
            return handleError(err)
        }
        if (topic) {
            res.render('home', {
                result:topic
            })
        }
    })
})

router.get('/add',(req,res) => {
    res.render('add')
})

router.post('/add',(req,res) => {

    const newTopic = new Topic({
        name: req.body.name,
        topicname:req.body.topicname,
        message: req.body.content
    })
    newTopic.save()
    res.render('add')

})

module.exports = router