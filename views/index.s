<!doctype html>
<html>
	<head>
		<title>{{ isset($module_name) ? $module_name : '' }}</title>
		<link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="css/font-awesome/font-awesome.min.css" rel="stylesheet">
		<link href="app.css" rel="stylesheet">
		<script type="text/javascript" src="lib/jquery-1.11.2.min.js"></script>
		<script type="text/javascript" src="lib/list.js"></script>
		<script type="text/javascript" src="lib/moment.min.js"></script>
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
	</head>
<body>

    <nav class="navbar navbar-default navbar-fixed-top">
      	<div class="container-fluid">
	        <div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Monitr</a>
	        </div>
	        <div id="navbar" class="navbar-collapse collapse">
	        	<ul class="nav navbar-nav navbar-right">
	        		<li><a href="/logout">Logout</a></li>
	        	</ul>
	        </div>
		</div>
	</nav>

    <div class="container-fluid">
      	<div class="row">
        	<div class="col-sm-3 col-md-2 sidebar">
        		Sidebar
        	</div>
	        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
	        	Content
	        </div>
      	</div>
    </div>
	

</body>
</html>