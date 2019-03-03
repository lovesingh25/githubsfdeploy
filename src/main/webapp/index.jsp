<!doctype html>
<html>
<head>
  <title>Deploy to your org</title>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script src="/resources/js/purl.js"></script>
	<link rel="stylesheet" type="text/css" href="/resources/lightningCss/assets/styles/salesforce-lightning-design-system.css">
	
</head>

<script>
var ownerName ='';
var repoName  ='';
var refName  ='';

function githubdeploy()
{	
	var sfdeployurl =
	($('input[name="environment"]:checked').val() == 'production') ?
			'https://coelibrary.herokuapp.com/app/githubdeploy' :
			'https://coelibrary-sandbox.herokuapp.com/app/githubdeploy';
	sfdeployurl+= '/' + ownerName + '/' + repoName + (refName != '' ? '?ref=' + refName : '');
	window.location = sfdeployurl;
}

function load()
{
	// Default from URL
	ownerName = $.url().param('owner');
	repoName = $.url().param('repo');
	refName = $.url().param('ref');


}
</script>

<body onload="load();">
<form style="background-color:DEEP_COVE;" class="slds-card slds-m-around_large" onsubmit="loginToSalesforce();return false;">
<div class="demo-only" style="height: 640px;">
	<section role="dialog" tabindex="-1" aria-labelledby="modal-heading-01" aria-modal="true" aria-describedby="modal-content-id-1" class="slds-modal slds-fade-in-open">
	<div class="slds-modal__container">
	<header class="slds-modal__header slds-clearfix">
			<span class="slds-avatar slds-avatar--large slds-float_left">
					<img src="/resources/img/coe.jpg" alt="CoE" />
				  </span>
	<span> 			  
	<h2 id="modal-heading-01" class="slds-text-heading_medium slds-hyphenate">CoE oneClick Deploy</h2>
</span>
	</header>

	<div class="slds-modal__content slds-p-around_medium slds-clearfix" id="modal-content-id-1">
		<fieldset class="slds-form-element slds-clearfix">
			<div class="slds-form-element__control slds-clearfix">
			<div class="slds-radio_button-group slds-float_left slds-m-horizontal_large">
			<span class="slds-button slds-radio_button">
			<input name="environment" type="radio" id="production" value="production" />
			<label class="slds-radio_button__label" for="production">
			<span class="slds-radio_faux">Production/Developer</span>
			</label>
			</span>
		</div>
		<div class="slds-radio_button-group slds-float_right slds-m-horizontal_large">
			<span class="slds-button slds-radio_button">
			<input name="environment" checked ="true" type="radio" id="sandbox" value="sandbox" />
			<label class="slds-radio_button__label" for="sandbox">
			<span class="slds-radio_faux">Sandbox</span>
			</label>
			</span>
			</div>
			</div>
			</fieldset>
	</div>
	<footer class="slds-modal__footer">
		<input type="submit" id="login" value="Login to Salesforce" class="slds-button slds-button--neutral" onclick="githubdeploy();return false;"/>
	</footer>
	</div>
	</section>
	<div class="slds-backdrop slds-backdrop_open"></div>
	</div>
</form>
</body>
</html>