router.post('/addassignment', function(req, res, next) {
    teacher.create(req.body,function(err,data){
        if(err) throw err
        res.json(data);
    });
    //res.send("Adding Assignment");
  });