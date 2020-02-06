//<script>
bouncex.tryCatch(function reloadCampaigns(){
	var newCampaigns = false;
	bouncex.creatives = false;
	bouncex.brandStyles = false;
	bouncex.webfonts = false;

	if (bouncex.gbi) {
		bouncex.gbi.stacks = false	}
		var newCookie = {"v":{"logged_in":false,"ever_logged_in":false,"cart_qty":"0","cart_value":0,"cart":false,"bxid_master_control":0,"item_items":"item","is_are":"is","submitted_artists_shops":false,"prev_pdp_id":"9387-mens-men's-t-shirt"},"fvt":1580932330,"vid":1580946470977829,"ao":2,"lp":"https%3A%2F%2Fwww.threadless.com%2Fproduct%2F9387%2Fvaguely_aware_of_social_norms%2Ftab%2Cguys%2Fstyle%2Cmens-premium-tee%23m","as":0,"vpv":2,"d":"d","r":"","cvt":1580946470,"sid":5,"gcr":37,"m":0,"did":"2520994903189572500","lvt":1580946477,"campaigns":{"948541":{"lvt":1580946477,"lavid":1},"990293":{"lvt":1580932124,"lavid":1,"la":1580932124,"fsa":1580932124,"as":1,"ao":1,"wc":1580932125},"1023889":{"lvt":1580941482,"lavid":1,"as":1,"la":1580941482,"fsa":1580941482,"ao":1},"1092031":{"lvt":1580932579,"lavid":1,"la":1580932579,"fsa":1580932121,"as":8,"ao":8},"1092033":{"lvt":1580932579,"lavid":1},"1095874":{"lvt":1580940726,"lavid":1,"la":1580940725,"fsa":1580940725,"as":1,"ao":1}}};	
	var campaignAdded = false;
	for (var campaignId in newCampaigns) {
		if (newCampaigns.hasOwnProperty(campaignId)) {
			// if campaign cookie does not exist
			if (!bouncex.cookie.campaigns) {
				bouncex.cookie.campaigns = {};
			}
			if (!bouncex.cookie.campaigns[campaignId]) {
				campaignAdded = true;
				bouncex.cookie.campaigns[campaignId] = {lvt:bouncex.cookie.lvt, vv:0};
			} else if (newCookie.campaigns[campaignId]) {
				// need to set campaign cookie's activations_sessions to the new cookie as it gets modified in reloadCampaigns
				campaignAdded = true;
				bouncex.cookie.campaigns[campaignId].as = newCookie.campaigns[campaignId].as;
			}
		}
	}
	if (campaignAdded) {
		bouncex.setBounceCookie();
	}
	
	for (var campaignId in bouncex.campaigns) {
		if (bouncex.campaigns.hasOwnProperty(campaignId)) { //copy state vars
			if (newCampaigns[campaignId]) {
				newCampaigns[campaignId].ap = bouncex.campaigns[campaignId].ap;
				newCampaigns[campaignId].repressed = Boolean(bouncex.campaigns[campaignId].repressed);
			}

			if (newCampaigns[campaignId] &&
				bouncex.campaigns[campaignId].ad_visible &&
				newCampaigns[campaignId].html.replace(/fsa=(\d+)&|width=(\d+)&|height=(\d+)&/gi,'') == bouncex.campaigns[campaignId].html.replace(/fsa=(\d+)&|width=(\d+)&|height=(\d+)&/gi,'')) {
								newCampaigns[campaignId] = bouncex.campaigns[campaignId];
			} else if (newCampaigns[campaignId] && bouncex.isGbi2Campaign(campaignId) && bouncex.campaigns[campaignId].gbi.hasBegunAuction) {
								newCampaigns[campaignId] = bouncex.campaigns[campaignId];
			} else {
				bouncex.destroy_ad(campaignId);
			}
		}
	}

	bouncex.campaigns = newCampaigns;
	newCampaigns = {};

	bouncex.debug = false;
		bouncex.setBounceCookie();
	if (bouncex.campaigns) {
		for (var campaignId in bouncex.campaigns) {
			if (bouncex.campaigns[campaignId].ad_visible && typeof bouncex.repressCampaigns === 'function') {
				bouncex.repressCampaigns(campaignId);
			}
		}
		bouncex.loadBounceCss(bouncex.initActivationFuncs);
	}
		bouncex.loadBrandStyles();
	bouncex.loadWebfonts();

	})();
