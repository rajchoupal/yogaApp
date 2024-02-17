const router = express.Router();
const userController = require('../controllers/userController');

// Route to register a new user
router.post('/register', userController.registerUser);

// Route to login a user
router.post('/login', userController.loginUser);

// Route to get user details
router.get('/profile', userController.getUserDetails);



module.exports = router;