import { Router } from 'express';
import contatoRoutes from '../routes/contato.js';
import helloWorldRoutes from '../routes/helloWorld.routes.js';

class ApiRoutes {
	constructor() {
		// eslint-disable-next-line new-cap
		this.router = Router();
		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.use('/helloWorld', helloWorldRoutes);
		this.router.use('/contato', contatoRoutes);
	}

	getRouter() {
		return this.router;
	}
}

export default new ApiRoutes().getRouter();
