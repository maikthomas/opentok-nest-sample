// import { Test } from '@nestjs/testing';
// import { OpentokController } from './opentok.controller';
// import { OpentokService } from './opentok.service';

// describe('OpentokController', () => {
//   let OpentokController: OpentokController;
//   let OpentokService: OpentokService;

//   beforeEach(async () => {
//     const module = await Test.createTestingModule({
//       controllers: [OpentokController],
//       components: [OpentokService],
//     }).compile();

//     OpentokService = module.get<OpentokService>(OpentokService);
//     OpentokController = module.get<OpentokController>(OpentokController);
//   });

//   describe('createSession', () => {
//     it('should return an opentok session', async () => {
//       const result = ['test'];
//       jest.spyOn(OpentokService, 'createSession').mockImplementation(() => result);

//       expect(await OpentokController.createSession()).toBe(result);
//     });
//   });
// });
