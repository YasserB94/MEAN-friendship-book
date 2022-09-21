//Root File of Backend Express App

//imports from node modules
import dotenv from 'dotenv';
import express from 'express';


//My imports
import MasterRouter from './routers/MasterRouter';
import ErrorHandler from './models/ErrorHandler';
// Load env variables
dotenv.config({
	path :'.env'
});
//Create a Server class that contains everything our server needs
class Server {
	public app = express();
	public router = MasterRouter;
  }
//Initialize the server.
const server = new Server();
//Routing all traffic to /api towards our master router
server.app.use('/api', server.router);
//Add Errorhandler MiddleWare - For now I will use the global express import to get the routing methods from express
server.app.use((err: ErrorHandler, req: express.Request, res: express.Response, next: express.NextFunction) => {
	res.status(err.statusCode || 500).json({
	  status: 'error',
	  statusCode: err.statusCode,
	  message: err.message
	});
  });
//Create a function that makes our server listen to http requests
//The magic number '5000' is a fallback in case of missing .env
const listen = (port = process.env.APP_PORT||5000):void=>{
	server.app.listen(port,():void =>{
		//This is a callback function executed when server boots up.
		console.log(`FriendShip-Book Express App is listening on port ${port}`)
		console.log(`127.0.0.1:${port}`)
		//Let's tell users if their .env port is not being used
		if(port===5000){
			console.warn(`EXPRESS: Currently using fallback port 5000. Please check if your .env file is properly loading!`)
		}
	})
}
//Run our 
listen();