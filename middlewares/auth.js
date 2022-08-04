const isAuthorized = (req, res, next) => {
    let isAuthorized = false;
    if (isAuthorized) {
        console.log("Access Successful!");
        next();
    }
    else {
        res.status(403).send({"message": "Access Denied!"});
    }
}

module.exports = isAuthorized;