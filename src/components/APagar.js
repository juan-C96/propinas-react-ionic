
function APagar (total,comensales,propina){
	
	let p_total = total + (((propina / 100) / 100) * total);
	let p_comensales = p_total / comensales;

	return p_comensales;

}

export default APagar