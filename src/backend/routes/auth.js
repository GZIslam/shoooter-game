export const Auth = (app, dbo) => {
    app.post('/register', async function(req, res) {
        const db = dbo.getDb();
        let user = await db.collection("users").findOne({"login": req.body.login});
        if(!user?.login) {
            user = await db.collection("users").insertOne(req.body);
            if(!user?.insertedId) {
                res.status(400).send("error");
            } else {
                res.status(200).send({user});
            }
        } else {
            res.status(400).send(`user with login ${req.body.login} already exist`);
        }
    });

    app.post('/login', async function(req, res) {
        const db = dbo.getDb();
        const user = await db.collection("users").findOne({login: req.body.login});
        if(!user?.login) {
            res.status(404).send("not found")
        } else {
            if(req.body.password === user.password)
                res.status(200).send(user);
            else
                res.status(403).send("Forbitten");
        }
    });
};