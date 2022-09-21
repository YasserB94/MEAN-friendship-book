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
	private app = express();
	private router = MasterRouter;
	private errorHandler = ErrorHandler;
	public init(){
		//Add MasterRouter
		this.app.use('/api',this.router)
		//Integrate Errorhandler model
		this.initializeErrorhandler();
		//Make server Listen
		this.listen();
	}
	private initializeErrorhandler(){
		this.app.use((err: ErrorHandler, req: express.Request, res: express.Response, next: express.NextFunction) => {
			res.status(err.statusCode || 500).json({
			  status: 'error',
			  statusCode: err.statusCode,
			  message: err.message
			});
		  })
	}
	private listen() {
		const port =  process.env.APP_PORT || 5000;
		this.app.listen(port,():void =>{
			console.log(`Server Running on: ${port}`)
			console.log(`127.0.0.1:${port}`)
			if(port===5000){
				console.warn(`5000 is the fallback port for the server, your environment variables might not be configured.`)
				console.log(`To set the server port use: "APP_PORT=XXXX"`)
			}
		})
	}
	
  }
//Initialize the server.
const server = new Server();
server.init();