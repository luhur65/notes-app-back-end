const Hapi = require('@hapi/hapi');
const Routes = require('./routes.js');

const init = async _ => {

  const server = Hapi.server({
    port:5000,
    host:'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });


  // routing 
  server.route(Routes);

  // start 
  await server.start();
  console.log(`Server running at ${server.info.uri}`);


};


init();