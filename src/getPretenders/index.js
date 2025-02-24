import pretenders from '../data/pretenders.json';
import costs from '../data/pretender_costs.json';

function getPretenders() {
    
    Object.keys(costs).forEach(pret_id => {
	if ( costs[pret_id].pointcost == null ) {
	    delete pretenders[pret_id];
	}
	else if (pretenders[pret_id]) {
	    pretenders[pret_id]['pointcost'] = costs[pret_id]['pointcost'];
	}
    });
    return pretenders;
}

export default getPretenders;