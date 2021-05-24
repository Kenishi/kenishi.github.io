function oauthClient() {
	const config = {
		providerID: "glimesh_follower_alert",
		client_id: "8d7b7d340da3182af3e356ca46938883474ce08f1172d6569df3fb44f56d5dd3",
		redirect_uri: "https://kenishi.github.io/glimeshfolloweralert",
		authorization: "https://glimesh.tv/oauth/authorize",
		scopes: { request: ["public"] }
	};

	return new jso.JSO(config);
}

async function onPageLoad() {
	// Handle potential redirect arrivals w/ credentials
	oauthClient().callback();

	// Get tokens, including triggering an auth handshake if needed
	const token = await oauthClient().getToken();

	// Subscribe for follower information
	subscribeForFollowerAlerts(token);
}

function subscribeForFollowerAlerts(token) {
	console.log(token);
}

window.onload = onPageLoad;