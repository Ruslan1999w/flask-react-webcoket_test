from views import app

app.config.from_object('configurations.DevelopmentConfig')
app.run()
