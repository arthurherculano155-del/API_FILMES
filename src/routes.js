import filme from './Controller/filmeController.js';
import health from './Controller/healthController.js'

export default function addRoutes(api){
    api.use(filme);
    api.use(health);
}