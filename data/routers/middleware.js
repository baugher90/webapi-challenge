function IdChecker(req, res, next) {
    if (!req.body.project_id) {
      res.status(400).json({
        message: `There is no project ID for the action`
      });
    } else {
      next();
    }
  }

module.exports = IdChecker;