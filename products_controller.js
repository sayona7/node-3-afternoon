module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance.create_product()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "There is an error."});
        console.log(err)
      } );
    },
    getOne: (rew, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance.read_product()
      .then( product => res.status(200).send( product ) )
      .catch( err => {
        res.status(500).send({errorMessage: "There is an error."});
        console.log(err)
      } );
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
      .then( products => res.status(200).send( products ) )
      .catch( err => {
        res.status(500).send({errorMessage: "There is an error."});
        console.log(err)
      } );
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance.update_product()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "There is an error."});
        console.log(err)
      } );
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance.delete_product()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "There is an error"});
        console.log(err)
      } );
    }
};