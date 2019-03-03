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

<body style="margin:10px" onload="load();">
<form onsubmit="loginToSalesforce();return false;">

<div class="demo-only" style="height: 640px;">
	<section role="dialog" tabindex="-1" aria-labelledby="modal-heading-01" aria-modal="true" aria-describedby="modal-content-id-1" class="slds-modal slds-fade-in-open">
	<div class="slds-modal__container">
	<header class="slds-modal__header">
	<h2 id="modal-heading-01" class="slds-text-heading_medium slds-hyphenate">Deploy to:</h2>
	</header>
	<div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
		<label class="slds-radio">
			<input type="radio" name="environment" checked="true" value="production">
			<span class="slds-radio--faux"></span>
			<span class="slds-form-element__label">Production / Developer</span>
		</label>
		<label class="slds-radio">
			<input type="radio" name="environment" checked="false" value="sandbox">
			<span class="slds-radio--faux"></span>
			<span class="slds-form-element__label">Sandbox</span>
		</label>
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