// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
	theme:{
		dark: "true",
		themes:	{
			dark: {
				primary: "#363636",
				secondary: "#6d4c41",
				accent: "#101010"
			}
		}
	}

}

export default new Vuetify(opts)