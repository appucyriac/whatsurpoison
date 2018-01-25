import Home from 'Home';
import Login from 'Login';

export default function addRoutes(router) {
  router.get('/', (req, res, next) => {
    res.locals.component = Home;
    res.locals.initialState = { name: 'ynon' };
    next();
  });

  router.get('/login', (req, res, next) => {
    res.locals.component = Login;
    next();
  });
}