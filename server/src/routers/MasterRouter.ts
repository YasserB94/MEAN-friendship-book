import { Router } from 'express';
import TestARouter from './TestA/TestARouter';
import TestBRouter from './TestB/TestBRouter';

class MasterRouter {
  private _router = Router();
  private _subrouterA = TestARouter;
  private _subrouterB = TestBRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/testA', this._subrouterA);
    this._router.use('/testB', this._subrouterB);
  }
}

export = new MasterRouter().router;