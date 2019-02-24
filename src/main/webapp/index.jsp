<!doctype html>
<html>
<head>
  <title>Deploy to your org</title>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script src="/resources/js/purl.js"></script>
	<link rel="stylesheet" type="text/css" href="/resources/assets/styles/salesforce-lightning-design-system.css">
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

<div class="slds-page-header" role="banner">
	<div class="slds-grid">
    	<div class="slds-col slds-has-flexi-truncate">
			<div class="slds-media">
				<div class="slds-media__figure">
				  <svg aria-hidden="true" class="slds-icon slds-icon-action-upload slds-icon--large slds-p-around--x-small">
				    <use xlink:href="/resources/assets/icons/action-sprite/svg/symbols.svg#upload"></use>
				  </svg>
				</div>
			</div>			
		</div>
	   	<div class="slds-col slds-no-flex slds-align-bottom">
	      <div class="slds-button-group" role="group">
	      	<input type="submit" id="login" value="Login to Salesforce" class="slds-button slds-button--neutral" onclick="githubdeploy();return false;"/>
	      </div>
	    </div>				
	</div>
</div>
&nbsp;
<div class="slds-form--horizontal">
<div class="slds-form-element">
	<legend class="form-element__legend slds-form-element__label">Deploy to:</legend>
	<div class="slds-form-element__control">
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
</div>
</div>

</form>

</body>
</html>