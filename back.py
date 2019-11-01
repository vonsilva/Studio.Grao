from flask import Flask, render_template
grao = Flask(__name__)

@grao.route("/")
def pagina_inicial():
    return render_template("index.html")

grao.run()
