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

<div class="demo-only" style="height: 640px;">
	<section role="dialog" tabindex="-1" aria-labelledby="modal-heading-01" aria-modal="true" aria-describedby="modal-content-id-1" class="slds-modal slds-fade-in-open">
	<div class="slds-modal__container">
	<header class="slds-modal__header">
	<button class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" title="Close">
	<svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
	<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close" />
	</svg>
	<span class="slds-assistive-text">Close</span>
	</button>
	<h2 id="modal-heading-01" class="slds-text-heading_medium slds-hyphenate">Modal Header</h2>
	</header>
	<div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
	<p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
	quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
	<p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
	ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
	</div>
	<footer class="slds-modal__footer">
	<button class="slds-button slds-button_neutral">Cancel</button>
	<button class="slds-button slds-button_brand">Save</button>
	</footer>
	</div>
	</section>
	<div class="slds-backdrop slds-backdrop_open"></div>
	</div>


</form>

</body>
</html>