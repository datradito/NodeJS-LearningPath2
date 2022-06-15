// funcion para pagina no encontrada 404
exports.get404 = (req, res, next) => {
  res.status(404).render('errors/404', { pageTitle: 'No encontrada', path: '/404' });
};
