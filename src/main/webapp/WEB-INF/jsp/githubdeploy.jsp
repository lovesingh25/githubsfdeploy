<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
  <title>Deploy to your org</title>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="/resources/lightningCss/assets/styles/salesforce-lightning-design-system.css">
	
</head>
<body>
<c:if test="${error != null}">
	<div class="slds-notify_container">
		<div class="slds-notify slds-notify--alert slds-theme--alert-texture" role="alert">
			<h2>${error}</h2>
		</div>
	</div>
</c:if>
&nbsp;

<article class="slds-card slds-m-around_large">
	<div class="slds-card__header slds-grid">
	<header class="slds-media slds-media_center slds-has-flexi-truncate">
	<div class="slds-media__figure">
	<span class="slds-icon_container slds-icon-standard-account" title="account">
	<svg class="slds-icon slds-icon_small" aria-hidden="true">
	<use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
	</svg>
	<span class="slds-assistive-text">To Salesforce Org</span>
	</span>
	</div>
	<div class="slds-media__body">
	<h2 class="slds-card__header-title">
	<span>To Salesforce Org</span>
	</a>
	</h2>
	</div>
	<div class="slds-no-flex">
		<c:if test="${githubcontents != null}">
				<button id="deploy" class="slds-button slds-button--neutral" onclick="GitHubDeploy.deploy();">Deploy</button>
		</c:if>		
	</div>
	</header>
	</div>
	<div class="slds-card__body slds-card__body_inner">
			<ul>
				<li class="slds-tile slds-hint-parent">
					<div class="slds-tile__detail">
							<dl class="slds-dl--horizontal slds-text-body--small">
								<dt class="slds-dl--horizontal__label">
									<p class="slds-truncate">Organization Name:</p>
								</dt>
								<dd class="slds-dl--horizontal__detail slds-tile__meta">
									<p class="slds-truncate">
										<c:out value="${userContext.getOrganizationName()}" />
									</p>
								</dd>
								<dt class="slds-dl--horizontal__label">
									<p class="slds-truncate">User Name:</p>
								</dt>
								<dd class="slds-dl--horizontal__detail slds-tile__meta">
									<p class="slds-truncate">
										<c:out value="${userContext.getUserName()}" />
									</p>
								</dd>
							</dl>
						</div>
					</li>
				</ul>
	</div>
	<footer class="slds-card__footer">
			<c:if test="${githubcontents != null}">
					<pre id="deploystatus" style="display: none"></pre>
					<div id="githubcontents"></div>
				</c:if>
	</footer>
	</article>

<c:if test="${githubcontents != null}">
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script>

		var GitHubDeploy = {

			// Contents of the GitHub repository
			contents: ${githubcontents},

			// Async result from Salesforce Metadata API
			asyncResult : null,

			// Client timer Id used to poll Salesforce Metadata API
			intervalId : null,

			// Render GitHub repository contents
			render: function(container) {
					if(container.repositoryItem!=null)
						$('#githubcontents').append(
							'<div><a target="_new" href="${repo.getHtmlUrl()}/blob/${ref}/' +
								container.repositoryItem.path + '">' + container.repositoryItem.path + '</a></div>');
					for(fileIdx in container.repositoryItems)
						if(container.repositoryItems[fileIdx].repositoryItem.type == 'dir')
							GitHubDeploy.render(container.repositoryItems[fileIdx]);
						else
							$('#githubcontents').append(
								'<div><a target="_new" href="${repo.getHtmlUrl()}/blob/${ref}/' +
									container.repositoryItems[fileIdx].repositoryItem.path + '">' +
									container.repositoryItems[fileIdx].repositoryItem.path + '</a></div>');
				},

			// Deploy
			deploy: function() {
					$('#deploy').attr('disabled', 'disabled');
					$('#deploystatus').empty();
					$('#deploystatus').show();
					$('#deploystatus').append('Deployment Started');
		            $.ajax({
		                type: 'POST',
		                processData : false,
		                data : JSON.stringify(GitHubDeploy.contents),
		                contentType : "application/json; charset=utf-8",
		                dataType : "json",
		                success: function(data, textStatus, jqXHR) {
		                    GitHubDeploy.asyncResult = data;
		                    GitHubDeploy.renderAsync();
		                    if(GitHubDeploy.asyncResult.state == 'Completed')
		                    	GitHubDeploy.checkDeploy();
		                    else
		                    	GitHubDeploy.intervalId = window.setInterval(GitHubDeploy.checkStatus, 2000);
		                },
		                error: function(jqXHR, textStatus, errorThrown) {
		                    alert('Failed ' + textStatus + errorThrown);
		                }
		            });
				},

			// Render Async
			renderAsync: function() {
					$('#deploystatus').append(
						'<div>Status: '+
							GitHubDeploy.asyncResult.state + ' ' +
							(GitHubDeploy.asyncResult.message != null ? GitHubDeploy.asyncResult.message : '') +
						'</div>');
				},

			// Check Status
			checkStatus: function() {
		            $.ajax({
		                type: 'GET',
		                url: window.pathname + '/checkstatus/' + GitHubDeploy.asyncResult.id,
		                contentType : 'application/json; charset=utf-8',
		                dataType : 'json',
		                success: function(data, textStatus, jqXHR) {
		                    GitHubDeploy.asyncResult = data;
		                    GitHubDeploy.renderAsync();
		                    if(GitHubDeploy.asyncResult.state == 'Completed')
		                    {
		                    	window.clearInterval(GitHubDeploy.intervalId);
		                    	GitHubDeploy.checkDeploy();
		                    }
		                },
		                error: function(jqXHR, textStatus, errorThrown) {
		                	$('#deploystatus').append('<div>Error: ' + textStatus + errorThrown + '</div>');
		                }
		            });
				},

			// Check Deploy
			checkDeploy: function() {
					$('#deploystatus').append('Deployment Complete');
					$('#deploy').attr('disabled', null);
		            $.ajax({
		                type: 'GET',
		                url: window.pathname + '/checkdeploy/' + GitHubDeploy.asyncResult.id,
		                contentType : 'application/json; charset=utf-8',
		                dataType : 'json',
		                success: function(data, textStatus, jqXHR) {
		                	$('#deploystatus').append(data);
		                },
		                error: function(jqXHR, textStatus, errorThrown) {
		                	$('#deploystatus').append('<div>Error: ' + textStatus + errorThrown + '</div>');
		                }
		            });
				}
		}

		// Render files selected to deploy
		GitHubDeploy.render(GitHubDeploy.contents);

	</script>
</c:if>
</body>
</html>