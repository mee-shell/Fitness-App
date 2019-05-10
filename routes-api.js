const passport = require('passport')

module.exports = function(app){

	// Auth

	app.post('/api/signup', require('./controllers/signup'))
	app.post('/api/login', require('./controllers/login'))
	app.get('/api/logout', require('./controllers/logout'))

	app.get('/google/redirect', passport.authenticate('google'), function(req, res, next) {
		if (req.user) {
			res.redirect('/')
		} else {
			res.redirect('/login')
		}
	})

	app.get('/api/google', passport.authenticate('google', {
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email'
		]
	}))

	// contact

	app.get('/api/contacts', require('./controllers/contacts_read'))
	app.get('/api/contacts/:id', require('./controllers/contact_read'))
	app.post('/api/contacts', require('./controllers/contact_create'))

	// Dashboard

	app.get('/api/dashboards', require('./controllers/dashboards_read'))
	app.post('/api/dashboards', require('./controllers/dashboard_create'))
	app.patch('/api/dashboards/:id', require('./controllers/dashboard_update'))
	app.delete('/api/dashboards/:id', require('./controllers/dashboard_delete'))

	// Training

	app.get('/api/trainings', require('./controllers/trainings_read'))
	app.post('/api/trainings', require('./controllers/training_create'))
	app.patch('/api/trainings/:id', require('./controllers/training_update'))
	app.delete('/api/trainings/:id', require('./controllers/training_delete'))

	// Users: my profile

	app.get('/api/users', require('./controllers/users_read'))
	app.get('/api/users/:id', require('./controllers/user_read'))
	app.post('/api/users', require('./controllers/user_create'))
	app.patch('/api/users/:id', require('./controllers/user_update'))
	app.delete('/api/users/:id', require('./controllers/user_delete'))

	// Patients: user profile

	app.get('/api/patients', require('./controllers/patients_read'))
	app.get('/api/patients/:id', require('./controllers/patient_read'))
	app.post('/api/patients', require('./controllers/patient_create'))
	app.patch('/api/patients/:id', require('./controllers/patient_update'))
	app.delete('/api/patients/:id', require('./controllers/patient_delete'))

	// Search

	app.get('/api/searches', require('./controllers/searches_read'))
	app.get('/api/searches/:id', require('./controllers/search_read'))

	// Help

	app.get('/api/help', require('./controllers/helps_read'))
	app.get('/api/help/:id', require('./controllers/help_read'))

}
