<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="ToDo_Application.Views.Index" %>

<!DOCTYPE>

<html>

<head>
      <link rel="stylesheet" href="/Styles/dashboard.css" />     
    <script src="../Scripts/angular.min.js" type="text/javascript"></script>
    <script src="../Scripts/angular-route.js" type="text/javascript"></script>
     <link href="../Styles/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/angular-messages.js" type="text/javascript"></script>
    <script src="../app.js" type="text/javascript"></script>
    <script src="../router.js" type="text/javascript"></script>
     <script src="../Controller/AddItemCtrl.js" type="text/javascript"></script>   
    <script src="../Scripts/checklist-model.js" type="text/javascript"></script>
    <script src="../Factories/AddItemFactory.js" type="text/javascript"></script>
    <script src="../Controller/ShopStoreCtrl.js" type="text/javascript"></script>
    <script src="../Controller/CartCtrl.js" type="text/javascript"></script> 
   <%-- <script src="../JSON/Country.js" type="text/javascript"></script>
    <script src="../JSON/State.js" type="text/javascript"></script>
    <script src="../JSON/districtList.js" type="text/javascript"></script>--%>
</head>
<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">               
                <a class="navbar-brand" href="#">To Do Application </a>
            </div>
        </div>
    </nav>
     <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="active"><a href="#">Menu </a></li>
                    <li><a href="#Add">Add new Item</a> </li>
                    <li><a href="#List">List Items</a> </li>
                   
                 
                </ul>
            </div>
            <div class="col-md-10 main">
                <div ng-view ng-app="myApp">
                    
                </div>
            </div>
        </div>
    </div>

</body>
</html>
